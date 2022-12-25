import React from "react";
import { Main } from "components/main";
import { NextPageWithLayout } from "../../../../moyeo-frontend/src/pages/_app";
import MainLayout from "layouts/MainLayout";

const Index: NextPageWithLayout = () => {
  return <Main />;
};

Index.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;
