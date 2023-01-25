const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 9000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin123",
    database: "jango_db",
});

// Home
app.get("/", (req, res) => {
    console.log(req.query);
    res.send("hello");
});

app.get("/display-user", (req, res) => { 
    // querry display database
    connection.query(
        "SELECT * FROM student ",
            function (err, results) {
            console.log(results);
            res.json(results);})
});

// Insert
app.post("/add-user", (req, res) => {
    const { fname, lname, address, email } = req.body;
    // query insert to database
    connection.query(
        "INSERT INTO student (fname, lname, address, email) VALUES (?,?,?,?)",
        [fname, lname, address, email], 
            function (err, results) {
            console.log(results);
            res.json(results);}); 
});

// Update
app.post("/update-user", (req, res) => {
    const { column, change, id } = req.body;
    // query insert to database
    connection.query(
        "UPDATE student SET fname = ? WHERE id = ?; ",
        [change, id]); 
});

// DELETE
app.post("/delete-user", (req, res) => {
    const { id } = req.body;;
    // query insert to database
    connection.query(
        "DELETE FROM student WHERE id = ?",
        [id]); 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});