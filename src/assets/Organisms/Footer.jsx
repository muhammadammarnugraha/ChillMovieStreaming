import React from "react";
import Clip from "../Images/logoClip.png";
import Chill from "../Images/logoChillText.png";
import Arrow from "../Images/logoRightArrow.png";

const Footer = () => {
  return (
    <div className="">
      <footer className="h-[180px] mt-[27px] border-t-[1px] border-t-[#E7E3FC3B] flex flex-col items-start w-full p-[20px] justify-between lg:hidden ">
        <div className="flex flex-col items-start w-[320px] gap-[16px]">
          <div className="flex h-[25px]">
            <img src={Clip} alt="clip" />
            <img src={Chill} alt="Chill" />
          </div>
          <p className="text-[12px] text-[#C1C2C4]">
            @2023 Chill All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <p className="text-[16px] font[500]">Genre</p>
            <img src={Arrow} alt="" />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[16px] font[500]">Bantuan</p>
            <img src={Arrow} alt="" />
          </div>
        </div>
      </footer>
      <footer className="h-[284px] border-t-[1px] border-t-[#E7E3FC3B] hidden flex-row items-center w-full p-[60px] justify-between lg:flex ">
        <div className="flex flex-col items-start w-[280px] gap-[16px] ">
          <div className="flex h-[44px]">
            <img src={Clip} alt="clip" />
            <img src={Chill} alt="Chill" />
          </div>
          <p className="text-[16px] text-[#C1C2C4]">
            @2023 Chill All Rights Reserved
          </p>
        </div>
        <div className="flex gap-[400px] h-[164px] items-center">
          <div className="flex gap-[15px] h-[127px] flex-col">
            <div className="items-start list-none flex flex-col flex-wrap text-[16px] font-[700]">
              Genre
            </div>
            <div className="items-start list-none flex flex-col gap-[28px] flex-wrap w-[514px] h-[127px] text-[16px] font-[500] text-[#C1C2C4]">
              <ul className="flex flex-col flex-wrap gap-[13px] items-start">
                <li>Aksi</li>
                <li>Anak-anak</li>
                <li>Anime</li>
                <li>Britania</li>
              </ul>
              <ul className="flex flex-col flex-wrap gap-[13px] items-start">
                <li>Drama</li>
                <li>Fantasi ilmiah & Fantasi</li>
                <li>Kejahatan</li>
                <li>KDrama</li>
              </ul>
              <ul className="flex flex-col flex-wrap gap-[13px] items-start">
                <li>Komedi</li>
                <li>Petualangan</li>
                <li>Perang</li>
                <li>Romantis</li>
              </ul>
              <ul className="flex flex-col flex-wrap gap-[13px] items-start">
                <li>Sains & Alam</li>
                <li>Thriller</li>
              </ul>
            </div>
          </div>
          <div className="items-start flex flex-col font-[500] text-[16px] gap-[13px] list-none text-[#C1C2C4]">
            <li className="text-[#FFFFFF] font-[700] pb-[2px]">Bantuan</li>
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat & Ketentuan</li>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
