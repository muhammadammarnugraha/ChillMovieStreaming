const jwt = require("../utils/jsonwebtoken")

const verifyAuth = async (req,res,next) => {
    const token = req.headers.authorization;
    try {
        await jwt.verifyToken(token)
        next()         
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    verifyAuth
}