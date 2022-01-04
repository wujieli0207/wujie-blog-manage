import { isDevMode } from "/@/utils/env";

// 默认缓存时间为一周
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// AES 加秘密钥 key
export const cacheCipher = {
  key: "__wujieli-blog@@",
  iv: "@@wujieli-blog__",
};

// 缓存是否加密配置
export const enableStorageEncryption = !isDevMode();
