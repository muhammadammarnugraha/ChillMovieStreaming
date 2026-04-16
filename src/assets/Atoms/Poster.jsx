import React, { useState } from "react";
import Star from "../Images/logoStar.png";
import Label from "./Label";
import Add from "../Images/logoAdd.png";
import Drop from "../Images/logoDropDown.png";
import Play from "../Images/logoPlay.png";
import Button from "./Button";
import Volume from "../Images/logoVolume.png";
import Quit from "../Images/logoQuit.png";
import useStoreFilm from "../Stores/Store";

const Poster = ({
  className,
  daftarFilm,
  sizeCard,
  cardForm,
  moveLeft,
  moveRight,
  isHorizontal,
  isHover,
  triggerPop,
  popUp,
}) => {
  const total = moveLeft + moveRight;
  const [active, setActive] = useState("");
  const postFilm = useStoreFilm((state) => state.postFilm);

  return (
    <div className={className}>
      {daftarFilm.map((film) => (
        <React.Fragment key={film.id}>
          <div
            key={film.id}
            style={total >= 0 ? { translate: 0 } : { translate: `${total}px` }}
            className={`relative flex justify-center items-center ${film.id === active ? "z-[1000]" : "z-[0]"} ${sizeCard} ${
              isHorizontal
                ? "w-[309px] min-[1440px]:w-[302px]"
                : "min-[1440px]:w-[234px]"
            } flex-shrink-0 transition delay-150 duration-1000`}
            onMouseOver={() => {
              triggerPop("opacity-100 scale-100");
              setActive(film.id);
            }}
            onMouseLeave={(e) => {

              triggerPop("opacity-0 scale-0");
              setActive("");
            }}
          >
            {isHover ? (
              <div
                className={`bg-[#181A1C] delay-300 duration-300 ${
                  film.id === active
                    ? "scale-100 opacity-100 pointer-events-auto z-[1000]"
                    : "scale-0 opacity-0 invisible"
                } rounded-[20px]`}
                onMouseOver={(e) => {
                  e.stopPropagation();
                  triggerPop("opacity-100 scale-100 pointer-events-none");
                  setActive(film.id);
                }}
              >
                <div className="flex flex-col h-[460px] w-[408px] rounded-[20px] shadow-[0px_19.43px_48.57px_0px_rgba(255,255,255,0.04)]">
                  <img
                    src={"/Images/posterHorizontal/" + film.imageH}
                    alt="Poster Film"
                    className="h-[255px] relative rounded-t-[20px] flex-shrink-0"
                  />
                  <div className="flex flex-col items-center justify-center self-center gap-[17px] align-center h-full w-[350px]">
                    <div className="flex flex-row w-full justify-between">
                      <div className="flex flex-row gap-[16px]">
                        <Button
                          isi={<img src={Play} alt="PlayMovie" />}
                          className={"size-[54px]"}
                        />
                        <Button
                          isi={
                            <img
                              src={Add}
                              alt="AddMovie"
                              className="size-[30px] cursor-pointer"
                            />
                          }
                          className="size-[54px] flex justify-center items-center border-solid border-[#9D9EA1] border-[1.21px] rounded-[30px]"
                          onClick={() =>
                            postFilm("daftarSaya", {
                              id: String(film.id),
                              judul: film.judul,
                              image: film.image,
                              imageH: film.imageH,
                              rating: film.rating,
                            })
                          }
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
                        className="size-[54px] flex justify-center items-center border-solid border-[#9D9EA1] border-[1.21px] rounded-[30px]"
                      />
                    </div>
                    <div className="h-[35px] w-full flex justify-start items-center font-[700] text-[18px] text-[#C1C2C4] gap-[19.43px]">
                      <Label
                        isi={"13+"}
                        className="bg-[#CDF1FF4D] px-[12px] py-[4px] rounded-[30px] h-[35px] w-[59px] flex items-center"
                      />
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
              <div>
                <div className={`${active === film.id ? "z-[10]" : "z-[-1]"}`}>
                  <img
                    src={
                      film.isDark
                        ? "/Images/posterHorizontal/" + film.imageH
                        : "/Images/posterVertical/" + film.image
                    }
                    alt="Poster Film"
                    className={`rounded-[8px] ${
                      film.isDark
                        ? "mask-b-from-30% w-[309px] h-[151px] min-[1440px]:w-[302px] min-[1440px]:h-[162px]"
                        : "w-[95px] h-[145px] min-[1440px]:w-[234px] min-[1440px]:h-[365px]"
                    }`}
                  />
                  {cardForm === "horizontal" ? (
                    <div className="size-full items-end flex justify-between absolute top-0 pb-[16px] px-[16px]">
                      <p className="text-[14px] font-[700]">{film.judul}</p>
                      <div className="flex items-center gap-[2.5px]">
                        {film.isStar && (
                          <img className="size-[12px]" src={Star} alt="Star" />
                        )}
                        <span className="text-[12px]">{film.rating}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="size-full flex justify-between absolute top-0 lg:text-[14px]">
                      {film.isNewEp ? (
                        <Label
                          className="flex justify-center items-center text-[5.74px] lg:text-[14px] ml-[7.65px] mt-[7.65px] bg-[#0F1E93] rounded-[24px] w-[44.5px] h-[14px] lg:w-[104px] lg:h-[28px] lg:px-[10px] lg:py-[4px]"
                          isi={"Episode Baru"}
                        />
                      ) : film.isPrem ? (
                        <Label
                          className="flex justify-center items-center text-[5.74px] lg:text-[14px] ml-[7.65px] mt-[7.65px] bg-[#B7A207] rounded-[24px] w-[44.5px] h-[14px] lg:w-[104px] lg:h-[28px] lg:px-[10px] lg:py-[4px]"
                          isi={"Premium"}
                        />
                      ) : (
                        <Label />
                      )}
                      {film.isTop ? (
                        <Label
                          className="flex justify-center items-center text-[6.69px] lg:text-[14px] mr-[6px] bg-[#B71F1D] w-[16px] h-[30px] tracking-[0.1px] font[400] rounded-tr-[5px] rounded-bl-[5px] lg:w-[31px] lg:h-[44px] lg:p-[5px]"
                          isi={"Top 10"}
                        />
                      ) : (
                        <Label />
                      )}
                    </div>
                  )}
                </div>
                {active === film.id && popUp == true && (
                  <div className="bg-[#181A1C]/80 fixed flex items-center justify-center inset-0 z-[100] h-[100vh] w-[100vw] rounded-[6px] ">
                    <div className="relative w-[320px] h-auto bg-[#181A1C] rounded-[16px]">
                      <div className="flex flex-row absolute h-[190px] w-full">
                        <Button
                          isi={
                            <img
                              src={Quit}
                              alt="Quit"
                              className="bg-[#181A1C] size-[16px] rounded-[12.35px] p-[2px] top-[8px] absolute right-[8px]"
                            />
                          }
                          onClick={() => {
                            triggerPop("hidden");
                            setActive("");
                          }}
                          className={"pointer-events-auto"}
                        />
                        <Button
                          isi={"Mulai"}
                          className={
                            "w-[55px] h-[25px] px-[12px] py-[4px] bg-[#0F1E93] rounded-[48px] flex items-center justify-center absolute bottom-[16.44px] left-[27px] font-[700] text-[12px]"
                          }
                        />
                        <Button
                          isi={
                            <img
                              src={Add}
                              alt="AddMovie"
                              className="size-[16px]"
                            />
                          }
                          className="size-[24px] flex justify-center items-center border-solid border-[#9D9EA1] border-[1.21px] rounded-[16px] bottom-[17.44px] left-[90.44px] absolute"
                          onClick={() => {
                            postFilm("daftarSaya", {
                              id: String(film.id),
                              judul: film.judul,
                              image: film.image,
                              imageH: film.imageH,
                              rating: film.rating,
                            });
                          }}
                        />
                        <Button
                          className={
                            "border rounded-[19px] p-[6px] size-[25px] flex justify-center items-center absolute right-[27.44px] bottom-[16.44px]"
                          }
                        >
                          <img
                            src={Volume}
                            alt="mute/unmute"
                            className="size-[17px]"
                          />
                        </Button>
                      </div>
                      <img
                        src={"/Images/posterHorizontal/" + film.imageH}
                        alt="film popUp"
                        className="w-full h-[190px] object-fill rounded-t-[6px]"
                      />
                      <div className="flex flex-col gap-[16px] px-[20px] py-[10px] ">
                        <div className="flex flex-col gap-[8px]">
                          <div className="flex gap-[5.5px] font-[600] items-center justify-start">
                            <Label isi={"2023"} />
                            <Label isi={"2j 29m"} />
                            <Label isi={"PG-13"} />
                            <Label
                              isi={"16+"}
                              className="bg-[#CDF1FF4D] p-[4px] rounded-[16px] size-[26px] font-[600] flex items-center"
                            />
                          </div>
                          <p className="text-justify">
                            Masih goyah karena kehilangan Gamora, Peter Quill
                            mengumpulkan timnya untuk mempertahankan alam
                            semesta dan salah satu dari mereka - sebuah misi
                            yang bisa berarti akhir dari Penjaga jika tidak
                            berhasil.
                          </p>
                        </div>
                        <div className="flex flex-col items-center gap-[8px] font-[400]">
                          <div className="flex justify-between w-full gap-[5px]">
                            <div className="flex justify-between w-[30%]">
                              <p>Cast</p>
                              <p>:</p>
                            </div>
                            <p className="text-left w-[70%]">
                              Chris Pratt, Chukwudi Iwuji, Bradley Cooper, dan
                              lain lain
                            </p>
                          </div>
                          <div className="flex justify-between w-full gap-[5px]">
                            <div className="flex justify-between w-[30%]">
                              <p>Genre</p>
                              <p>:</p>
                            </div>
                            <p className="text-left w-[70%]">
                              Aksi, Petualangan, Komedi
                            </p>
                          </div>
                          <div className="flex justify-between w-full gap-[5px]">
                            <div className="flex justify-between w-[30%]">
                              <p>Pembuat Film</p>
                              <p>:</p>
                            </div>
                            <p className="text-left w-[70%]">James Gunn</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start px-[20px] py-[10px]">
                        <Label
                          isi={"Rekomendasi Serupa"}
                          className={"font-[700] text-[12px]"}
                        />
                        <div className="flex justify-center items-center h-[205px] gap-[10px]">
                          <img
                            src={"/Images/posterVertical/" + film.image}
                            alt="film popUp"
                            className="w-[88px] h-[132px] object-fill"
                          />
                          <img
                            src={"/Images/posterVertical/" + film.image}
                            alt="film popUp"
                            className="w-[88px] h-[132px] object-fill"
                          />
                          <img
                            src={"/Images/posterVertical/" + film.image}
                            alt="film popUp"
                            className="w-[88px] h-[132px] object-fill"
                          />
                        </div>
                      </div>
                    </div>
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
