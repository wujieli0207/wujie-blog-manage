import { PermissionModeEnum } from "/@/enums/appEnum";
import { CacheTypeEnum } from "/@/enums/cacheEnum";

export interface IProjectConfig {
  permissionCachetype: CacheTypeEnum;
  permissionMode: PermissionModeEnum;
}

export interface IGlobEnvConfig {
  VITE_GLOB_APP_TITLE: string;
  VITE_GLOB_API_SHORT_NAME: string;
  VITE_GLOB_API_URL: string;
  VITE_GLOB_API_URL_PREFIX?: string;
  VITE_GLOB_UPLOAD_URL?: string;
}
