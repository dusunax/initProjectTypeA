import LoginForm from "../../components/login/LoginForm";

import { DefaultLayout } from "../../layouts/DefaultLayout";
import { HelmetComponent } from "../../seo/helmet";
import { siteInfo } from "../../seo/siteInfo";

function LoginPage() {
  return (
    <DefaultLayout>
      <LoginForm />
      <HelmetComponent siteInfo={siteInfo.main} />
    </DefaultLayout>
  );
}

export default LoginPage;
