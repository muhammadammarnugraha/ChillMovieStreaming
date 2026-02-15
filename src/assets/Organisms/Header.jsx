import React from "react";
import Clip from "../Images/logoClip.png";
import Chill from "../Images/logoChillText.png";
import Label from "../Atoms/Label";
import Button from "../Atoms/Button";
import Drop from "../Images/logoDropDown.png";
import User from "../Images/logoUser.png";

const Header = () => {
  return (
    <header className="sticky top-0 bg-[#181A1C] z-[2]">
      <div className="flex justify-between py-[6px] px-[20px] lg:py-[25px] lg:px-[80px] lg:text-[18px]">
        <div className="flex items-center gap-[12px] lg:gap-[20px] ">
          <div className="flex gap-[6.46px]">
            <img
              src={Clip}
              alt="headerLogoClip"
              className="flex w-[17.02px] h-[14.86px] lg:w-[29.55px] lg:h-[35px]"
            />
            <img
              src={Chill}
              alt="headerLogoChill"
              className=" w-[70px] h-[35px] hidden lg:flex"
            />
          </div>
          <Button isi={"Series"} />
          <Button isi={"Film"} />
          <Button isi={"Daftar Saya"} />
          <Button className={"flex flex-row items-center"}>
            <span>Genre</span>
            <img src={Drop} alt="dropDown" className="size-[16px] lg:hidden" />
          </Button>
        </div>
        <Button className={"flex flex-row items-center gap-[4px] lg:gap-[8px]"}>
          <img
            src={User}
            alt="userLogo"
            className="size-[20px] lg:size-[40px]"
          />
          <img
            src={Drop}
            alt="dropDown"
            className="size-[16px] lg:size-[28px]"
          />
        </Button>
      </div>
    </header>
  );
};

export default Header;
