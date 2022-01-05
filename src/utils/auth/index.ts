import { CacheTypeEnum } from "/@/enums/cacheEnum";
import projectSetting from "/@/settings/projectSetting";
import { BasicKeys, LocalStore, Persistent, SessionStore } from "/@/utils/cache/persistent";

const { permissionCachetype } = projectSetting;
const isLocal = permissionCachetype === CacheTypeEnum.LOCAL;

export function getAuthCache<T>(key: BasicKeys) {
  const fn = isLocal ? Persistent.getLocal : Persistent.getSession;
  return fn(key) as T;
}

export function setAuthCache(
  key: BasicKeys,
  value: LocalStore[BasicKeys] | SessionStore[BasicKeys]
) {
  const fn = isLocal ? Persistent.setLocal : Persistent.setSession;
  return fn(key, value, true);
}

export function clearAuthCache(immediate = true) {
  const fn = isLocal ? Persistent.clearLocal : Persistent.clearSession;
  return fn(immediate);
}
