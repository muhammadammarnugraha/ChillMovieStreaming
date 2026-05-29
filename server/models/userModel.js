const pool = require("../config/configDatabase.js")

const getItems = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

const getItem = async (id) => { 
    const result = await pool.query(`SELECT * FROM users WHERE id_pengguna = ${id}`);
    return result.rows;
};

const postItem = async (body,tokenVerify) => {
    const {nama_lengkap, nama_pengguna, kata_sandi, email, umur, gender, alamat} = body
    const result = await pool.query(`INSERT INTO users (nama_lengkap, nama_pengguna, kata_sandi, email, umur, gender, alamat, token_verify) VALUES('${nama_lengkap}','${nama_pengguna}','${kata_sandi}','${email}',${umur},'${gender}','${alamat}', '${tokenVerify}') RETURNING *`)
    return result.rows[0]
}

const deleteItem = async (id) => {
    const result = await pool.query(`DELETE FROM users WHERE id_pengguna = '${id}' RETURNING *`)
    return result.rows[0]
}

const updateItem = async (id,body) => {
    const queryParts = Object.keys(body).map((key) => `${key} = '${body[key]}'`).join(', ')
    const result = await pool.query(`UPDATE users SET ${queryParts} WHERE id_pengguna = ${id} RETURNING *`)
    return result.rows[0]
}

const getWatchList = async (id) => {
    const result = await pool.query(`SELECT seriesfilm.id_film, seriesfilm.judul_film, seriesfilm.imagev, daftarsaya.rating_personal FROM daftarsaya JOIN seriesfilm ON daftarsaya.id_film = seriesfilm.id_film WHERE daftarsaya.id_pengguna = ${id}`)
    return result.rows;
}

const postWatchList = async (id,body) => {
    const {id_film, rating_personal} = body
    const result = await pool.query(`INSERT INTO daftarsaya (id_pengguna, id_film, rating_personal) VALUES (${id},${id_film},${rating_personal}) RETURNING *`)
    return result.rows[0]
}

const getByEmail = async (body) => {
    const {email} = body
    const result = await pool.query(`SELECT * FROM users WHERE email = '${email}'`)
    return result.rows[0]
}

const getVerifyToken = async (clientToken) => {
    const result = await pool.query(`SELECT * FROM users WHERE token_verify = '${clientToken}'`)
    return result.rows
}

module.exports = {
    getItems,
    getItem,
    postItem,
    deleteItem,
    updateItem,
    getWatchList,
    postWatchList,
    getByEmail,
    getVerifyToken
}
