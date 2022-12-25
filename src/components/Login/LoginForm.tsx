import { max } from "date-fns";
import styled from "styled-components";

import useRegisterRHF from "../../hooks/useUserRegisterForm";
import useUserStateHandle from "../../hooks/useUserStateHandle";
import { fieldInfos } from "../../utils/form/loginFieldInfos";
import InputWrap from "../molecules/inputBox/InputBox";

function LoginForm() {
  const RegisterRHF = useRegisterRHF().RegisterRHF;
  const { handleSubmit, errors } = RegisterRHF();

  const userStateHandle = useUserStateHandle().userStateHandle;
  const { submitUser } = userStateHandle();

  const LoginSubmitHandler = (data: any) => {
    submitUser(data);
  };

  return (
    <Form onSubmit={handleSubmit((data) => LoginSubmitHandler(data))}>
      {fieldInfos.map((fieldInfo) => (
        <InputWrap key={"input" + fieldInfo.name} fieldInfo={fieldInfo} />
      ))}
      <button type="submit">클릭!</button>
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
