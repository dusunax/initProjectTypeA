import { FieldErrors } from "../../models/form";

export const fieldErrors: FieldErrors = {
  email: [
    {
      field: "email",
      type: "required",
      message: "이메일을 입력하세요.",
      show: true,
    },
  ],
  password: [
    {
      field: "password",
      type: "required",
      message: "비밀번호를 입력하세요.",
      show: true,
    },
  ],
};
