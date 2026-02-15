import React from "react";
import Clip from "../Images/logoClip.png";
import Chill from "../Images/logoChillText.png";
import Label from "../Atoms/Label";

const Logo = ({pages}) => {
console.log(pages)
  return (
    <div>
      <div className="flex justify-center gap-[4.72px] mb-[20px] lg:gap-[8.17px] lg:mb-[40.67px]">
        <img src={Clip} alt="Clip" className="w-[28.88px] h-[24px] lg:w-[42.56px] lg:h-[44px]" />
        <img src={Chill} alt="Chill" className="w-[62.97px] h-[24px] lg:w-[109px] lg:h-[44px]" />
      </div>
      <div>
        <Label
          isi={`${pages=="login"?"Masuk":"Daftar"}`}
          className={
            "text-[18px]/[140%] font-[700] tracking-[0.2px] mb-[4.62px] lg:text-[32px] lg:mb-[8px]"
          }
        />
        {pages == "login" ? <Label isi={"Selamat datang kembali!"} className={"lg:text-[16px]"}/> : <Label isi={"Selamat datang!"} className={"lg:text-[16px]"}/>  }
      </div>
    </div>
  );
};

export default Logo;
