import React from "react";
import Label from "../Atoms/Label";
import Input from "../Atoms/Input";
import InputForm from "../Molecules/InputForm";
import SubmitForm from "../Molecules/SubmitForm";
import Logo from "../Molecules/Logo";
import BG from "../Images/registerCinema.jpg"

const Register = () => {
  return (
    <div className={`flex justify-center items-center w-screen h-screen bg-center bg-cover bg-[${BG}]`}>
      <div className=" p-[24px] lg:p-[40px] flex flex-col justify-center bg-[#181A1CD6]/84 min-w-[306px] min-h-[384px] lg:h-[778px] lg:w-[529px] max-w-[529px] max-h-[778px] rounded-[8px] lg:rounded-[16px] gap-[20px] lg:gap-[37px]">
        <Logo pages="register"/>
        <InputForm pages="register"/>
        <SubmitForm pages="register"/>
      </div>
    </div>
  )
}

export default Register