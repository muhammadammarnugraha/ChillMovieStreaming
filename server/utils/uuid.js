const { v7: uuidV7 } = require('uuid')

const createToken = () => {
    const token = uuidV7()
    console.log(token)
    return token
}

module.exports = {
    createToken
}