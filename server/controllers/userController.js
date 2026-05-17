const userModel = require("../models/userModel")

const handleGetItems = async (req,res) => {
    try {
        const users = await userModel.getItems();
        res.json(users) 
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const handleGetItem = async (req,res) => {
    try{
        const { id } = req.params; 
        const user = await userModel.getItem(id);
        res.json(user) 
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const handlePostItem = async (req,res) => {
    try {
        const body = req.body;
        const user = await userModel.postItem(body);
        res.json(user)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const handleDeleteItem = async (req,res) => {
    try {
        const { id } = req.params;
        const user = await userModel.deleteItem(id);
        const { id_pengguna, nama_pengguna } = user
        res.send(`User ${nama_pengguna} dengan id ${id_pengguna} berhasil dihapus`)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const handleUpdateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const user = await userModel.updateItem(id,body);
        res.json(user)
    } catch (error) {
        res.status(500).send(error.message);
    }    
}

const handleGetDS = async (req, res) => {
    try {
        const { id } = req.params;
        const daftarfilm = await userModel.getWatchList(id)
        res.json(daftarfilm)
    } catch (error) {
       res.status(500).send(error.message); 
    }
}

const handlePostDS = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const daftarfilm = await userModel.postWatchList(id, body)
        res.json(daftarfilm)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    handleGetItems,
    handleGetItem,
    handlePostItem,
    handleDeleteItem,
    handleUpdateItem,
    handleGetDS,
    handlePostDS
}