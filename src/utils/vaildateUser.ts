import * as yup from "yup";

// yup 테스트
export const userSchema = yup.object().shape({
  email: yup.string().email().required(),
  nickname: yup.string().length(2).required(),
});

export const userSubmitSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().length(6).required(),
});
