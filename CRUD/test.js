const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin123",
    database: "jango_db",
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });