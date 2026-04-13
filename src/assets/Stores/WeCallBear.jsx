import useStoreFilm from "./Store"
import { useEffect } from "react";

const WeCallBear = () => {
  const film = useStoreFilm((state) => state.film)
  const fetchFilm = useStoreFilm((state) => state.fetchFilm)
  const postFilm = useStoreFilm((state) => state.postFilm)
  const deleteFilm = useStoreFilm((state) => state.deleteFilm)
  useEffect(() => {
    fetchFilm()
  }, [])
  return (
    <div className="w-[80%] h-[full] bg-[red] flex gap-[20px] p-[100px] flex-wrap justify-center">
      <button className="size-[50px] bg-[black]" onClick={deleteFilm}>klik disini</button>
      {film.map((f) => {
        return (<img key={f.id} src={`/Images/posterHorizontal/${f.imageH}`} alt="film" className="w-[200px] h-[300px] bg-[green]"/>)
})}
      <div className="size-[300px] bg-[blue]">2</div>
      <div className="size-[300px] bg-[blue]">4</div>
      <div className="size-[300px] bg-[blue]">5</div>
      <div className="size-[300px] bg-[blue]">6</div>
      
      {console.log(film)}
    </div>
  )
};

export default WeCallBear;