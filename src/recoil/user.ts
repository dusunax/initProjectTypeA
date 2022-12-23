import { atom } from "recoil";

export const isLoggedUser = atom({
  key: "isLoggedUser",
  default: false,
});

export const userState = atom({
  key: "user",
  default: {
    email: "",
    nickname: "",
  },
});

export const userSubmitState = atom({
  key: "userSubmit",
  default: {
    email: "",
    password: "",
  },
});

export const tokenState = atom({
  key: "token",
  default: "",
});
