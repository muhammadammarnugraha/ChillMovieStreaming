const pool = require("../config/configDatabase.js")

const getFilms = async (query) => {
    let queryText = 'SELECT * FROM seriesfilm'
    if (Object.keys(query).length > 0) {
        let filterPart = Object.entries(query)
        .filter((value) => value[0] !== 'sortBy' && value[0] !== 'sortOrder')
        .map((value) => {
            let operator = '=' 
            if (value[0] == 'rating') {
                operator = '>='
            }
            if (value[0] == 'findTitle') {
                operator = ` ILIKE '%${value[1]}%'`
                return `judul_film ${operator}` 
            }
            return `${value[0]} ${operator} '${value[1]}'`
        })
        .join(" AND ")                
        if(query.sortBy && filterPart){
            queryText += ` WHERE ${filterPart}`
            queryText += ` ORDER BY ${query.sortBy} ${query.sortOrder?query.sortOrder:''}` 
        }
        if(query.sortBy){
            queryText += ` ORDER BY ${query.sortBy} ${query.sortOrder?query.sortOrder:''}` 
        }
        if(filterPart){
           queryText += ` WHERE ${filterPart}` 
        }
    }
    const result = await pool.query(queryText);
    return result.rows;
};

const getFilm = async (id) => {
    const result = await pool.query(`SELECT * FROM seriesfilm WHERE id_film = ${id}`)
    return result.rows[0]
}

const postFilm = async (body,imageh,imagev) => {
    const {judul_film, rating, pembuat, tgl_rilis} = body
    const result = await pool.query(`INSERT INTO seriesfilm (judul_film, rating, pembuat, tgl_rilis, imageh, imagev) VALUES('${judul_film}',${rating},'${pembuat}','${tgl_rilis}','${imageh}','${imagev}') RETURNING *`)
    return result.rows[0]
}

const deleteFilm = async (id) => {
    const result = await pool.query(`DELETE FROM seriesfilm WHERE id_film = '${id}' RETURNING *`)
    return result.rows[0]
}

const updateFilm = async (id,body) => {
    const columnLength = Object.keys(body).length
    const queryParts = Object.keys(body).map((key) => `${key} = '${body[key]}'`).join(', ')
    if (columnLength == 0) {
        return null
    }
    const result = await pool.query (`UPDATE seriesfilm SET ${queryParts} WHERE id_film = ${id} RETURNING *`)
    return result.rows
}

const filterRating = async (judul_film) => {
    const result = await pool.query (`SELECT * FROM seriesfilm WHERE judul_film = ${judul_film}`)
    return result.rows
}

module.exports = {getFilms,postFilm,getFilm,deleteFilm,updateFilm,filterRating}