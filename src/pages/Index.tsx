import Main from "../components/main/Main";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { HelmetComponent } from "../seo/helmet";
import { siteInfo } from "../seo/siteInfo";

const Index = () => {
  return (
    <DefaultLayout>
      <Main />
      <HelmetComponent siteInfo={siteInfo.login} />
    </DefaultLayout>
  );
};

export default Index;
