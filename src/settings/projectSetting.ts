import { PermissionModeEnum } from "/@/enums/appEnum";
import { IProjectConfig } from "/#/config";
import { CacheTypeEnum } from "/@/enums/cacheEnum";

const projectSetting: IProjectConfig = {
  permissionCachetype: CacheTypeEnum.LOCAL,
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,
};

export default projectSetting;
