import styled from "styled-components";
import { userRegister } from "../../api/register";

import useRegisterRHF from "../../hooks/useUserRegisterForm";
import useUserStateHandle from "../../hooks/useUserStateHandle";
import { fieldInfos } from "../../utils/form/loginFieldInfos";

import InputWrap from "../molecules/inputBox/InputBox";
import Button from "../atoms/buttons/Button";

function LoginForm() {
  const RegisterRHF = useRegisterRHF().RegisterRHF;
  const { handleSubmit, errors } = RegisterRHF();

  const userStateHandle = useUserStateHandle().userStateHandle;
  const { submitUser } = userStateHandle();

  const LoginSubmitHandler = async (data: any) => {
    submitUser(data);
    console.log(await userRegister(data));
  };

  return (
    <Form onSubmit={handleSubmit((data) => LoginSubmitHandler(data))}>
      {fieldInfos.map((fieldInfo) => (
        <InputWrap key={"input" + fieldInfo.name} fieldInfo={fieldInfo} />
      ))}
      <Button>버튼</Button>
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
