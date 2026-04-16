import { create } from "zustand"
import axios from 'axios'

const useStoreFilm =  create((set) => ({
    film: [],
    filmDaftarSaya: [],
    fetchFilm: () => {
        axios({method: 'get', url:"https://69d3ee2f336103955f8fd27d.mockapi.io/api/film/daftarFilm"})
        .then((response) => set({film: response.data}))
        .catch((error) => (console.log("Gagal Fetch Film",error.message)))
    },
    fetchDaftarSaya: () => {
        axios({method: 'get', url:"https://69d3ee2f336103955f8fd27d.mockapi.io/api/film/daftarSaya"})
        .then((response) => set({filmDaftarSaya: response.data}))
        .catch((error) => (console.log("Gagal Fetch Film",error.message)))
    },
    postFilm: async (urlPost,dataPost) => {
        try{
            let isDuplicate = false
            set((state) => {
                if (state.filmDaftarSaya.some(list => list.id == dataPost.id)) {
                    isDuplicate = true
                }
            return state;
            } 
            )
            if (isDuplicate){
                alert("Data duplikat!")
                return;
            }
            await axios({method: 'post', url:"https://69d3ee2f336103955f8fd27d.mockapi.io/api/film/"+String(urlPost), data:dataPost})
            alert("Film ditambahkan")
            set((state) => ({filmDaftarSaya: [...state.filmDaftarSaya, dataPost]}))
        } catch (error) {
            alert("Terjadi gangguan koneksi")
            console.log(error.message)
        }
    },
    putFilm: async (id,dataPut,idDaftarSaya) => {
        try{
            await axios({method: 'put', url:"https://69d3ee2f336103955f8fd27d.mockapi.io/api/film/daftarSaya/"+String(idDaftarSaya), data:{"rating":dataPut}})
            set((state) => ({filmDaftarSaya: state.filmDaftarSaya.map((list) => (list.id === id? {...list, "rating":dataPut} : list))}))
        }catch{
            alert("Rating gagal update!")
            console.log(error.message)
        }
    },
    deleteFilm: async (id,idDaftarSaya) => {
        try{
            await axios.delete("https://69d3ee2f336103955f8fd27d.mockapi.io/api/film/daftarSaya/"+String(idDaftarSaya))
            set((state) => ({filmDaftarSaya: state.filmDaftarSaya.filter((list) => list.id !== id)}))
        }catch{
            alert("Gagal delete film!")
            console.log(error.message)
        }
    }
}))

export default useStoreFilm