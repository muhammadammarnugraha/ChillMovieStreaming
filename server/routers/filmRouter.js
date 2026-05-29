const express = require("express");
const router = express.Router();
const {handleGetFilms,handlePostFilm,handleGetFilm,handleDeleteFilm,handleUpdateFilm} = require("../controllers/filmController");
const {verifyAuth} = require("../middleware/auth"); 
const { uploadFiles } = require("../middleware/multer");



router.get("/", verifyAuth, handleGetFilms);

router.get("/:id", verifyAuth ,handleGetFilm)

router.post("/", verifyAuth, uploadFiles, handlePostFilm)

router.delete("/:id", verifyAuth,handleDeleteFilm)

router.patch("/:id", verifyAuth,handleUpdateFilm)

module.exports = router;    