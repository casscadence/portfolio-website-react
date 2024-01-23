require("dotenv").config();
const { createPool } = require('mysql');

const urlDB = `mysql://root:E-3A5333c6GghGAFhhh3g3d2c434Ab6C@viaduct.proxy.rlwy.net:35738/railway`;

const getConnection = () => {
    const pool = createPool({urlDB})
}

/* const getConnection = () => {
    const pool = createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        connectionLimit: 10
    })
} */

module.exports = getConnection;