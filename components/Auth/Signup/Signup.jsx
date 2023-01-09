import React, { useState } from "react";
import EmailSignupLg from "./SubComps/EmalSignup/EmailSignupLg";
import PhoneSignupLg from "./SubComps/PhoneSignup/PhoneSignupLg";
import EmailSignupSm from "./SubComps/EmalSignup/EmailSignupSm";
import MainSignupSm from "./SubComps/MainSignupSm";
import PhoneSignupSm from "./SubComps/PhoneSignup/PhoneSignupSm";

const Signup = ({
  authType,
  setAuthType,
  authOptionsView,
  setAuthOptionsView,
}) => {
  const [signupType, setSignupType] = useState("phone");

  return (
    <>
      {signupType === "phone" && (
        <>
          <PhoneSignupLg
            setAuthType={setAuthType}
            setSignupType={setSignupType}
            setAuthOptionsView={setAuthOptionsView}
          />
          {authOptionsView === "signup" && (
            <MainSignupSm
              setSignupType={setSignupType}
              setAuthOptionsView={setAuthOptionsView}
            />
          )}
          {authOptionsView === "signupPhone" && (
            <PhoneSignupSm
              setAuthType={setAuthType}
              setSignupType={setSignupType}
              setAuthOptionsView={setAuthOptionsView}
            />
          )}
        </>
      )}

      {signupType === "email" && (
        <>
          <EmailSignupLg
            setAuthType={setAuthType}
            setSignupType={setSignupType}
            setAuthOptionsView={setAuthOptionsView}
          />
          {authOptionsView === "signup" && (
            <MainSignupSm
              setSignupType={setSignupType}
              setAuthOptionsView={setAuthOptionsView}
            />
          )}
          {authOptionsView === "signupEmail" && (
            <EmailSignupSm
              setAuthType={setAuthType}
              setSignupType={setSignupType}
              setAuthOptionsView={setAuthOptionsView}
            />
          )}
        </>
      )}
    </>
  );
};

export default Signup;
