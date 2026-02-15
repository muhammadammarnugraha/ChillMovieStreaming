import React from "react";
import Label from "../Atoms/Label";
import Input from "../Atoms/Input";
import InputForm from "../Molecules/InputForm";
import SubmitForm from "../Molecules/SubmitForm";
import Logo from "../Molecules/Logo";
import BG from "../Images/loginCinema.jpg"

// import Button from '../Atoms/Button'

const Login = () => {
  return (
    <div className={`flex justify-center items-center w-screen h-screen bg-center bg-cover bg-[${BG}]`}>
      <div className=" p-[24px] lg:p-[40px] flex flex-col justify-center bg-[#181A1CD6]/84 min-w-[306px] min-h-[384px] lg:h-[663px] lg:w-[529px] max-w-[529px] max-h-[663px] rounded-[8px] lg:rounded-[16px] gap-[20px] lg:gap-[37px]">
        <Logo pages="login"/>
        <InputForm pages="login"/>
        <SubmitForm pages="login"/>
      </div>
    </div>
  );
};

export default Login;
