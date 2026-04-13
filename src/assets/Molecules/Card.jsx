import Poster from "../Atoms/Poster";
import AliceH from "../Images/posterHorizontal/aliceInBorderlandHorizontal.png";
import AoudH from "../Images/posterHorizontal/allOfUsDeadHorizontal.png";
import AtwowH from "../Images/posterHorizontal/avatarTheWayOfWaterHorizontal.png";
import BlueLockH from "../Images/posterHorizontal/blueLockHorizontal.png";
import rioH from "../Images/posterHorizontal/rioHorizontal.png";
import StuartH from "../Images/posterHorizontal/stuartLittleHorizontal.png";
import BayMaxH from "../Images/posterHorizontal/bayMaxHorizontal.png";
import BlackAdamH from "../Images/posterHorizontal/blackAdamHorizontal.png";
import HappinessH from "../Images/posterHorizontal/stairsHorizontal.png";
import BnhH from "../Images/posterHorizontal/myHeroAcademiaHorizontal.png";
import MermaidH from "../Images/posterHorizontal/littleMermaidHorizontal.png";
import FastFuriousXH from "../Images/posterHorizontal/fastXFuriousHorizontal.png";
import Big6H from "../Images/posterHorizontal/bigHero6Horizontal.png";
import JurassicH from "../Images/posterHorizontal/jurassicWorldHorizontal.png";
import SpiderManH from "../Images/posterHorizontal/spiderManHorizontal.png";
import TedLassoH from "../Images/posterHorizontal/tedLassoHorizontal.png";
import SuzumeH from "../Images/posterHorizontal/suzumeHorizontal.png";
import ShazamH from "../Images/posterHorizontal/shazamHorizontal.png";

import BlueLockV from "../Images/posterVertical/blueLockVertical.png";
import AtwowV from "../Images/posterVertical/avatarTheWayOfWaterVertical.png";
import AoudV from "../Images/posterVertical/allOfUsDeadVertical.png";
import StuartV from "../Images/posterVertical/stuartLittleVertical.png";
import rioV from "../Images/posterVertical/rioVertical.png";
import HappinessV from "../Images/posterVertical/happinessVertical.png";
import SuzumeV from "../Images/posterVertical/suzumeVertical.png";
import TedLassoV from "../Images/posterVertical/tedLassoVertical.png";
import SpiderManV from "../Images/posterVertical/spidermanVertical.png";
import BnhV from "../Images/posterVertical/myHeroAcademiaVertical.png";
import MermaidV from "../Images/posterVertical/littleMermaidVertical.png";
import JurassicV from "../Images/posterVertical/jurassicWorldVertical.png";
import BlackAdamV from "../Images/posterVertical/blackAdamVertical.png";
import FastFuriousXV from "../Images/posterVertical/fastXFuriousVertical.png";
import Big6V from "../Images/posterVertical/bigHero6Vertical.png";
import BayMaxV from "../Images/posterVertical/baymaxVertical.png";
import DutyV from "../Images/posterVertical/dutyAfterSchoolVertical.png";
import ShazamV from "../Images/posterVertical/shazamVertical.png";
import AliceV from "../Images/posterVertical/aliceInBorderlandVertical.png";

import useStoreFilm from "../Stores/Store";

