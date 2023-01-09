import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const PhoneSigninLg = (props) => {
  const { setAuthType, setSigninType, setAuthOptionsView } = props;
  const [showCode, setShowCode] = useState(false);

  const signupViewHnadler = () => {
    setAuthType("signup");
    setAuthOptionsView("signup");
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
    <>
      <div className="min-w-[100vw] w-full h-auto min-h-[100vh] bg-[url('/images/auth/bg-large.png')] bg-cover bg-no-repeat bg-center hidden sm:flex items-end sm:items-center justify-center">
        <div className="sm:px-[32px] lg:px-[80px] sm:py-[40px] w-full max-w-[1200px] h-full flex flex-col items-center justify-center">
          <div className="grid grid-cols-[1.1fr_0.9fr]  mdl:grid-cols-[1.2fr_0.7fr] gap-5 md:gap-10 w-full h-auto">
            {/* Left column */}
            {/* <Fade direction="left" className="animation-opacity"> */}
            <div className="w-full hidden sm:flex flex-col items-end justify-center gap-0">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[300px] md:w-[350px] mdl:w-[450px] lg:w-[500px] h-[230px]  md:h-[250px] lg:h-[300px] flex items-center justify-center relative object-contain">
                  <Image src="/images/auth/screens.png" alt="Bragtime" fill />
                </div>
                {/* => Bragtime Tagline */}
                <div className="flex items-center justify-center px-2 mdl:px-4 lg:px-8 py-1 md:py-2 mdl:py-3 lg:py-4 rounded-[12px] md:rounded-[24px] border-[3px] border-solid border-white">
                  <h1 className="text-white text-xl md:text-2xl mdl:text-3xl lg:text-4xl text-center font-bold font-jost uppercase w-full ">
                    A Place to Brag, Challenge, Compete and Win!
                  </h1>
                </div>
              </div>
              {/* => Image  */}
            </div>
            {/* </Fade> */}
            {/* Right Column => Sign in options + user email sign up form */}
            <Fade direction="right" className="animation-opacity">
              <div className="auth-card px-4 md:px-7 lg:px-10 py-8 flex flex-col items-center justify-start gap-5 mdl:gap-8 rounded-[30px] w-full h-auto">
                {/* Logo top */}
                <div className="w-[170px] h-[45px] flex items-center justify-center relative object-contain ">
                  <Image src="/images/logo/logo-lg.png" alt="Bragtime" fill />
                </div>
                {/* Signin options  bar  + divider + Input fields form */}
                <div className="w-full h-full flex flex-col items-center justify-start gap-2 mdl:gap-3">
                  {/* => Signin options bar */}

                  <div className="flex items-center justify-center gap-4">
                    {/* --> Email  */}
                    <div
                      onClick={() => setSigninType("email")}
                      className="w-[25px] h-[25px] flex items-center justify-center relative object-contain cursor-pointer"
                    >
                      <Image src="/icons/mail.svg" alt="Icon" fill />
                    </div>
                    {/* --> Google */}
                    <div className="w-[25px] h-[25px] flex items-center justify-center relative object-contain cursor-pointer">
                      <Image src="/icons/google.svg" alt="Icon" fill />
                    </div>
                    {/* --> Apple */}
                    <div className="w-[25px] h-[25px] flex items-center justify-center relative object-contain cursor-pointer">
                      <Image src="/icons/apple-black.svg" alt="Icon" fill />
                    </div>
                    {/* --> Metamask */}
                    <div className="w-[25px] h-[25px] flex items-center justify-center relative object-contain cursor-pointer">
                      <Image src="/icons/metamask.svg" alt="Icon" fill />
                    </div>
                  </div>

                  {/* => divider */}
                  <div className="flex items-center justify-between  w-[95%] md:w-[85%] lg:w-[70%] ">
                    <div className="w-full bg-black h-[1.5px]"></div>
                    <p className="mx-2 text-black font-josefin font-light italic text-base">
                      or
                    </p>
                    <div className="w-full bg-black h-[1.5px]"></div>
                  </div>
                  {/* => Form */}
                  <div className="w-full flex flex-col items-center justify-center gap-3">
                    {/* ---- Phone Number input ------- */}
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="w-full px-3 py-[5px] pt-[7px] text-base md:text-lg font-normal font-josefin placeholder:font-light placeholder:font-josefin placeholder:text-base md:placeholder:text-lg rounded-md bg-lightGray border-none  outline-none focus:border-none focus:outline-none  placeholder:leading-[0px]"
                    />

                    {/* ---- Password input ------- */}
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

                    {/* User Sign up check + Sign In button */}
                    {/* <Fade delay={0} direction={"up"}> */}
                    <div className="gap-1 md:gap-2 mt-3 md:mt-6 mb-10 md:mb-16 flex flex-col items-center justify-center w-full">
                      {/* User sign up check */}
                      <p className=" text-black text-center font-josefin font-normal italic text-[13px] md:text-sm">
                        You don&apos;t have an account?{" "}
                        <Link href="/" onClick={signupViewHnadler}>
                          <span className="font-bold text-darkBrown">
                            Sign Up
                          </span>
                        </Link>
                      </p>
                      {/* Sign In Button */}
                      <button className="uppercase auth-btn px-6 text-white rounded-md py-1 font-josefin font-bold text-base md:text-lg cursor-pointer hover:bg-opacity-50 transition-all duration-500">
                        Sign in
                      </button>
                    </div>
                    {/* </Fade> */}
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneSigninLg;
