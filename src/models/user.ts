export interface UserProfileResDTO {
  email: string;
  nickname: string;
}

export interface UserRegisterDTO {
  nickname: string;
  password: string;
}
export interface EditProfileReqDTO {
  nickname: string;
}

export interface ProfileResDTO {
  nickname: string;
}
