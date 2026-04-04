import React from "react";
import Button from "../Atoms/Button";
import Label from "../Atoms/Label";
import Google from "../Images/logoGoogle.png";
import { Link } from "react-router-dom";

const tempProps =
  "py-[8.09px] lg:py-[14.5px] w-[100%] rounded-[13.86px] lg:rounded-[24px] outline-[0.58px] lg:outline-[1px] outline-solid outline-[#E7E3FC3B] font-semibold lg:text-[16px] lg:font-[600]";

const SubmitForm = ({ pages }) => {
  return (
    <div className="flex flex-col gap-[4px] lg:gap-[8px]">
      <Link to={"/home"}>
        <Button
          type={"submit"}
          isi={pages == "login" ? "Masuk" : "Daftar"}
          className={`${tempProps} bg-[#3D4142] cursor-pointer`}
        />
      </Link>
      <Label
        isi={"Atau"}
        className={"text-[#9D9EA1] lg:text-[14px] lg:font-[500]"}
      />
      <div
        className={`${tempProps} flex justify-center gap-[11.55px] lg:gap-[20px] items-center`}
      >
        <img src={Google} alt="Google" className="size-[10px] lg:size-[18px]" />
        <Link to={"/"}>
          <Button
            type={"submit"}
            isi={`${pages == "login" ? "Masuk" : "Daftar"} dengan Google`}
            className={"cursor-pointer"}
          />
        </Link>
      </div>
    </div>
  );
};

export default SubmitForm;
