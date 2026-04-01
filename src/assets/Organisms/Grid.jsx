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
  daftarFilm = JSON.parse(daftarFilm);
  const [hovered, setHovered] = useState(0);
  const [rating, setRating] = useState(0);
  return (
    <div className="h-full flex justify-start justify-self-center flex-wrap gap-x-[16px] gap-y-[32px] w-[1280px] z-[0] pb-[40px]"> 
      {daftarFilm.map((film) => (
        <React.Fragment key={film.id}>
          <div
            onMouseEnter={() => setHovered(film.id)}
            onMouseLeave={() => setHovered((film.id = null))}
            className="relative w-[200px] h-[300px]"
          >
            <img
              src={film.image}
              alt="Film Favorit" 
              className={`${hovered == film.id ? "z-[1]" : "scale-[1]"} w-[200px] h-[300px] rounded-[8px] absolute`}
            />  
            {/* `bg-[#181A1C] delay-800 duration-300 ${film.id === active ? "scale-100 opacity-100" : "scale-0 opacity-50"}` */}
            <div 
              className={`${hovered == film.id ? "flex flex-col shadow-[0px_19.43px_48.57px_0px_rgba(255,255,255,0.04)] scale-100 opacity-100 z-[100]" : "z-[100] flex flex-col scale-0 opacity-50"} w-[408px] h-[460px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[20px] delay-800 duration-300`}
            >
              <img
                src={film.imageH}
                alt="gambarHorizontal"
                className="rounded-t-[20px] w-[408px] h-[255px] shrink-0"
              />
              <div className="flex flex-col items-center justify-center self-center gap-[17px] align-center size-full rounded-b-[20px] bg-[#181A1C] p-[30px]">
                <div className="flex flex-row w-full justify-between">
                  <div className="flex flex-row gap-[16px] justify-center items-center">
                    <Button
                      isi={<img src={Play} alt="PlayMovie" />}
                      className={"size-[54px]"}
                    />
                    <Button
                      isi="Remove"
                      className={
                        "w-[102px] h-[42px] text-[16px] font-[700] flex justify-center bg-[#FF5B3A] items-center border-solid border-[#9D9EA1] rounded-[48px]"
                      }
                      onClick={() => {
                        let storage = localStorage.getItem("data");
                        storage = JSON.parse(storage);
                        let temp = storage.filter((f) => f.id !== film.id);
                        storage = JSON.stringify(temp);
                        localStorage.setItem("data", storage);
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
                <div className="h-[35px] w-full flex justify-between items-center font-[700] text-[18px] text-[#C1C2C4] gap-[19.43px]">
                  <div className="flex justify-between items-center gap-[35px]">
                    <Label
                      isi={"13+"}
                      className={
                        "bg-[#CDF1FF4D] px-[12px] py-[4px] rounded-[30px] h-[35px] w-[59px] flex items-center"
                      }
                    />
                    <p className="text-[#FFFFFF]">2j 33m</p>
                  </div>
                  <div className="size-[20px] flex justify-end items-center gap-[5px]">
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
                      <img src={Left} alt="decrease" className={"size-[20px]"}/>
                    </Button>
                    {<span className="flex justify-center items-center px-[20px] size-[10px]">{film.rating}</span>}
                    <img src={Star} alt="DetailMovie" className="size-[20px]" />
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
                      <img src={Right} alt="increase" className={"size-[20px]"}/>
                    </Button>
                  </div>
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default Grid;
