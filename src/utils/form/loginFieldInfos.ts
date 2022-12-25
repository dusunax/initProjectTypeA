import { FieldInfos } from "../../models/form";

export const fieldInfos: FieldInfos = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    required: true,
    pattern: "",
    minLength: 1,
    maxLength: undefined,
    min: undefined,
    max: undefined,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "",
    required: true,
    pattern: "",
    minLength: 1,
    maxLength: undefined,
    min: undefined,
    max: undefined,
  },
];