const Card = ({
  children,
  className,
  cardForm,
  sizeCard,
  line,
  moveLeft,
  moveRight,
  isHorizontal,
  triggerPop,
  isHover,
  popUp,
}) => {
  const dataFilm = useStoreFilm((state) => state.film);

  if (dataFilm.length === 0) return null

  const daftarFilmHorizontal = [
    {
      id: 1,
      isDark: true,
      isStar: true,
    },
    {
      id: 2,
      isDark: true,
      isStar: true,
    },
    {
      id: 3,
      isDark: true,
      isStar: true,
    },
    {
      id: 4,
      isDark: true,
      isStar: true,
    },
    {
      id: 5,
      isDark: true,
      isStar: true,
    },
    {
      id: 6,
      isDark: true,
      isStar: true,
    },
  ];
  
  const formatHorizontal = daftarFilmHorizontal.map((itemTambahan) => {
    const listFilm = dataFilm.find((f) => Number(f.id) === itemTambahan.id);
    return {
      ...listFilm,
      ...itemTambahan,
    };
  });

  const daftarFilmSatu = [
    {
      ...dataFilm[7],
      isNewEp: false,
      isPrem: true,
      isTop: true,
    },
    {
      ...dataFilm[8],
      isTop: true,
    },
    {
      ...dataFilm[6],
      isTop: true,
    },
    {
      ...dataFilm[14],
      isTop: true,
    },
    {
      ...dataFilm[13],
      isTop: true,
      isNewEp: true,
    },
    dataFilm[16],
  ];

  const daftarFilmDua = [
    {
      ...dataFilm[17],
      isNewEp: false,
      isPrem: true,
      isTop: false,
    },
    dataFilm[0],
    dataFilm[4],
    dataFilm[2],
    dataFilm[1],
    dataFilm[6],
    dataFilm[9],
    dataFilm[12],
    dataFilm[10],
    dataFilm[16],
  ];

  const daftarFilmTiga = [
    dataFilm[18],
    dataFilm[17],
    dataFilm[14],
    dataFilm[16],
    dataFilm[15],
    dataFilm[13],
    dataFilm[12],
    dataFilm[3],
    dataFilm[6],
    dataFilm[4],
    dataFilm[8],
  ];

  const daftarFilmEmpat = [
    dataFilm[14],
    dataFilm[10],
    dataFilm[11],
    dataFilm[3],
    dataFilm[6],
    dataFilm[5],
    dataFilm[1],
    dataFilm[0],
    dataFilm[9],
    dataFilm[12],
  ];

  return (
    <Poster
      cardForm={cardForm}
      sizeCard={sizeCard}
      daftarFilm={
        cardForm == "horizontal"
          ? formatHorizontal
          : line == 1
            ? daftarFilmSatu
            : line == 2
              ? daftarFilmDua
              : line == 3
                ? daftarFilmTiga
                : daftarFilmEmpat
      }
      className={className}
      moveLeft={moveLeft}
      moveRight={moveRight}
      isHorizontal={isHorizontal}
      triggerPop={triggerPop}
      isHover={isHover}
      popUp={popUp}
    >
      {children}
    </Poster>
  );
};

// const dataFilm = [
//   {
//     id: 1,
//     judul: "Alice in Borderland",
//     image: AliceV,
//     imageH: AliceH,
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     judul: "All of Us Dead",
//     image: AoudV,
//     imageH: AoudH,
//     rating: 4.8,
//   },
//   {
//     id: 3,
//     judul: "Avatar",
//     image: AtwowV,
//     imageH: AtwowH,
//     rating: 3.9,
//   },
//   {
//     id: 4,
//     judul: "Blue Lock",
//     image: BlueLockV,
//     imageH: BlueLockH,
//     rating: 3.1,
//   },
//   {
//     id: 5,
//     judul: "Rio",
//     image: rioV,
//     imageH: rioH,
//     rating: 3.5,
//   },
//   {
//     id: 6,
//     judul: "Stuart Little",
//     image: StuartV,
//     imageH: StuartH,
//     rating: 4.2,
//   },
//   {
//     id: 7,
//     image: BayMaxV,
//     imageH: BayMaxH,
//   },
//   {
//     id: 8,
//     image: BlackAdamV,
//     imageH: BlackAdamH,
//   },
//   {
//     id: 9,
//     image: BnhV,
//     imageH: BnhH,
//   },
//   {
//     id: 10,
//     image: FastFuriousXV,
//     imageH: FastFuriousXH,
//   },
//   {
//     id: 11,
//     image: DutyV,
//     imageH: DutyV,
//   },
//   {
//     id: 12,
//     image: Big6V,
//     imageH: Big6H,
//   },
//   {
//     id: 13,
//     image: MermaidV,
//     imageH: MermaidH,
//   },
//   {
//     id: 14,
//     image: HappinessV,
//     imageH: HappinessH,
//   },
//   {
//     id: 15,
//     image: JurassicV,
//     imageH: JurassicH,
//   },
//   {
//     id: 16,
//     image: SpiderManV,
//     imageH: SpiderManH,
//   },
//   {
//     id: 17,
//     image: TedLassoV,
//     imageH: TedLassoH,
//   },
//   {
//     id: 18,
//     image: SuzumeV,
//     imageH: SuzumeH,
//   },
//   {
//     id: 19,
//     image: ShazamV,
//     imageH: ShazamH,
//   },
// ];

export default Card;
