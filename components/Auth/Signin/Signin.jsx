import React, { useState } from "react";
import EmailSigninLg from "./SubComps/EmailSignin/EmailSigninLg";
import PhoneSigninLg from "./SubComps/PhoneSignin/PhoneSigninLg";
import EmailSigninSm from "./SubComps/EmailSignin/EmailSigninSm";
import MainSigninSm from "./SubComps/MainSigninSm";
import PhoneSigninSm from "./SubComps/PhoneSignin/PhoneSigninSm";

const Signin = ({ setAuthType, authOptionsView, setAuthOptionsView }) => {
  const [signinType, setSigninType] = useState("phone");

  return (
    <>
      {signinType === "phone" && (
        <>
          <PhoneSigninLg
            setAuthType={setAuthType}
            setSigninType={setSigninType}
            setAuthOptionsView={setAuthOptionsView}
          />
          {authOptionsView === "signin" && (
            <MainSigninSm
              setSigninType={setSigninType}
              setAuthOptionsView={setAuthOptionsView}
            />
          )}
          {authOptionsView === "signinPhone" && (
            <PhoneSigninSm
              setAuthType={setAuthType}
              setSigninType={setSigninType}
              setAuthOptionsView={setAuthOptionsView}
            />
          )}
        </>
      )}

      {signinType === "email" && (
        <>
          <EmailSigninLg
            setAuthType={setAuthType}
            setSigninType={setSigninType}
            setAuthOptionsView={setAuthOptionsView}
          />
          {authOptionsView === "signin" && (
            <MainSigninSm
              setSigninType={setSigninType}
              setAuthOptionsView={setAuthOptionsView}
            />
          )}
          {authOptionsView === "signinEmail" && (
            <EmailSigninSm
              setAuthType={setAuthType}
              setSigninType={setSigninType}
              setAuthOptionsView={setAuthOptionsView}
            />
          )}
        </>
      )}
    </>
  );
};

export default Signin;
