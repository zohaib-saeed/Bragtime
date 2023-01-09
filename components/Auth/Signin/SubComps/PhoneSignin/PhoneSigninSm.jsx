import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const PhoneSigninSm = (props) => {
  const { setAuthType, setSigninType, setAuthOptionsView } = props;

  const [showCode, setShowCode] = useState(false);

  const signupViewHandler = () => {
    setAuthType("signup");
    setAuthOptionsView("signup");
  };

  const emailSigninHandler = () => {
    setSigninType("email");
    setAuthOptionsView("signinEmail");
  };

  const ShowIcon = () => (
    <div className="w-[15px] h-[15px] flex items-center justify-center relative object-contain ">
      <Image src="/icons/eye-show.svg" alt="" fill />
    </div>
  );

  const HideIcon = () => (
    <div className="w-[15px] h-[15px] flex items-center justify-center relative object-contain ">
      <Image src="/icons/eye-hide.svg" alt="" fill />
    </div>
  );

  return (
    <div className="min-w-[100vw]  min-h-[100vh] flex sm:hidden flex-col items-center justify-between  bg-[url('/images/auth/bg-small.png')] bg-cover bg-no-repeat bg-center">
      {/* Top => Arrow Icon */}
      <div className=" w-full  flex justify-start items-center gap-2 px-5 py-6">
        <div
          onClick={() => setAuthOptionsView("signin")}
          className="w-[20px] h-[20px] flex items-center justify-center relative object-contain cursor-pointer"
        >
          <Image src="/icons/arrow-left.svg" alt="Icon" fill />
        </div>
      </div>
      {/* Bottom  */}
      <div className=" w-full xs:max-w-[400px] flex flex-col items-center justify-end gap-2 px-5 py-10">
        {/* Logo */}
        <div className="w-[130px] h-[45px] flex items-center justify-center relative object-contain">
          <Image src="/images/logo/logo-sm.png" alt="" fill />
        </div>
        {/* Label */}
        <h2 className="text-base w-[90%] text-center text-white font-normal capitalize font-jost">
          A Place to Brag, Challenge, Compete and Win!
        </h2>
        {/* Right Column => Sign up options + user email sign up form */}
        <Fade direction="up" className="animation-opacity">
          <div className="px-6 py-6 bg-white flex flex-col items-center justify-start rounded-[20px] w-full h-auto">
            {/* Signin options  bar  + divider + Input fields form */}
            <div className="w-full flex flex-col items-center justify-start gap-2 mdl:gap-3">
              {/* => Signin options bar */}
              <div className="flex items-center justify-center gap-4">
                {/* --> Email */}
                <div
                  onClick={emailSigninHandler}
                  className="w-[20px] h-[20px] flex items-center justify-center relative object-contain cursor-pointer"
                >
                  <Image src="/icons/mail.svg" alt="Icon" fill />
                </div>
                {/* --> Google */}
                <div className="w-[20px] h-[20px] flex items-center justify-center relative object-contain cursor-pointer">
                  <Image src="/icons/google.svg" alt="Icon" fill />
                </div>
                {/* --> Apple */}
                <div className="w-[20px] h-[20px] flex items-center justify-center relative object-contain cursor-pointer">
                  <Image src="/icons/apple-black.svg" alt="Icon" fill />
                </div>
                {/* --> Metamask */}
                <div className="w-[20px] h-[20px] flex items-center justify-center relative object-contain cursor-pointer">
                  <Image src="/icons/metamask.svg" alt="Icon" fill />
                </div>
              </div>
              {/* => divider */}
              <div className="flex items-center justify-between  w-[85%]  ">
                <div className="w-full bg-black h-[1.5px]"></div>
                <p className="mx-2 text-black font-josefin font-light italic text-base">
                  or
                </p>
                <div className="w-full bg-black h-[1.5px]"></div>
              </div>
              {/* => Form */}
              <div className="w-full flex flex-col items-center justify-center gap-3">
                {/* ---- First name input ------- */}
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 py-[5px] pt-[7px] text-base md:text-lg font-normal font-josefin placeholder:font-light placeholder:font-josefin placeholder:text-base md:placeholder:text-lg rounded-md bg-lightGray border-none  outline-none focus:border-none focus:outline-none  placeholder:leading-[0px]"
                />
                {/* ---- Brag name input ------- */}
                <input
                  type="text"
                  placeholder="Brag Name"
                  className="w-full px-3 py-[5px] pt-[7px] text-base md:text-lg font-normal font-josefin placeholder:font-light placeholder:font-josefin placeholder:text-base md:placeholder:text-lg rounded-md bg-lightGray border-none  outline-none focus:border-none focus:outline-none  placeholder:leading-[0px]"
                />
                {/* ---- Phone Number input ------- */}
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="w-full px-3 py-[5px] pt-[7px] text-base md:text-lg font-normal font-josefin placeholder:font-light placeholder:font-josefin placeholder:text-base md:placeholder:text-lg rounded-md bg-lightGray border-none  outline-none focus:border-none focus:outline-none  placeholder:leading-[0px]"
                />
                {/* ---- Verification code input ------- */}
                <div className="relative w-full flex items-start justify-start">
                  <input
                    type={showCode ? "text" : "password"}
                    placeholder="Verification Code"
                    className="w-full px-3 py-[5px] pt-[7px] text-base md:text-lg font-normal font-josefin placeholder:font-light placeholder:font-josefin placeholder:text-base md:placeholder:text-lg rounded-md bg-lightGray border-none  outline-none focus:border-none focus:outline-none  placeholder:leading-[0px]"
                  />
                  <div
                    className="absolute right-2 top-[32%] cursor-pointer"
                    onClick={() => setShowCode(!showCode)}
                  >
                    {showCode ? <HideIcon /> : <ShowIcon />}
                  </div>
                </div>

                {/* User Sign in check */}
                <div className="flex items-center justify-center flex-col w-full gap-1">
                  <p className=" text-black text-center font-josefin font-normal italic text-[13px] md:text-sm">
                    You don&apos;t have an account?{" "}
                    <Link href="/" onClick={signupViewHandler}>
                      <span className="font-bold text-darkBrown">Sign up</span>
                    </Link>
                  </p>
                  {/* Sign Up Buton */}
                  <button className="uppercase auth-btn px-6 text-white rounded-md py-1 font-josefin font-bold text-base md:text-lg cursor-pointer hover:bg-opacity-50 transition-all duration-500">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default PhoneSigninSm;
