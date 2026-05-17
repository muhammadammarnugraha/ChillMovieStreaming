const pool = require("../config/config.js")

const getItems = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

// getItems().then(data => console.log("Hasil Testing Model:", data));

const getItem = async (id) => { //byID
    const result = await pool.query(`SELECT * FROM users WHERE id_pengguna = ${id}`);
    return result.rows;
};

// getItem().then(data => console.log("Hasil Testing Model:", data));

const postItem = async (body) => {
    const {nama_pengguna, kata_sandi, email, umur, gender, alamat} = body
    const result = await pool.query(`INSERT INTO users (nama_pengguna, kata_sandi, email, umur, gender, alamat) VALUES('${nama_pengguna}','${kata_sandi}','${email}',${umur},'${gender}','${alamat}') RETURNING *`)
    return result.rows[0]
}
// addFilm() 

const deleteItem = async (id) => {
    const result = await pool.query(`DELETE FROM users WHERE id_pengguna = '${id}' RETURNING *`)
    return result.rows[0]
}

// deleteFilm()

const updateItem = async (id,body) => {
    const {nama_pengguna, kata_sandi, email, umur, gender, alamat} = body
    const columnLength = Object.keys(body).length
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

module.exports = {
    getItems,
    getItem,
    postItem,
    deleteItem,
    updateItem,
    getWatchList,
    postWatchList
}
