import { defineStore } from "pinia";
import type { IUserInfo } from "/#/store";
import { RoleEnum } from "/@/enums/roleEnum";

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
    getRoleList(): RoleEnum[] {
      // TODO 缓存获取问题
      return this.roleList.length > 0 ? this.roleList : [];
    },
  },
  actions: {},
});
