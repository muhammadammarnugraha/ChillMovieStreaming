const pool = require("../config/config.js")

const getFilms = async () => {
    const result = await pool.query('SELECT * FROM seriesfilm');
    return result.rows;
};

const getFilm = async (id) => {
    const result = await pool.query(`SELECT * FROM seriesfilm WHERE id_film = ${id}`)
    return result.rows[0]
}

const postFilm = async (body) => {
    const {judul_film, rating, pembuat, tgl_rilis, imageh, imagev} = body
    const result = await pool.query(`INSERT INTO seriesfilm (judul_film, rating, pembuat, tgl_rilis, imageh, imagev) VALUES('${judul_film}',${rating},'${pembuat}','${tgl_rilis}','${imageh}','${imagev}') RETURNING *`)
    return result.rows[0]
}

const deleteFilm = async (id) => {
    const result = await pool.query(`DELETE FROM seriesfilm WHERE id_film = '${id}' RETURNING *`)
    return result.rows[0]
}

const updateFilm = async (id,body) => {
    const {judul_film, rating, pembuat, tgl_rilis, imageh, imagev} = body
    const columnLength = Object.keys(body).length
    const queryParts = Object.keys(body).map((key) => `${key} = '${body[key]}'`).join(', ')
    if (columnLength == 0) {
        return null
    }
    const result = await pool.query (`UPDATE seriesfilm SET ${queryParts} WHERE id_film = ${id} RETURNING *`)
    return result.rows
}

module.exports = {getFilms,postFilm,getFilm,deleteFilm,updateFilm}