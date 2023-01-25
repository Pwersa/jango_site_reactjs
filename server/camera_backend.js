const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3002;
const hostname = '127.0.0.1';
var bodyParser = require('body-parser');
var dateTime = require('node-datetime');
var dt = dateTime.create();
const cors = require("cors")
app.use(cors())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
const path = require('path');
const { connect } = require("http2");


// MYSQL CONNECTION
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin123",
    database: "jango_users",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to Database!");
});

// DEFAULT PAGE WITH CREATES
app.get('/', function (req, res) {
    // CREATE DATABASE IF NOT EXISTING YET
    connection.query("CREATE DATABASE IF NOT EXISTS jade_project",
        function (err, results) {
            if (err) throw err;
            console.log(req.query);
            console.log(results);
        });

    // CREATE TABLES IF NOT EXISTING YET
    var camera_table = ("CREATE TABLE IF NOT EXISTS camera_table (id INT AUTO_INCREMENT PRIMARY KEY, image LONGBLOB, datetime VARCHAR(100) )")

    connection.query(user_table, function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("User Table created!");
    });

    connection.query(camera_table, function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log("Camera Table created!");
    });

    res.send('WELCOME!')


});

app.post("/motion_detector_datetime", (req, res) => {
    const { datetime } = req.body;
    connection.query(
        "INSERT INTO camera_table (datetime) VALUES (?)",
        [datetime],
        (err, results) => {
            try {
                if (results.affectedRows > 0) {
                    res.json({ message: "Data has been added!" });
                } else {
                    res.json({ message: "An error encountered." });
                }
            } catch (err) {
                res.json({ message: err });
            }
        }
    );
});

// INSERT WITH PICTURE AND DATETIME
app.post("/motion_detector_picture", (req, res) => {
    const {
        datetime,
        image }
        = req.body;

    connection.query(
        "INSERT INTO camera_table (datetime, image) VALUES (?,?)", [datetime, image],
        function (err, results) {
            console.log(results);
            res.json(results);
        })

});
app.get("/displaycam", (req, res) => {
    connection.query(
        "SELECT * FROM `camera_table`",
        function (err, results) {
            if (err) throw err;
            try {
                if (results.length > 0) {
                    let base64array = [];
                    for (let i = 0; i < results.length; i++) {
                        base64array.push({
                            data: new Buffer.from(results[i].image).toString("utf8"),
                        });
                    }
                    res.json(base64array);
                    console.log(results);
                }
            }
            catch (err) {
                res.json({ message: err });
            }

        })
});

// SERVER LISTENER
app.listen(port, hostname, () => {
    console.log('Server Active on http://' + hostname + ":" + port + "/");
});