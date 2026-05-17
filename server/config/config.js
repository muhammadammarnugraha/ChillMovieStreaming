const pg = require('pg')
const { Pool, Client } = pg
 
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
})
 
pool.query('SELECT NOW()')
  .then(res => {
    console.log('Koneksi Aman Saja! Jam Server:', res.rows[0].now);
  })
  .catch(err => {
    console.error('Koneksi Gagal:', err.stack);
  });

module.exports = pool;