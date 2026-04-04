import React from "react";
import Duty from "../Images/imagesDutyAfterSchool.png";
import Label from "../Atoms/Label";
import Button from "../Atoms/Button";
import Information from "../Images/logoInformation.png";
import Volume from "../Images/logoVolume.png";
import Video from "../Videos/DutyAfterSchool_Trailer.mp4"

const Hero = () => {
  return (
    <div className="flex justify-center relative w-full h-[225px] lg:h-[587px] text-left mb-[20px]">
      <video className="mask-b-from-20% w-full h-auto object-cover" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 pb-[40px] flex justify-center">
        <div className="flex flex-col items-start h-[118px] w-[320px] gap-[12px] lg:h-[233px] lg:w-[90%] lg:gap-[40px]">
          <Label
            isi={"Duty After School"}
            className={"font-[700] text-[24px] lg:text-[48px]"}
          />
          <Label
            className={"line-clamp-2 pr-[5px] lg:line-clamp-none lg:w-[50%] lg:text-[18px]/[140%] lg:font-[500]"} 
            isi={
              "Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
            }
          />
          <div className="flex flex-row items-center justify-between w-full text-[12px] lg:text-[18px]">
            <div className="flex items-center gap-[8px] rounded-[24px]">
              <Button
                className={"bg-[#0F1E93] py-[4px] px-[12px] lg:py-[10px] lg:px-[26px] rounded-[24px]"}
                isi={"Mulai"}
              />
              <Button
                className={
                  "flex items-center gap-[2.5px] bg-[#22282A] py-[4px] px-[12px] lg:py-[10px] lg:px-[26px] rounded-[24px]"
                }
              >
                <img
                  src={Information}
                  alt="information"
                  className="size-[12px] lg:size-[24px]"
                />
                <p>Selengkapnya</p>
              </Button>
              <Label className={"border rounded-[24px] p-[4px] lg:p-[10px]"} isi={"18+"} />
            </div>

            <Button className={"border rounded-[19px] lg:rounded-[24px] p-[6px] lg:p-[10px]"}>
              <img src={Volume} alt="mute/unmute" className="size-[12px] lg:size-[24px]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
