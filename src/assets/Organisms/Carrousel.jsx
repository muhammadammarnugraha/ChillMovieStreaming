import React, { useState } from "react";
import Card from "../Molecules/Card";
import Label from "../Atoms/Label";
import Left from "../Images/slideLeft.png";
import Right from "../Images/slideRight.png";

const Carrousel = ({ title, isHorizontal, line }) => {
  let sizeCard = "";
  let sizeCarousel = "";
  const [moveLeft, setMoveLeft] = useState(0);
  const [moveRight, setMoveRight] = useState(0);
  const [showPop, setPop] = useState("hidden");

  {
    isHorizontal
      ? ((sizeCard = "h-[151px] min-[1440px]:h-[162px]"),
        (sizeCarousel = "h-[235px] min-[1440px]:h-[309px]"))
      : ((sizeCard = "h-[145px] min-[1440px]:h-[365px]"),
        (sizeCarousel = "h-[189px] min-[1440px]:h-[512px]"));
  }

  return (
    <>
      {/* viewport mobile */}
      <div
        className={`relative ${sizeCarousel} mt-[20px] pl-[30px] w-full overflow-y-visible overflow-x-hidden block min-[1440px]:hidden`}
      >
        <Label
          isi={title}
          className={
            "text-left text-[20px] font[700] pb-[20px] min-[1440px]:text-[32px] min-[1440px]:pt-[40px] min-[1440px]:pb-[32px]"
          }
        />
        <Card
          className={`flex flex-row w-full  ${sizeCard} rounded-l-[6px] absolute overflow-y-visible overflow-x-scroll gap-[16px]`}
          cardForm={isHorizontal ? "horizontal" : "vertical"}
          sizeCard={sizeCard}
          line={line}
          triggerPop={setPop}
          popUp={true}
          
        />
      </div>
      {/* viewport desktop (1440px) */}
      <div className="w-[100%] flex justify-center items-center relative overflow-x-clip overflow-y-visible">
        <div
          className={`relative ${sizeCarousel} w-[100%] items-center hidden min-[1440px]:flex flex-col`}
        >
          <Label
            isi={title}
            className={
              "text-[20px] font[700] py-[20px] lg:text-[32px] lg:py-[40px] w-[1280px] flex"
            }
          />

          <div
            className={`relative flex w-[1280px] ${isHorizontal ? "h-[162px]" : "365px"} justify-center items-center overflow-visible`}
          >
            <button
              onClick={() => {
                setMoveLeft(
                  (moveLeft) => moveLeft + (isHorizontal ? 1304 : 1308),
                );
              }}
              className={`size-[44px] absolute translate-x-[-20px] ${isHorizontal ? "top-[59px]" : "top-[161px]"} left-0 z-[1] cursor-pointer`}
            >
              <img src={Left} alt="" />
            </button>
            <button
              onClick={() => {
                setMoveRight(
                  (moveRight) => moveRight - (isHorizontal ? 1304 : 1308),
                );
              }}
              className={`size-[44px] absolute translate-x-[20px] ${isHorizontal ? "top-[59px]" : "top-[161px]"} right-0 z-[1] cursor-pointer`}
            >
              <img src={Right} alt="" />
            </button>
            <Card
              className={`static flex justify-start flex-row w-full rounded-l-[6px] ${isHorizontal ? "gap-[24px]" : "gap-[28px]"}  overflow-x-clip overflow-y-visible`}
              cardForm={isHorizontal ? "horizontal" : "vertical"}
              sizeCard={sizeCard}
              line={line}
              moveLeft={moveLeft}
              moveRight={moveRight}
              isHorizontal={isHorizontal}
              triggerPop={setPop}
            />
          </div>
          <div
            className={`top-[94px] absolute ${showPop} w-[1280px] ${isHorizontal ? "h-[162px]" : "h-[365px]"} justify-center items-center overflow-visible`}
          >
            <Card
              className={`relative ${showPop} justify-start flex-row w-full z-[1] ${isHorizontal ? "gap-[24px]" : "gap-[28px]"}`}
              cardForm={isHorizontal ? "horizontal" : "vertical"}
              sizeCard={sizeCard}
              line={line}
              moveLeft={moveLeft}
              moveRight={moveRight}
              isHorizontal={isHorizontal}
              isHover={true}
              triggerPop={setPop}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrousel;
