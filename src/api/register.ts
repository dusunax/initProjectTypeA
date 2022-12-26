import client from ".";
import { UserRegisterDTO } from "../models/user";

/**
 * 유저 정보 수정 API
 */
export const userRegister = (payload: UserRegisterDTO) => {
  console.log("hi");
  return client.post(`/user`, payload);
};
