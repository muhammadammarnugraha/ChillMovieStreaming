const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async (plainPassword) => {
    return bcrypt.hash(plainPassword, saltRounds).then(function(hash) {
           return hash
    })
}

const comparePassword = async (plainPassword,hashedPassword) => {
    return bcrypt.compareSync(plainPassword,hashedPassword);
}




module.exports = { hashPassword, comparePassword};