import Poster from "../Atoms/Poster";
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
  popUp
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

export default Card;
