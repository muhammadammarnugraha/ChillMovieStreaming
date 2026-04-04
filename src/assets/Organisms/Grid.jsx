import React, { useState } from "react";
import DaftarSaya from "../Pages/DaftarSaya";
import Button from "../Atoms/Button";
import Add from "../Images/logoAdd.png";
import Drop from "../Images/logoDropDown.png";
import Play from "../Images/logoPlay.png";
import Label from "../Atoms/Label";
import Star from "../Images/logoStar.png";
import Left from "../Images/buttonLeft.png";
import Right from "../Images/buttonRight.png";

const Grid = () => {
  let daftarFilm = localStorage.getItem("data");
  daftarFilm = daftarFilm? JSON.parse(daftarFilm) : [];
  const [hovered, setHovered] = useState(0);
  const [rating, setRating] = useState(0);
  return (
    <div className="relative flex justify-start justify-self-center flex-wrap gap-x-[17px] gap-y-[16px] w-[320.18px] min-[1440px]:gap-x-[16px] min-[1440px]:gap-y-[32px] min-[1440px]:w-[1280px] z-[0] pb-[40px]"> 
      {daftarFilm.length == 0 ? <span className="font-[700] text-[15px] w-[100vw] h-[100vw] min-[1440px]:w-[100%] min-[1440px]:h-[100%] pt-[180px] flex justify-center items-center">== Belum ada film yang disimpan ==</span> : daftarFilm.map((film) => (
        <React.Fragment key={film.id}>
          <div
            onMouseOver={() => setHovered(film.id)}
            onMouseLeave={() => setHovered((film.id = null))}
            className="min-[1440px]:relative w-[95px] h-[145px] min-[1440px]:w-[200px] min-[1440px]:h-[300px]"
          >
            <img
              src={film.image}
              alt="Film Favorit" 
              className={`${hovered == film.id ? "z-[1]" : "scale-[1]"} w-[95px] h-[145px] min-[1440px]:w-[200px] min-[1440px]:h-[300px] rounded-[3.82px] min-[1440px]:rounded-[8px] absolute`}
            />  
            <div 
              className={`${hovered == film.id ? "flex flex-col bg-[#181A1C]/80 min-[1440px]:bg-[#181A1C]/0 w-[100vw] h-[100vh] inset-0 shadow-[0px_19.43px_48.57px_0px_rgba(255,255,255,0.04)] scale-100 opacity-100 z-[100]" : "z-[100] flex flex-col scale-0 opacity-50"} min-[1440px]:top-1/2 min-[1440px]:left-1/2 min-[1440px]:-translate-x-1/2 min-[1440px]:-translate-y-1/2 min-[1440px]:w-[408px] min-[1440px]:h-[460px] fixed min-[1440px]:absolute items-center justify-center rounded-[20px] min-[1440px]:delay-800 min-[1440px]:duration-300`}
              onClick={
                (e) => {
                  setHovered((film.id = null))
                  console.log("masuk")
              }
                }
                
              
            >
              <img
                src={film.imageH}
                alt="gambarHorizontal"
                className="rounded-t-[20px] flex justify-center items-center w-[280px] h-[150px] min-[1440px]:w-[408px] min-[1440px]:h-[255px] shrink-0"
              />
              <div className="flex flex-col items-center justify-center self-center gap-[17px] align-center w-[280px] min-[1440px]:size-full  rounded-b-[20px] bg-[#181A1C] p-[30px]"
                onClick={(e) => (e.stopPropagation())}
              >
                <div className="flex flex-row w-full justify-between">
                  <div className="flex flex-row gap-[16px] justify-center items-center">
                    <Button
                      isi={<img src={Play} alt="PlayMovie" className="size-[24px] min-[1440px]:size-[54px]"/>}
                      className={""}
                    />
                    <Button
                      isi="Remove"
                      className={
                        "w-[55px] h-[25px] text-[12px] min-[1440px]:w-[102px] min-[1440px]:h-[42px] min-[1440px]:text-[16px] font-[700] flex justify-center bg-[#FF5B3A] items-center border-solid border-[#9D9EA1] rounded-[48px]"
                      }
                      onClick={() => {
                        let storage = localStorage.getItem("data");
                        storage = JSON.parse(storage);
                        let temp = storage.filter((f) => f.id !== film.id);
                        storage = JSON.stringify(temp);
                        localStorage.setItem("data", storage);
                        setHovered(film.id === null)
                      }}
                    />
                  </div>
                  <Button
                    isi={
                      <img
                        src={Drop}
                        alt="DetailMovie"
                        className="size-[24px] min-[1440px]:size-[54px]"
                      />
                    }
                    className={
                      "size-[24px] min-[1440px]:size-[54px] flex justify-center items-center border-solid border-[#9D9EA1] border-[1.21px] rounded-[30px]"
                    }
                  />
                </div>
                {/* <div className="h-[35px] w-full flex justify-between items-center font-[700] text-[18px] text-[#C1C2C4] gap-[19.43px]"> */}
                <div className="h-[20px] min-[1440px]:h-[35px] w-full flex justify-between items-center font-[700] text-[14px] min-[1440px]:text-[18px] text-[#C1C2C4] gap-[19.43px]">
                  <div className="flex justify-between items-center gap-[10px] min-[1440px]:gap-[35px]">
                    <Label
                      isi={"13+"}
                      className={
                        "bg-[#CDF1FF4D] px-[6px] min-[1440px]:px-[12px] py-[2px] min-[1440px]:py-[4px] rounded-[30px] h-[25px] min-[1440px]:h-[35px] w-[35px] min-[1440px]:w-[59px] flex items-center justify-center"
                      }
                    />
                    <p className="text-[#FFFFFF]">2j 33m</p>
                  </div>
                  <div className="size-[20px] flex justify-end items-center gap-[3px] min-[1440px]:gap-[5px]">
                    <Button
                      onClick={() => {
                        let newNumber = Math.max(
                          0,
                          Number((film.rating - 0.1).toFixed(1)),
                        );
                        setRating(newNumber);
                        let storage = localStorage.getItem("data");
                        storage = JSON.parse(storage);
                        let temp = storage.map((f) =>
                          f.id === film.id ? { ...f, rating: newNumber } : f,
                        );
                        storage = JSON.stringify(temp);
                        localStorage.setItem("data", storage);
                      }}
                    >
                      <img src={Left} alt="decrease" className={"size-[13px] min-[1440px]:size-[20px]"}/>
                    </Button>
                    {<span className="flex justify-center items-center px-[10px] min-[1440px]:px-[20px] min-[1440px]:size-[10px]">{film.rating}</span>}
                    <img src={Star} alt="RatingMovie" className="size-[15px] min-[1440px]:size-[20px]" />
                    <Button
                      onClick={() => {
                        let newNumber = Math.min(
                          5,
                          Number((film.rating + 0.1).toFixed(1)),
                        );
                        setRating(newNumber);
                        let storage = localStorage.getItem("data");
                        storage = JSON.parse(storage);
                        let temp = storage.map((f) =>
                          f.id === film.id ? { ...f, rating: newNumber } : f,
                        );
                        storage = JSON.stringify(temp);
                        localStorage.setItem("data", storage);
                      }} 
                    >
                      <img src={Right} alt="increase" className={"size-[13px] min-[1440px]:size-[20px]"}/>
                    </Button>
                  </div>
                </div>
                <div className="text-[14px] min-[1440px]:text-[18px] font-[600] h-[27px] w-full flex justify-between items-center text-[#C1C2C4]">
                  <p>CRIME</p>
                  <span>&bull;</span>
                  <p>ACTION</p>
                  <span>&bull;</span>
                  <p>DRAMA</p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Grid;
