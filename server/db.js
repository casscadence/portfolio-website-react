const { createPool } = require('mysql');

const getConnection = () => {
    const pool = createPool({
        host: 'localhost',
        user: 'root',
        password: 'StarryLimit44!',
        database: 'portfolio_projects',
        connectionLimit: 10
    })
}

module.exports = getConnection;