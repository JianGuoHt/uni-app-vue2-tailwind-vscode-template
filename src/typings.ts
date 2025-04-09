export type IResData<T = any> = {
  code: number;
  msg: string;
  data: T;

  rows: T[];
  total: number;
};

export type IResPageData<T = any> = {
  code: number;
  msg: string;
  rows: T[];
  total: number;
};

// uni.uploadFile文件上传参数
export type IUniUploadFileOptions = {
  file?: File;
  files?: UniApp.UploadFileOptionFiles[];
  filePath?: string;
  name?: string;
  formData?: any;
};

// 角色
export type RoleInfo = {
  roleName: string;
  roleId: number;
  roleKey: string;
  status: string;
};

export type IUserInfo = {
  nickName?: string;
  avatar?: string;
  phonenumber: string;
  roles: RoleInfo[];
};

export type FileResponse = IResData<{
  fileName: string;
  filePath: string;
  fileSuffix: string;
  fileUrl: string;
  fileSize: string;

  [key: string]: string;
}>;

export interface UploadMyFile {
  uid: number;
  name: string;
  thumb: string;
  status: string;
  size: number;
  url: string;
  percent: number;

  fileName: string;
  filePath: string;
  fileSuffix: string;
  fileUrl: string;
  fileSize: string;
  fileType: string;

  response?: string | FileResponse;
}
