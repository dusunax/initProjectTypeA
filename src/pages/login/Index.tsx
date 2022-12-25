import LoginForm from "../../components/Login/LoginForm";
import { HelmetComponent } from "../../seo/helmet";

function LoginPage() {
  const siteInfo = {
    title: "로그인",
    description: "로그인 페이지",
    image: "이미지url",
    url: "http://배포주소/login",
  };

  return (
    <div>
      <LoginForm />
      <HelmetComponent siteInfo={siteInfo} />
    </div>
  );
}

export default LoginPage;
