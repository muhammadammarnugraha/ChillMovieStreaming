const jwt = require('jsonwebtoken')

const signToken = async (payload) => {
    return jwt.sign(payload,process.env.JWT_KEY);
}

const verifyToken = async (token) => {
    return jwt.verify(token.substr(7),process.env.JWT_KEY)
}

module.exports = { signToken, verifyToken }