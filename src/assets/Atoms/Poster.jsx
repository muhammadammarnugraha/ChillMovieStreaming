import React, { useState } from "react";
import Star from "../Images/logoStar.png";
import Label from "./Label";
import Add from "../Images/logoAdd.png";
import Drop from "../Images/logoDropDown.png";
import Play from "../Images/logoPlay.png";
import Button from "./Button";

const Poster = ({
  className,
  daftarFilm,
  sizeCard,
  cardForm,
  moveLeft,
  moveRight,
  isHorizontal,
  isHover,
  popUp,
  triggerPop
}) => {
  const total = moveLeft + moveRight;
  const [active, setActive] = useState("");
 
  

  return (
    <div className={className}>
      {daftarFilm.map((film) => (
        <React.Fragment key={film.id}>
          <div
            style={total >= 0 ? { translate: 0 } : { translate: `${total}px` }}
            className={`relative flex justify-center items-center ${sizeCard} w-[309px] ${isHorizontal ? "min-[1440px]:w-[302px]" : "min-[1440px]:w-[234px]"} flex-shrink-0 transition delay-150 duration-1000 z-[0] ${active !== "" && film.id !== active ? "pointer-events-none" : "pointer-events-auto"}`}
            onMouseEnter={(e) => {
              triggerPop("flex");
              setActive(film.id);
            }}
            onMouseLeave={(e) => {
              triggerPop("hidden");
              setActive("");
            }}
          >
            {isHover ? (
              <div
                className={`bg-[#181A1C] delay-800 duration-300 ${film.id === active ? "scale-100 opacity-100" : "scale-0 opacity-50"} rounded-b-[20px]`}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <div className="flex flex-col h-[460px] w-[408px] rounded-b-[20px] shadow-[0px_19.43px_48.57px_0px_rgba(255,255,255,0.04)]">
                  <img
                    src={film.imageH}
                    alt="Poster Film"
                    className={`h-[255px] relative rounded-t-[20px] flex-shrink-0 `}
                  />
                  <div className="flex flex-col items-center justify-center self-center gap-[17px] align-center h-full w-[350px] ">
                    <div className="flex flex-row w-full justify-between">
                      <div className="flex flex-row gap-[16px] ">
                        <Button
                          isi={<img src={Play} alt="PlayMovie" />}
                          className={"size-[54px]"}
                        />
                        <Button
                          isi={
                            <img
                              src={Add}
                              alt="AddMovie"
                              className="size-[30px]"
                            />
                          }
                          className={
                            "size-[54px] flex justify-center items-center border-solid border-[#9D9EA1] border-[1.21px] rounded-[30px]"
                          }
                          onClick={()=>{
                            let storage = localStorage.getItem("data") || [];
                            storage = typeof storage == "string" ?JSON.parse(storage):[];
                            storage.push(
                              {
                                id: film.id,
                                image: film.image,
                                imageH: film.imageH,
                                rating: film.rating
                              }
                            )
                            storage = JSON.stringify(storage)
                            localStorage.setItem("data", storage)
                          }} 
                        />
                      </div>
                      <Button
                        isi={
                          <img
                            src={Drop}
                            alt="DetailMovie"
                            className="size-[30px]"
                          />
                        }
                        className={
                          "size-[54px] flex justify-center items-center border-solid border-[#9D9EA1] border-[1.21px] rounded-[30px]"
                        }
                      />
                    </div>
                    <div className="h-[35px] w-full flex justify-start items-center font-[700] text-[18px] text-[#C1C2C4] gap-[19.43px]">
                      <Label isi={"13+"} className={"bg-[#CDF1FF4D] px-[12px] py-[4px] rounded-[30px] h-[35px] w-[59px] flex items-center"}/>
                      <p className="text-[#FFFFFF]">2j 33m</p>
                    </div>
                    <div className="text-[18px] font-[600] h-[27px] w-full flex justify-between items-center text-[#C1C2C4]">
                      <p>CRIME</p>
                      <span>&bull;</span>
                      <p>ACTION</p>
                      <span>&bull;</span>
                      <p>DRAMA</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={"pointer-events-none"}
              >
                <img
                  src={film.isDark?film.imageH:film.image}
                  alt="Poster Film"
                  className={`rounded-[8px] ${film.isDark
                      ? "mask-b-from-30% w-[302px] h-[162px]"
                      : "w-[234px] h-[365px]"}`
                    
                  }
                />
                {cardForm == "horizontal" ? (
                  <div className="size-full items-end flex justify-between absolute top-0 pb-[16px] px-[16px]">
                    <p className="text-[14px] font-[700]">{film.judul}</p>
                    <div className="flex items-center gap-[2.5px] ">
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
                    {film.isNewEp == true ? (
                      <Label
                        className={
                          "flex justify-center items-center text-[5.74px] lg:text-[14px] ml-[7.65px] mt-[7.65px] bg-[#0F1E93] rounded-[24px] w-[44.5px] h-[14px] lg:w-[104px] lg:h-[28px] lg:px-[10px] lg:py-[4px]"
                        }
                        isi={"Episode Baru"}
                      />
                    ) : film.isPrem == true ? (
                      <Label
                        className={
                          "flex justify-center items-center text-[5.74px] lg:text-[14px] ml-[7.65px] mt-[7.65px] bg-[#B7A207] rounded-[24px] w-[44.5px] h-[14px]  lg:w-[104px] lg:h-[28px] lg:px-[10px] lg:py-[4px]"
                        }
                        isi={"Premium"}
                      />
                    ) : (
                      <Label />
                    )}
                    {film.isTop == true ? (
                      <Label
                        className={
                          "flex justify-center items-center text-[6.69px] lg:text-[14px] mr-[6px] bg-[#B71F1D] w-[16px] h-[30px] tracking-[0.1px] font[400] rounded-tr-[5px] rounded-bl-[5px] lg:w-[31px] lg:h-[44px] lg:p-[5px]"
                        }
                        isi={"Top 10"}
                      />
                    ) : (
                      <Label />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
export default Poster;
