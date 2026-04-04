import React from "react";
import Header from "../Organisms/Header";
import Hero from "../Organisms/Hero";
import Carrousel from "../Organisms/Carrousel";
import Footer from "../Organisms/Footer";

const HomeTemplates = () => {
  return (
    <div className="relative w-[100%] h-[1476px] min-w-[320px] min-h-fit lg:w-[100%] lg:h-[100%] lg:min-w-[1024px] lg:min-h-[3324px] max-w-none max-h-[3324px]">
      <Header />
      <Hero />
      <Carrousel title={"Melanjutkan Tonton Film"} isHorizontal={true}/>
      <Carrousel title={"Top Rating Film dan Series Hari ini"} isHorizontal={false} line={1}/>
      <Carrousel title={"Film Trending"} isHorizontal={false} line={2}/>
      <Carrousel title={"Rilis Baru"} isHorizontal={false} line={3}/>
      <Carrousel title={"Film Persembahan Chill"} isHorizontal={false} line={4}/>
      <Footer/>
    </div>
  );
};

export default HomeTemplates;
