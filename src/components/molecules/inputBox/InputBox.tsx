import styled from "styled-components";
import useRegisterRHF from "../../../hooks/useUserRegisterForm";
import { FieldInfo } from "../../../models/form";
import { fieldErrors } from "../../../utils/form/formErrorList";
import { handleInputFocus } from "../../../utils/form/inputFocus";

export default function InputWrap({ fieldInfo }: any) {
  const { name, label, placeholder, required = true }: FieldInfo = fieldInfo;
  const RegisterRHF = useRegisterRHF().RegisterRHF;
  const { register, errors } = RegisterRHF();

  let errorMessage: string | undefined = "";

  if (errors[name]) {
    const currentFieldError = fieldErrors[name][0];
    if (currentFieldError.show) {
      errorMessage = currentFieldError.message;
    }
  }

  return (
    <Wrap>
      <Label>{label}</Label>
      <Input
        onFocus={handleInputFocus}
        type="text"
        placeholder={placeholder}
        {...register(name, {
          required,
        })}
      />
      {<Error>{errorMessage}</Error>}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-flow: wrap;

  padding-bottom: 10px;
  padding-top: 20px;

  &.active label {
    color: ${({ theme }) => theme.colors.primary.focus} !important;
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: ${({ theme }) => theme.typography.label.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.fontWeight};
`;

const Input = styled.input`
  padding: 10px;

  border-bottom: 1px solid #ccc;
  border-radius: 3px;

  color: ${({ theme }) => theme.colors.primary.normal};
  font-size: ${({ theme }) => theme.typography.input.fontSize};
  font-weight: ${({ theme }) => theme.typography.input.fontWeight};

  transition: all 0.2s ease-in-out;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.focus};
  }
`;

const Error = styled.div`
  width: 100%;
  text-align: right;
  min-height: 20px;

  color: ${({ theme }) => theme.typography.error.color};
  font-size: ${({ theme }) => theme.typography.error.fontSize};
  font-weight: ${({ theme }) => theme.typography.error.fontWeight};
`;
