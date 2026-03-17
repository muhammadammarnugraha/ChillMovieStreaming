import React from "react";
import Poster from "../Atoms/Poster";
import AliceH from "../Images/posterHorizontal/aliceInBorderlandHorizontal.png";
import AoudH from "../Images/posterHorizontal/allOfUsDeadHorizontal.png";
import AtwowH from "../Images/posterHorizontal/avatarTheWayOfWaterHorizontal.png";
import BlueLockH from "../Images/posterHorizontal/blueLockHorizontal.png";
import rioH from "../Images/posterHorizontal/rioHorizontal.png";
import StuartH from "../Images/posterHorizontal/stuartLittleHorizontal.png";
import BayMaxH from "../Images/posterHorizontal/baymaxHorizontal.png";
import BlackAdamH from "../Images/posterHorizontal/blackAdamHorizontal.png";
import HappinessH from "../Images/posterHorizontal/stairsHorizontal.png";
import BnhH from "../Images/posterHorizontal/myHeroAcademiaHorizontal.png"
import MermaidH from "../Images/posterHorizontal/littleMermaidHorizontal.png"
import FastFuriousXH from "../Images/posterHorizontal/fastXFuriousHorizontal.png"
import Big6H from "../Images/posterHorizontal/bigHero6Horizontal.png"
import JurassicH from "../Images/posterHorizontal/jurassicWorldHorizontal.png"
import SpiderManH from "../Images/posterHorizontal/spidermanHorizontal.png"
import TedLassoH from "../Images/posterHorizontal/tedLassoHorizontal.png"
import SuzumeH from "../Images/posterHorizontal/suzumeHorizontal.png"
import ShazamH from "../Images/posterHorizontal/shazamHorizontal.png"


import HappinessV from "../Images/posterVertical/happinessVertical.png"
import SuzumeV from "../Images/posterVertical/suzumeVertical.png"
import TedLassoV from "../Images/posterVertical/tedLassoVertical.png"
import SpiderManV from "../Images/posterVertical/spidermanVertical.png"
import BnhV from "../Images/posterVertical/myHeroAcademiaVertical.png"
import MermaidV from "../Images/posterVertical/littleMermaidVertical.png"
import JurassicV from "../Images/posterVertical/jurassicWorldVertical.png"
import BlackAdamV from "../Images/posterVertical/blackAdamVertical.png"
import FastFuriousXV from "../Images/posterVertical/fastXFuriousVertical.png"
import Big6V from "../Images/posterVertical/bigHero6Vertical.png"
import BayMaxV from "../Images/posterVertical/baymaxVertical.png"
import DutyV from "../Images/posterVertical/dutyAfterSchoolVertical.png"
import ShazamV from "../Images/posterVertical/shazamVertical.png"
import AliceV from "../Images/posterVertical/aliceInBorderlandVertical.png";
import HoverPoster from "../Atoms/HoverPoster";




const Card = ({ children, className, cardForm, sizeCard, line, moveLeft, moveRight, isHorizontal, triggerPop, isHover, popUp}) => {
  return (
    
      <Poster cardForm={cardForm} sizeCard={sizeCard} daftarFilm={cardForm=="horizontal"?daftarFilmHorizontal
        :line==1?daftarFilmSatu
        :line==2?daftarFilmDua
        :line==3?daftarFilmTiga
        :daftarFilmEmpat
      } className={className} moveLeft={moveLeft} moveRight={moveRight} isHorizontal={isHorizontal} triggerPop={triggerPop} isHover={isHover} popUp={popUp}>{children}</Poster>
  );
};

const daftarFilmHorizontal = [
  {
    id: 1,
    judul: "Alice in Borderland",
    image: AliceH,
    imageH: AliceH,
    rating: "4.5/5",
    isDark: true,
    isStar: true
  }, {
    id: 2,
    judul: "All of Us Dead",
    image: AoudH,
    imageH: AoudH,
    rating: "4.8/5",
    isDark: true,
    isStar: true
  },{
    id: 3,
    judul: "Avatar",
    image: AtwowH,
    imageH: AtwowH,
    rating: "3.9/5",
    isDark: true,
    isStar: true
  },{
    id: 4,
    judul: "Blue Lock",
    image: BlueLockH,
    imageH: BlueLockH,
    rating: "3.1/5",
    isDark: true,
    isStar: true
  },{
    id: 5,
    judul: "Rio",
    image: rioH,
    imageH: rioH,
    rating: "3.5/5",
    isDark: true,
    isStar: true
  },{
    id: 6,
    judul: "Stuart Little",
    image: StuartH,
    imageH: StuartH,
    rating: "4.2/5",
    isDark: true,
    isStar: true
  },
];

const daftarFilmSatu = [
  {
    id: 1,
    image: BayMaxV,
    imageH: BayMaxH,
    isNewEp: false,
    isPrem: true,
    isTop: false
  }, {
    id: 2,
    image: BlackAdamV,
    imageH: BlackAdamH,
    isNewEp: true
  },{
    id: 3,
    image: BnhV,
    imageH: BnhH,
    isPrem: true,
    isTop: true
  },{
    id: 4,
    image: FastFuriousXV,
    imageH: FastFuriousXH,
    isNewEp: true,
    isTop: true
  },{
    id: 5,
    image: DutyV,
    imageH: DutyV,
    isTop: true,
    isNewEp: true
  },{
    id: 6,
    image: AliceV,
    imageH: AliceH,
    isTop: true,
    isNewEp: true
  },{
    id: 7,
    image: Big6V,
    imageH: Big6H,
    isTop: true,
    isNewEp: true
  }
  
];

const daftarFilmDua = [
  {
    id: 1,
    image: AliceV,
    imageH: AliceH,
    isNewEp: true,
    isPrem: false,
    isTop: true
  }, {
    id: 2,
    image: MermaidV,
    imageH: MermaidH
  },{
    id: 3,
    image: HappinessV,
    imageH: HappinessH
  },{
    id: 4,
    image: JurassicV,
    imageH: JurassicH,
    isNewEp: true
  },{
    id: 5,
    image: SpiderManV,
    imageH: SpiderManH,
    isNewEp: true
  }
];

const daftarFilmTiga = [
  {
    id: 1,
    image: BlackAdamV,
    imageH: BlackAdamH,
    isNewEp: true,
  }, {
    id: 2,
    image: TedLassoV,
    imageH: TedLassoH,
    isNewEp: true
  },{
    id: 3,
    image: SuzumeV,
    imageH: SuzumeH,
    isTop: true 
  },{
    id: 4,
    image: MermaidV,
    imageH: MermaidH,
  },{
    id: 5,
    image: BayMaxV,
    imageH: BayMaxH,
    isTop: true,
    isNewEp: true
  }
];

const daftarFilmEmpat = [
  {
    id: 1,
    image: ShazamV,
    imageH: ShazamH,
    isNewEp: true,
    isPrem: false,
    isTop: true
  }, {
    id: 2,
    image: BnhV,
    imageH: BnhH,
    isTop: true
  },{
    id: 3,
    image: SuzumeV,
    imageH: SuzumeH,
  },{
    id: 4,
    image: BayMaxV,
    imageH: BayMaxH,
  },{
    id: 5,
    image: DutyV,
    imageH: DutyV,
    isTop: true,
    isNewEp: true
  }
];

export default Card;
