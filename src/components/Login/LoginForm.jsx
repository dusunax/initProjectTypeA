import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useRef } from "react";
import SlackButton from "../atoms/buttons/SlackButton";

function LoginForm() {
  const [showModal, setShowModal] = useState(false);

  function getLanguage() {
    console.log(
      navigator.language,
      navigator.userLanguage,
      navigator.systemLanguage,
      navigator.languages
    );

    return (
      navigator.language || navigator.userLanguage || navigator.systemLanguage
    );
  }

  // 언어 확인
  const lang = getLanguage().toLowerCase();
  const isKor = lang.includes("ko");

  const copyUrlRef = useRef();

  const copyUrl = () => {
    if (!document.queryCommandSupported("copy")) {
      return alert("복사 기능이 지원되지 않는 브라우저입니다.");
    }
    copyUrlRef.current.select();
    document.execCommand("copy");
    console.log();
    copyUrlRef.current.blur();
  };

  const onClickShareSlackButtonHandler = () => {
    if (showModal) return;

    copyUrl();
    const url = "https://slack.com/ssb/";

    window.open(
      url,
      "_blank",
      "toolbar=no,scrollbars=yes,resizable=yes,top=50%,left=500,width=600,height=600"
    );

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          // value의 이메일이 없다면
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        console.log(JSON.stringify(values, null, 2));
        console.log("hi");
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("submittied");
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 300);
      }}
    >
      {({ isSubmitting }) => (
        <>
          <Form>
            <h1>{isKor ? "로그인" : "LoginForm"}</h1>
            <h2>{lang}</h2>

            <br />
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" />
            <br />

            <Field name="password" type="password" />
            <ErrorMessage name="password" component="p" />

            <button type="submit" disabled={isSubmitting}>
              클릭!
            </button>
          </Form>

          {/* 공유하기 부분 */}
          <div
            className="shareButtonContanier"
            style={{ position: "relative" }}
            onClick={onClickShareSlackButtonHandler}
          >
            <SlackButton />
            공유하기
            {showModal && (
              <div
                className="modal"
                style={{
                  position: "absolute",
                  padding: "20px",
                  backgroundColor: "#eee",
                  borderRadius: "20px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                comman + v
              </div>
            )}
            <br />
            <input
              id="copyUrl"
              type="text"
              ref={copyUrlRef}
              defaultValue={window.location.href}
            />
          </div>
        </>
      )}
    </Formik>
  );
}

export default LoginForm;
