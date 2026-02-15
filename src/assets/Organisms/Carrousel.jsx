import React from "react";
import Card from "../Molecules/Card";
import Label from "../Atoms/Label";
import Left from "../Images/slideLeft.png";
import Right from "../Images/slideRight.png";

const Carrousel = ({ title, isHorizontal, line }) => {
  let sizeCard = "";
  let sizeCarousel = "";
  {
    isHorizontal
      ? ((sizeCard = "h-[151px] lg:h-[162px]"),
        (sizeCarousel = "h-[235px] lg:h-[309px]"))
      : ((sizeCard = "h-[145px] lg:h-[365px]"),
        (sizeCarousel = "h-[189px] lg:h-[512px]"));
  }

  return (
    <>
      {/* viewport mobile */}
      <div
        className={`relative ${sizeCarousel} pl-[30px] w-full overflow-y-hidden overflow-x-hidden block lg:hidden`}
      >
        <Label
          isi={title}
          className={
            "text-left text-[20px] font[700] py-[20px] lg:text-[32px] lg:py-[40px]"
          }
        />
        <Card
          className={`flex flex-row w-full ${sizeCard} rounded-l-[6px] absolute overflow-x-scroll gap-[16px]`}
          cardForm={isHorizontal ? "horizontal" : "vertical"}
          sizeCard={sizeCard}
          line={line}
        />
      </div>
      {/* viewport desktop (1024px) */}
      <div className="w-[100%] flex justify-center">
        <div className={` ${sizeCarousel} w-[1024px] hidden lg:flex flex-col`}>
          <Label
            isi={title}
            className={
              "text-left text-[20px] font[700] py-[20px] lg:text-[32px] lg:py-[40px]"
            }
          />
          <div className=" relative flex items-center">
            <img
              src={Left}
              alt=""
              className=" absolute left-[-25px] top-[35%] z-[1]"
            />
            <img
              src={Right}
              alt=""
              className="absolute right-[-25px] top-[35%] z-[1]"
            />
            <Card
              className={`flex justify-start flex-row w-full ${sizeCard} rounded-l-[6px] overflow-y-hidden overflow-x-scroll gap-[28px]`}
              cardForm={isHorizontal ? "horizontal" : "vertical"}
              sizeCard={sizeCard}
              line={line}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrousel;
