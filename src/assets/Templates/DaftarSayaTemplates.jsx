import React from "react";
import Header from "../Organisms/Header";
import Hero from "../Organisms/Hero";
import Carrousel from "../Organisms/Carrousel";
import Footer from "../Organisms/Footer";
import Grid from "../Organisms/Grid"
import Label from "../Atoms/Label"

const HomeTemplates = () => {
  return (
    <div className="relative w-[100%] h-[1476px] min-w-[320px] min-h-[1476px] lg:w-[100%] lg:h-[100%] lg:min-w-[1024px] lg:min-h-[3324px] max-w-none max-h-[3324px]">
      <Header/>
      <Label isi={"Daftar Saya"} className={"text-[32px] text-[700] text-left mt-[80px] mb-[32px] w-[1280px] flex justify-start justify-self-center"}/>
      <Grid/>
      <Footer/>
    </div>
  );
};

export default HomeTemplates;
