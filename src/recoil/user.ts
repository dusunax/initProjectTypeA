import { atom } from "recoil";

export const isLoggedUser = atom({
  key: "isLoggedUser",
  default: false,
});

export const userState = atom({
  key: "user",
  default: {
    nickname: "",
  },
});

export const tokenState = atom({
  key: "token",
  default: "",
});
