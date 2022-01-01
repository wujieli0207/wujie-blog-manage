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
