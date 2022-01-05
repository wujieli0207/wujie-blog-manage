import { MenuModeEnum, MenuTypeEnum } from "/@/enums/menuEnum";

export interface ILockInfo {
  pwd?: string | undefined;
  isLock?: boolean;
}

export interface IUserInfo {
  userId: string | number;
  userName: string;
  realName: string;
  avatar: string;
  desc?: string;
  homePath?: string;
  roles: IRoleInfo[];
}

export interface IRoleInfo {
  roleName: string;
  value: string;
}

// 窗口缩小时记录的属性
export interface IBeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}
