import { lazy, Suspense } from "react";
import { fromNow } from "../utils/dateFormatHandle";

const LoginPage = lazy(() => import("../pages/login/Index"));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h2>{fromNow}</h2>
      <LoginPage />
    </Suspense>
  );
}

export default Router;
