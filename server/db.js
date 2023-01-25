const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Admin123",
    database: "jango_users"
})

module.exports = db;