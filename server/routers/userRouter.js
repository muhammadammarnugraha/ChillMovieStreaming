const express = require("express");
const router = express.Router();
const {handleGetItems, handleGetItem, handlePostItem, handleDeleteItem, handleUpdateItem, handleGetDS, handlePostDS, handleLogin, handleVerifyEmail} = require("../controllers/userController");
const authMiddleware = require("../middleware/auth") 

router.get("/",handleGetItems);

router.get("/verifikasi-email",handleVerifyEmail)

router.get("/:id",handleGetItem)

router.post("/register",handlePostItem)

router.delete("/:id",handleDeleteItem)

router.patch("/:id",handleUpdateItem)

router.get("/:id/daftarsaya",handleGetDS)

router.post("/:id/daftarsaya",handlePostDS)

router.post("/login",handleLogin)

module.exports = router;    

//bikin routes baru buat verify, pakai models yang sama dan controller yang sama