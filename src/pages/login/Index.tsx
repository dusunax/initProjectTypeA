import LoginForm from "../../components/login/LoginForm";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { HelmetComponent } from "../../seo/helmet";

function LoginPage() {
  const siteInfo = {
    title: "로그인",
    description: "로그인 페이지",
    image: "이미지url",
    url: "http://배포주소/login",
  };

  return (
    <DefaultLayout>
      <LoginForm />
      <HelmetComponent siteInfo={siteInfo} />
    </DefaultLayout>
  );
}

export default LoginPage;
