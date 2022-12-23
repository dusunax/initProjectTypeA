import styled from "styled-components";

import useRegisterRHF from "../../hooks/useUserRegisterForm";
import useUserStateHandle from "../../hooks/useUserStateHandle";

function LoginForm() {
  const RegisterRHF = useRegisterRHF().RegisterRHF;
  const { register, handleSubmit, errors } = RegisterRHF();

  const userStateHandle = useUserStateHandle().userStateHandle;
  const { submitUser } = userStateHandle();

  return (
    <form onSubmit={handleSubmit((data: any) => submitUser(data))}>
      <InputBox>
        <Input {...register("email", { required: true })} />
        {errors.email && <p>이메일을 입력하소</p>}
      </InputBox>
      <InputBox>
        <Input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>숫자를 입력하소</p>}
      </InputBox>
      <InputBox>
        <Input
          {...register("password", {
            minLength: 2,
            maxLength: 20,
          })}
        />
        {errors.password && <p>패스워드 확인 필요</p>}
      </InputBox>
      <button type="submit">클릭!</button>
    </form>
  );
}

export default LoginForm;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > label {
    margin-bottom: 10px;
    background-color: #eee;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
`;
