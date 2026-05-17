const express = require("express");
const router = express.Router();
const {handleGetFilms,handlePostFilm,handleGetFilm,handleDeleteFilm,handleUpdateFilm} = require("../controllers/filmController");

router.get("/",handleGetFilms);

router.get("/:id",handleGetFilm)

router.post("/",handlePostFilm)

router.delete("/:id",handleDeleteFilm)

router.patch("/:id",handleUpdateFilm)

module.exports = router;    