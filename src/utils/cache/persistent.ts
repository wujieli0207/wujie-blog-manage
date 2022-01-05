import { toRaw } from "vue";
import { RouteLocationNormalized } from "vue-router";
import { createLocalStorage, createSessionStorage } from "/@/utils/cache";
import { Memory } from "./memory";
import { IProjectConfig } from "/#/config";
import { ILockInfo, IUserInfo } from "/#/store";
import {
  APP_LOCAL_CACHE_KEY,
  APP_SESSION_CACHE_KEY,
  LOCK_INFO_KEY,
  MULTIPLE_TABS_KEY,
  PROJ_CFG_KEY,
  ROLES_KEY,
  TOKEN_KEY,
  USER_INFO_KEY,
} from "/@/enums/cacheEnum";
import { DEFAULT_CACHE_TIME } from "/@/settings/encryptionSetting";

interface IBasicStore {
  [TOKEN_KEY]: string | number | null | undefined;
  [USER_INFO_KEY]: IUserInfo;
  [ROLES_KEY]: string[];
  [LOCK_INFO_KEY]: ILockInfo;
  [PROJ_CFG_KEY]: IProjectConfig;
  [MULTIPLE_TABS_KEY]: RouteLocationNormalized[];
}

type LocalStore = IBasicStore;
type SessionStore = IBasicStore;

type LocalKeys = keyof LocalStore;
type SessionKeys = keyof SessionStore;

const ls = createLocalStorage();
const ss = createSessionStorage();

const localMemory = new Memory(DEFAULT_CACHE_TIME);
const sessionMemory = new Memory(DEFAULT_CACHE_TIME);

function initPersisitentMemory() {
  const localCache = ls.get(APP_LOCAL_CACHE_KEY);
  const sessionCache = ss.get(APP_SESSION_CACHE_KEY);
  localCache && localMemory.resetCache(localCache);
  sessionCache && sessionMemory.resetCache(sessionCache);
}

export class Persistent {
  static getLocal<T>(key: LocalKeys) {
    return localMemory.get(key)?.value;
  }

  static setLocal(key: LocalKeys, value: LocalStore[LocalKeys], immediate = false): void {
    localMemory.set(key, toRaw(value));
    immediate && ls.set(APP_LOCAL_CACHE_KEY, localMemory.getCache);
  }

  static removeLocal(key: LocalKeys, immediate = false): void {
    localMemory.remove(key);
    immediate && ls.set(APP_LOCAL_CACHE_KEY, localMemory.getCache);
  }

  static clearLocal(immediate = false): void {
    localMemory.clear();
    immediate && ls.clear();
  }

  static getSession<T>(key: SessionKeys) {
    return sessionMemory.get(key)?.value as Nullable<T>;
  }

  static setSession(key: SessionKeys, value: SessionStore[SessionKeys], immediate = false): void {
    sessionMemory.set(key, toRaw(value));
    immediate && ss.set(APP_SESSION_CACHE_KEY, sessionMemory.getCache);
  }

  static removeSession(key: SessionKeys, immediate = false): void {
    sessionMemory.remove(key);
    immediate && ss.set(APP_SESSION_CACHE_KEY, sessionMemory.getCache);
  }

  static clearSession(immediate = false): void {
    sessionMemory.clear();
    immediate && ss.clear();
  }

  static clearAll(immediate = false) {
    sessionMemory.clear();
    localMemory.clear();
    if (immediate) {
      ls.clear();
      ss.clear();
    }
  }
}

// TODO 多个窗口打开时 token 不同步问题待处理

function storageChange(e: any) {
  const { key, newValue, oldValue } = e;

  if (!key) {
    Persistent.clearAll();
    return;
  }

  if (!!newValue && !!oldValue) {
    if (APP_LOCAL_CACHE_KEY === key) {
      Persistent.clearLocal();
    }
    if (APP_SESSION_CACHE_KEY === key) {
      Persistent.clearSession();
    }
  }
}

window.addEventListener("storage", storageChange);

initPersisitentMemory();
