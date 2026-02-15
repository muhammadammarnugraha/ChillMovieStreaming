import React from "react";
import Poster from "../Atoms/Poster";
import AliceH from "../Images/posterHorizontal/aliceInBorderlandHorizontal.png";
import AoudH from "../Images/posterHorizontal/allOfUsDeadHorizontal.png";
import AtwowH from "../Images/posterHorizontal/avatarTheWayOfWaterHorizontal.png";
import BlueLockH from "../Images/posterHorizontal/blueLockHorizontal.png";
import rioH from "../Images/posterHorizontal/rioHorizontal.png";
import StuartH from "../Images/posterHorizontal/stuartLittleHorizontal.png";

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




const Card = ({ children, className, cardForm, sizeCard, line}) => {
  return (
      <Poster cardForm={cardForm} sizeCard={sizeCard} daftarFilm={cardForm=="horizontal"?daftarFilmHorizontal
        :line==1?daftarFilmSatu
        :line==2?daftarFilmDua
        :line==3?daftarFilmTiga
        :daftarFilmEmpat
      } className={className}>{children}</Poster>
  );
};

const daftarFilmHorizontal = [
  {
    id: 1,
    judul: "Alice in Borderland",
    image: AliceH,
    rating: "4.5/5",
    isDark: true,
    isStar: true
  }, {
    id: 2,
    judul: "All of Us Dead",
    image: AoudH,
    rating: "4.8/5",
    isDark: true,
    isStar: true
  },{
    id: 3,
    judul: "Avatar",
    image: AtwowH,
    rating: "3.9/5",
    isDark: true,
    isStar: true
  },{
    id: 4,
    judul: "Blue Lock",
    image: BlueLockH,
    rating: "3.1/5",
    isDark: true,
    isStar: true
  },{
    id: 5,
    judul: "Rio",
    image: rioH,
    rating: "3.5/5",
    isDark: true,
    isStar: true
  },{
    id: 6,
    judul: "Stuart Little",
    image: StuartH,
    rating: "4.2/5",
    isDark: true,
    isStar: true
  },
];

const daftarFilmSatu = [
  {
    id: 1,
    image: BayMaxV,
    isNewEp: false,
    isPrem: true,
    isTop: false
  }, {
    id: 2,
    image: BlackAdamV,
    isNewEp: true
  },{
    id: 3,
    image: BnhV,
    isPrem: true,
    isTop: true
  },{
    id: 4,
    image: FastFuriousXV,
    isNewEp: true,
    isTop: true
  },{
    id: 5,
    image: DutyV,
    isTop: true,
    isNewEp: true
  }
];

const daftarFilmDua = [
  {
    id: 1,
    image: AliceV,
    isNewEp: true,
    isPrem: false,
    isTop: true
  }, {
    id: 2,
    image: MermaidV
  },{
    id: 3,
    image: HappinessV,
  },{
    id: 4,
    image: JurassicV,
    isNewEp: true
  },{
    id: 5,
    image: SpiderManV,
    isNewEp: true
  }
];

const daftarFilmTiga = [
  {
    id: 1,
    image: BlackAdamV,
    isNewEp: true,
  }, {
    id: 2,
    image: TedLassoV,
    isNewEp: true
  },{
    id: 3,
    image: SuzumeV,
    isTop: true 
  },{
    id: 4,
    image: MermaidV
  },{
    id: 5,
    image: BayMaxV,
    isTop: true,
    isNewEp: true
  }
];

const daftarFilmEmpat = [
  {
    id: 1,
    image: ShazamV,
    isNewEp: true,
    isPrem: false,
    isTop: true
  }, {
    id: 2,
    image: BnhV,
    isTop: true
  },{
    id: 3,
    image: SuzumeV
  },{
    id: 4,
    image: BayMaxV
  },{
    id: 5,
    image: DutyV,
    isTop: true,
    isNewEp: true
  }
];

export default Card;
