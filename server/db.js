const Pool = require('pg').Pool;

// Coumminicate with database, create new constructor, with an object {}
const pool = new Pool({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: 'todoapp'
});

module.exports = pool;