import React, { useState } from "react";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";

const Auth = () => {
  const [authType, setAuthType] = useState("signin");
  const [authOptionsView, setAuthOptionsView] = useState("signin");

  return (
    <>
      {authType === "signin" ? (
        <Signin
          authType={authType}
          setAuthType={setAuthType}
          authOptionsView={authOptionsView}
          setAuthOptionsView={setAuthOptionsView}
        />
      ) : (
        <Signup
          authType={authType}
          setAuthType={setAuthType}
          authOptionsView={authOptionsView}
          setAuthOptionsView={setAuthOptionsView}
        />
      )}
    </>
  );
};

export default Auth;
