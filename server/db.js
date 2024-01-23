require("dotenv").config();
const { createPool } = require('mysql');

const urlDB = 'mysql://root:E-3A5333c6GghGAFhhh3g3d2c434Ab6C@viaduct.proxy.rlwy.net:35738/railway';

const getConnection = () => {
    const pool = createPool({
        urlDB
    })
}

module.exports = getConnection;