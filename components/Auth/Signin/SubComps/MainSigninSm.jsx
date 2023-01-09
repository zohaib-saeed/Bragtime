import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const MainSigninSm = ({ setSigninType, setAuthOptionsView }) => {
  const emailSigninHandler = () => {
    setSigninType("email");
    setAuthOptionsView("signinEmail");
  };

  const phoneSigninHandler = () => {
    setSigninType("phone");
    setAuthOptionsView("signinPhone");
  };

  return (
    <div className="min-w-[100vw]  min-h-[100vh] flex sm:hidden flex-col items-center justify-end  bg-[url('/images/auth/bg-small.png')] bg-cover bg-no-repeat bg-center">
      <div className="w-full max-w-[400px] flex flex-col items-center justify-end gap-2 px-5 py-10">
        {/* Logo */}
        <div className="w-[130px] h-[45px] flex items-center justify-center relative object-contain">
          <Image src="/images/logo/logo-sm.png" alt="" fill />
        </div>
        {/* Label */}
        <h2 className="text-base w-[90%] text-center text-white font-normal capitalize font-jost">
          A Place to Brag, Challenge, Compete and Win!
        </h2>
        {/* Sign in options */}
        <Fade direction="up" className="animation-opacity">
          <div className="gap-3 mt-2 w-full  flex flex-col items-center justify-center ">
            {/* Google */}
            <div className="w-full flex justify-start items-center bg-white  px-4 xs:px-6 py-[10px] xs:py-[10px] rounded-md cursor-pointer ">
              {/* --> Google Icon */}
              <div className="w-[25px] h-[25px] flex items-center justify-center relative object-contain">
                <Image src="/icons/google.svg" alt="Icon" fill />
              </div>
              <p className="font-bold font-josefin text-black text-base text-center w-full mt-[2px]">
                Continue with Google
              </p>
            </div>
            {/* Apple */}
            <div className="w-full flex justify-start items-center bg-slateBlack  px-4 xs:px-6 py-[10px] xs:py-[10px] rounded-md cursor-pointer ">
              {/* --> Apple Icon */}
              <div className="w-[25px] h-[25px] flex items-center justify-center relative object-contain">
                <Image src="/icons/apple-white.svg" alt="Icon" fill />
              </div>
              <p className="font-bold font-josefin text-white text-base text-center w-full mt-[2px]">
                Continue with Apple
              </p>
            </div>
            {/* Metamask */}
            <div className="w-full flex justify-start items-center bg-white  px-4 xs:px-6 py-[10px] xs:py-[10px] rounded-md cursor-pointer ">
              {/* --> Metamask Icon */}
              <div className="w-[25px] h-[25px] flex items-center justify-center relative object-contain">
                <Image src="/icons/metamask.svg" alt="Icon" fill />
              </div>
              <p className="font-bold font-josefin text-lightOrange text-base text-center w-full mt-[2px]">
                Continue with Metamask
              </p>
            </div>
            {/*Email */}
            <div
              onClick={emailSigninHandler}
              className="w-full flex justify-start items-center bg-white px-4 xs:px-6 py-[10px] xs:py-[10px] rounded-md cursor-pointer "
            >
              {/* --> Email Icon */}
              <div className="w-[25px] h-[25px] flex items-center justify-center relative object-contain">
                <Image src="/icons/mail.svg" alt="Icon" fill />
              </div>
              <p className="font-bold font-josefin text-black text-base text-center w-full mt-[2px]">
                Continue with Email
              </p>
            </div>
            {/*Phone Number */}
            <div
              onClick={phoneSigninHandler}
              className="w-full flex justify-start items-center bg-white px-4 xs:px-6 py-[10px] xs:py-[10px] rounded-md cursor-pointer "
            >
              {/* --> Phone Icon */}
              <div className="w-[25px] h-[25px] flex items-center justify-center relative object-contain">
                <Image src="/icons/phone.svg" alt="Icon" fill />
              </div>
              <p className="font-bold font-josefin text-black text-base text-center w-full mt-[2px]">
                Continue with Phone Number
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MainSigninSm;
