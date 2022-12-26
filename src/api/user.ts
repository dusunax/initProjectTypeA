import client from "./index";
import { AxiosResponse } from "axios";
import { EditProfileReqDTO, UserProfileResDTO } from "../models/user";

/**
 * 유저 정보 조회 API
 */
export const getUserProfile = (): Promise<AxiosResponse<UserProfileResDTO>> => {
  return client.get(`/user`);
};

/**
 * 유저 정보 수정 API
 */
export const patchUserProfile = (payload: EditProfileReqDTO) => {
  return client.patch(`/user`, payload);
};
