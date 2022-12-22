import { DefaultLayout } from "./layouts/DefaultLayout";

import styled, { ThemeProvider } from "styled-components";
import * as theme from "./styles/theme.js";
import GlobalStyle from "./styles/GlobalStyle";

import { userState } from "./recoil/user";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { User } from "./models/user";

import { add, format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

import * as yup from "yup";

function App() {
  // 리코일 테스트
  const [user, setUser] = useRecoilState(userState);
  console.log(user);
  useEffect(() => {
    setUser({ nickname: "helllllllo" });
  }, []);

  // 리액트 훅 폼 테스트
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const saveUser = (user: User) => {
    console.log(user);
    setUser(user);
  };

  // yup 테스트
  let userSchema = yup.object().shape({
    age: yup.number().min(1).required(),
    email: yup.string().required(),
  });

  const checUser = async () => {
    try {
      userSchema.validate({
        age: 0,
        email: "ddd",
      });
    } catch (err) {
      console.log(err);
    }
  };
  checUser();
  // console.log(
  //   userSchema
  //     .validate({
  //       age: 1,
  //       email: "ddd",
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // );

  // date-fns 테스트
  let date = new Date("2022-12-21");
  console.log(format(date, "yyyy-MM-dd"));

  let fromNow = formatDistanceToNow(date, { addSuffix: true, locale: ko });

  return (
    <>
      <ThemeProvider theme={theme.defaultTheme}>
        <GlobalStyle />
        <div className="app">
          <DefaultLayout>
            <div>여기에 라우터</div>

            <h2>{fromNow}</h2>

            <form onSubmit={handleSubmit((data) => saveUser(data))}>
              <InputBox>
                <Input {...register("email", { required: true })} />
                {errors.email && <p>이메일을 입력하소</p>}
              </InputBox>
              <InputBox>
                <Input {...register("age", { pattern: /\d+/ })} />
                {errors.age && <p>숫자를 입력하소</p>}
              </InputBox>
              <button type="submit">클릭!</button>
            </form>
          </DefaultLayout>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

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
