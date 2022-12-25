import { useRecoilState } from "recoil";

import { userState } from "../recoil/user.js";
import { userSchema } from "../utils/form/vaildateUser.js";

type User = {
  email: string;
  nickname: string;
};
type UserSubmit = {
  email: string;
  password: string;
};

export default function useUserStateHandle() {
  const [user, setUser] = useRecoilState(userState);

  const submitUser = async (user: User) => {
    console.log(await vaildateUser(user));

    setUser(user);
  };

  const saveUser = async (user: User) => {
    setUser(user);
  };

  const vaildateUser = async (user: User) => {
    let result = undefined;
    try {
      userSchema.validate(user).catch((err) => {
        // console.log(err.name);
        console.log(err.message);
        result = false;
      });
      if (result !== false) {
        return { result: true };
      }
    } catch (error) {
      console.log("유저 데이터 유형과 맞지 않습니다.");
      return { result };
    }
  };

  const vaildateUserSubmit = async (userSubmit: UserSubmit) => {
    try {
      userSchema.validate(userSubmit);
      return { result: true };
    } catch (error) {
      console.log("유저 데이터 유형과 맞지 않습니다.");
      console.log(error);
      return { result: false };
    }
  };

  const userStateHandle = () => {
    return { saveUser, vaildateUser, vaildateUserSubmit, submitUser };
  };

  return {
    userStateHandle,
  };
}
