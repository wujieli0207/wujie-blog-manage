import { defineStore } from "pinia";
import type { IUserInfo } from "/#/store";
import { ROLES_KEY, TOKEN_KEY, USER_INFO_KEY } from "/@/enums/cacheEnum";
import { RoleEnum } from "/@/enums/roleEnum";
import { getAuthCache } from "/@/utils/auth";

interface IUserState {
  userInfo: Nullable<IUserInfo>;
  token?: string;
  roleList: RoleEnum[];
  sessionTimeout?: boolean;
  lastupdateTime: number;
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): IUserState => ({
    userInfo: null,
    token: undefined,
    roleList: [],
    sessionTimeout: false,
    lastupdateTime: 0,
  }),
  getters: {
    getUserInfo(): IUserInfo {
      return this.userInfo || getAuthCache<IUserInfo>(USER_INFO_KEY) || {};
    },
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getRoleList(): RoleEnum[] {
      return this.roleList.length > 0 ? this.roleList : getAuthCache<RoleEnum[]>(ROLES_KEY);
    },
    getSessionTimeout(): boolean {
      return !!this.sessionTimeout;
    },
    getLastUpdateTime(): number {
      return this.lastupdateTime;
    },
  },
  actions: {},
});
