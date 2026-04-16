import Label from "../Atoms/Label";
import Input from "../Atoms/Input";
import Eyes from "../Images/eyeOff.png";
import { Link } from "react-router-dom";
import { useState } from "react";



const InputForm = ({
  pages,
  username,
  setUsername,
  password,
  setPassword,
  repassword,
  setRepassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);
  
  return (
    <div className="text-start flex flex-col gap-[20px] lg:gap-[37px]">
      <div>
        <Label
          isi={"Username"}
          className={
            "text-[10px]/[140%] lg:text-[18px] font-[500] tracking-[0.2px] mb-[3.47px] lg:mb-[6px]"
          }
        />
        <Input
          name={"username"}
          type={"text"}
          placeholder={"Masukkan username"}
          className={
            "w-full lg:text-[16px] font-[400] rounded-[12px] lg:rounded-[24px] outline-[0.58px] outline-[#E7E3FC3B] px-[11.55px] py-[8px] lg:px-[20px] lg:py-[14px]"
          }
          value={username}
          onChange={setUsername}
        />
      </div>
      <div>
        <Label
          isi={"Kata Sandi"}
          className={
            "text-[10px]/[140%] lg:text-[18px] font-[500] tracking-[0.2px] mb-[3.47px] lg:mb-[6px]"
          }
        />
        <div className="flex justify-between items-center w-full lg:text-[16px] font-[400] rounded-[12px] lg:rounded-[24px] outline-[0.58px] outline-[#E7E3FC3B] px-[11.55px] py-[8px] lg:px-[20px] lg:py-[14px]">
          <Input
            name={"password"}
            type={showPassword?"text":"password"}
            placeholder={"Masukkan kata sandi"}
            className={"w-full outline-none"}
            valueUsername={password}
            onChange={setPassword}
          />
          <button onClick={()=>(setShowPassword(!showPassword))}>
            <img src={Eyes} alt="mata" className="size-[12px] lg:size-[20px] cursor-pointer" />
          </button>
        </div>
        {pages == "login" ? (
          <div className="flex justify-between mt-[6.93px] lg:mt-[12px]">
            <div className="flex gap-[4px] lg:gap-[5px]">
              <Label
                isi={"Belum punya akun?"}
                className={"text-[#9D9EA1] lg:text-[16px] lg:font-[400]"}
              />
              <Link to={"/register"}>
                <Label
                  isi={"Daftar"}
                  className={
                    "font-[500] lg:text-[14px] lg:font-[400] cursor-pointer"
                  }
                />
              </Link>
            </div>
            <Label isi={"Lupa kata sandi?"} className={"lg:text-[16px]"} />
          </div>
        ) : (
          <>
            <Label
              isi={"Konfirmasi Kata Sandi"}
              className={
                "text-[10px]/[140%] lg:text-[18px] font-[500] tracking-[0.2px] mt-[20px] lg:mt-[37px] mb-[3.47px] lg:mb-[6px]"
              }
            />
            <div className="flex justify-between items-center w-full rounded-[12px] lg:rounded-[24px] gap-[10px] lg:gap-[12px] px-[11.55px] lg:px-[20px] py-[8px] lg:py-[12.5px] outline-[0.58px] lg:outline-[1px] outline-[#E7E3FC3B]">
              <Input
                name={"passwordConfirm"}
                type={showRepassword? "text" : "password"}
                placeholder={"Masukkan kata sandi"}
                className={"w-full outline-none lg:text-[16px] lg:font-[400]"}
                valueUsername={repassword}
                onChange={setRepassword}
              />
              <button
              onClick={() => (setShowRepassword(!showRepassword))}>
                <img
                  src={Eyes}
                  alt="mata"
                  className="size-[12px] lg:size-[20px] cursor-pointer"
                />
              </button>
            </div>
            <div className="flex justify-start mt-[6.93px] lg:mt-[12px] gap-[4px] lg:gap-[6px]">
              <Label
                isi={`${pages == "login" ? "Belum punya akun?" : "Sudah punya akun?"}`}
                className={"text-[#9D9EA1] lg:text-[16px] lg:font-[400]"}
              />
              <Label
                isi={`${pages == "login" ? "Daftar" : "Masuk"}`}
                className={"font-[500] lg:text-[14px] lg:font-[400]"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InputForm;
