import React from "react";
import Star from "../Images/logoStar.png";
import Label from "./Label";

const Poster = ({ className, daftarFilm, sizeCard, cardForm }) => {
  return (
    <div className={className}>
      {daftarFilm.map((film) => (
        <div
          key={film.id}
          className={`relative ${sizeCard} flex-shrink-0 pb-[20px]`}
        >
          <img
            src={film.image}
            alt="Alice"
            className={film.isDark ? "mask-b-from-70% size-full" : "size-full"}
          />
          {cardForm == "horizontal" ? (
            <div className="size-full items-end flex justify-between absolute p-[26px] top-0">
              <p className="text-[14px] font-[700]">{film.judul}</p>
              <div className="flex items-center gap-[2.5px]">
                {film.isStar ? (
                  <img className="size-[12px]" src={Star} alt="Star" />
                ) : (
                  ""
                )}
                <span className="text-[12px]">{film.rating}</span>
              </div>
            </div>
          ) : (
            <div className="size-full flex justify-between absolute top-0 lg:text-[14px]">
              {film.isNewEp==true?<Label className={"text-[5.74px] lg:text-[14px] ml-[7.65px] mt-[7.65px] bg-[#0F1E93] rounded-[24px] w-[44.5px] h-[14px] lg:w-[104px] lg:h-[28px] lg:px-[10px] lg:py-[4px]"} isi={"Episode Baru"}/>
              :film.isPrem==true?<Label className={"text-[5.74px] lg:text-[14px] ml-[7.65px] mt-[7.65px] bg-[#B7A207] rounded-[24px] w-[44.5px] h-[14px]  lg:w-[104px] lg:h-[28px] lg:px-[10px] lg:py-[4px]"} isi={"Premium"}/>:<Label/>}
              {film.isTop==true?<Label className={"text-[6.69px] lg:text-[14px] mr-[6px] bg-[#B71F1D] w-[16px] h-[30px] tracking-[0.1px] font[400] rounded-tr-[5px] rounded-bl-[5px] lg:w-[31px] lg:h-[44px] lg:p-[5px]"} isi={"Top 10"}/>:<Label/>}
                            
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Poster;
