const express = require("express");
const router = express.Router();
const {handleGetItems, handleGetItem, handlePostItem, handleDeleteItem, handleUpdateItem, handleGetDS, handlePostDS} = require("../controllers/userController");

router.get("/",handleGetItems);

router.get("/:id",handleGetItem)

router.post("/",handlePostItem)

router.delete("/:id",handleDeleteItem)

router.patch("/:id",handleUpdateItem)

router.get("/:id/daftarsaya",handleGetDS)

router.post("/:id/daftarsaya",handlePostDS)

module.exports = router;    