import { isNullOrUnDef } from "../is";
import { cacheCipher } from "/@/settings/encryptionSetting";
import { AesEncryption, IEncryptionParams } from "/@/utils/cipher";

export interface ICreateStorageParams extends IEncryptionParams {
  prefixKey: string;
  storage: Storage;
  hasEncrypt: boolean;
  timeout?: Nullable<number>;
}

export const createStorage = ({
  prefixKey = "",
  storage = sessionStorage,
  key = cacheCipher.key,
  iv = cacheCipher.iv,
  timeout = null,
  hasEncrypt = true,
}: Partial<ICreateStorageParams> = {}) => {
  if (
    hasEncrypt &&
    [key.length, iv.length].some((item) => {
      item !== 16;
    })
  ) {
    throw new Error("When hasEncrypt is true, the key or iv must be 16 bits!");
  }

  const encryption = new AesEncryption({ key, iv });

  const WebStorage = class WebStorage {
    private storage: Storage;
    private prefixKey?: string;
    private encryption: AesEncryption;
    private hasEncrypt: boolean;

    constructor() {
      this.storage = storage;
      this.prefixKey = prefixKey;
      this.encryption = encryption;
      this.hasEncrypt = hasEncrypt;
    }

    private getKey(key: string) {
      return `${this.prefixKey}${key}`.toUpperCase();
    }

    /**
     *
     * @param key
     * @param def
     * @returns
     * @description 读取缓存
     */
    get(key: string, def: any = null): any {
      const val = this.storage.getItem(this.getKey(key));
      if (!val) {
        return def;
      }

      try {
        const decVal = this.hasEncrypt ? this.encryption.decryptByAES(val) : val;
        if (decVal) {
          const data = JSON.parse(decVal);
          const { value, expire } = data;
          if (isNullOrUnDef(val) || expire >= new Date().getTime()) {
            return value;
          }
          this.remove(key);
        }
      } catch (e) {
        return def;
      }
    }

    /**
     *
     * @param key
     * @param value
     * @param expire
     * @description 设置缓存
     */
    set(key: string, value: any, expire: number | null = timeout) {
      const stringData = JSON.stringify({
        value,
        time: Date.now(),
        expire: !isNullOrUnDef(expire) ? new Date().getTime() + expire * 1000 : null,
      });

      const stringifyValue = this.hasEncrypt
        ? this.encryption.encryptByAES(stringData)
        : stringData;
      if (stringifyValue) {
        this.storage.setItem(this.getKey(key), stringifyValue);
      }
    }

    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }

    clear(): void {
      this.storage.clear();
    }
  };

  return new WebStorage();
};
