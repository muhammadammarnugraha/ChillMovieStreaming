import React from "react";
import Clip from "../Images/logoClip.png";
import Chill from "../Images/logoChillText.png";
import Arrow from "../Images/logoRightArrow.png";

const Footer = () => {
  return (
    <>
    <footer className="h-[180px] mt-[27px] border-t-[1px] border-t-[#E7E3FC3B] flex flex-col items-start w-full p-[20px] justify-between lg:hidden">
      <div className="flex flex-col items-start w-[320px] gap-[16px]">
        <div className="flex h-[25px]">
          <img src={Clip} alt="clip" />
          <img src={Chill} alt="Chill" />
        </div>
        <p className="text-[12px] text-[#C1C2C4]">@2023 Chill All Rights Reserved</p>
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
    <footer className="h-[284px] border-t-[1px] border-t-[#E7E3FC3B] hidden flex-row items-center w-full p-[40px] py-[20px] justify-between lg:flex">
      <div className="flex flex-col items-start w-[280px] gap-[16px]">
        <div className="flex h-[44px]">
          <img src={Clip} alt="clip" />
          <img src={Chill} alt="Chill" />
        </div>
        <p className="text-[16px] text-[#C1C2C4]">@2023 Chill All Rights Reserved</p>
      </div>
      <div className="flex gap-[400px]">
        <div>
            <div className="items-start list-none flex flex-col flex-wrap text-[12px] pb-[10px] font-[700]">
                Genre
            </div>
            <div className="items-start list-none flex flex-col flex-wrap w-[150px] h-[100px] text-[12px] gap-5 grid-cols-4 text-[#C1C2C4]">
                <li>Aksi</li>
                <li>Anak-anak</li>
                <li>Anime</li>
                <li>Britania</li>
                <li>Drama</li>
                <li>Fantasi ilmiah & Fantasi</li>
                <li>Kejahatan</li>
                <li>KDrama</li>
                <li>Komedi</li>
                <li>Petualangan</li>
                <li>Perang</li>
                <li>Romantis</li>
                <li>Sains & Alam</li>
                <li>Thriller</li>
            </div>
        </div>
        <div className="items-start flex flex-col text-[12px] gap-5 list-none text-[#C1C2C4]">
            <li className="text-[#FFFFFF] font-[700]">Bantuan</li>
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat & Ketentuan</li>
        </div>
      </div>
    
    </footer>
    </>
  );
};

export default Footer;
