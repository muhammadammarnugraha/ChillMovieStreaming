const userModel = require("../models/userModel")
const bcrypt = require("../utils/bcrypt")
const jwt = require("../utils/jsonwebtoken")
const uuid = require("../utils/uuid")
const nodemailer = require("../utils/sendMail")

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
        body.kata_sandi = await bcrypt.hashPassword(body.kata_sandi)
        const createToken = uuid.createToken()
        await userModel.postItem(body,createToken);
        const mailSent = await nodemailer.sendMail(body.email,createToken)
        res.json(mailSent)
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

const handleLogin = async (req, res) => {
    try {
        const body = req.body
        const user = await userModel.getByEmail(body)
        if (!user) {
            return res.status(401).send("Email atau Password Salah!")
        }
        if (await bcrypt.comparePassword(body.kata_sandi, user.kata_sandi) === false) {
            return res.status(401).send("Email atau Password Salah!") 
        } 
        return res.status(200).json({
            "status": "berhasil",
            "user": user,
            "token": await jwt.signToken(user)
        }) 
    } catch (error) {
        // return res.json(user)
        return res.status(500).send(error.message)
    }
}

const handleVerifyEmail = async (req, res) => {
    try {
        const clientToken = req.query['token_verify']
        const user = await userModel.getVerifyToken(clientToken)
        console.log(user)
        return (user.length > 0) ? res.status(200).send(`Email Verified Successfull`) : res.status(401).send(`Invalid Verification Token`)  
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    handleGetItems,
    handleGetItem,
    handlePostItem,
    handleDeleteItem,
    handleUpdateItem,
    handleGetDS,
    handlePostDS,
    handleLogin,
    handleVerifyEmail
}