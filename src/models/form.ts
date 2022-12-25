export type FieldInfo = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  pattern: string | undefined;
  min: number | undefined;
  max: number | undefined;
  minLength: number | undefined;
  maxLength: number | undefined;
};

export type FieldInfos = FieldInfo[];

export type FieldError = {
  field: string;
  type: string;
  message: string;
  show: boolean;
};

export type FieldErrors = {
  [field: string]: FieldError[];
};
