const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require('./db');
const mysql = require("mysql2");

const app = express();
const saltRounds = 10;
const port = 4000;

app.use(cors());
app.use(express.json({limit: '2mb'}));
app.use(express.urlencoded({ limit: '2mb', extended: false }));

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Admin123",
    database : "jango_users"
});

app.get('/', (req, res) => {
    res.send("HELLO WORD!");
});

app.post('/register', (req, res) => {
    const {username, email, password} = req.body;

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            connection.query('SELECT COUNT(*) AS cnt FROM user_accounts WHERE email = ?', [email], (err, data) => {

                if (err) throw err;

                if (data[0].cnt > 0) {
                    return res.json({message: "Email already exists."})
                } else {
                    connection.query(
                        'INSERT INTO user_accounts (username, email, password) VALUES (?,?,?)',
                        [username, email, hash],
                        (err, results) => {
                          if (err) {
                            return res.status(500).json({ error: err.message });
                          }
                          res.json({ message: 'Data inserted successfully' });
                        }
                      );
                }
            })
            // Store hash in your password DB.
            
        });
    });    
})

app.post('/login-user', (req, res) => {
    
    const {email, password} = req.body;

   connection.query("SELECT * FROM user_accounts WHERE email = ?", [email], async (err, user) => {
        
    if (err) throw err;

    try {
        if (user) {
            const match = await bcrypt.compare(password, user[0].password);
            if (match) {
                return res.json({ username : user[0].username, email: user[0].email, message: 'Success' });
            } else {
                return res.json({ message: 'Invalid email or password.' });
            }
        }
        return res.json({ message: 'Invalid email or password.' });
    } catch (err) {
        res.json({message: err})
    }
         
    });

})

app.post('/change_password', (req, res) => {
    const { username, password } = req.body;

    const query = `UPDATE user_accounts SET password = ? WHERE email = ?`;

    const hashedPassword = bcrypt.hashSync(password, 10);
    db.query(query, [hashedPassword, username], (err, result) => {
        if(err) {throw err;}
        res.send({message: "Account password updated!"});
    })

});

app.post('/submit_pass', (req, res) => {
    
    const { email, password } = req.body;

    bcrypt.hash(password, saltRounds, function(err, result) {
        if (err) throw err;

        connection.query("UPDATE user_accounts SET password = ? WHERE email = ?", [result, email], (err, user) => {
            console.log("Change password succesfully.")
            return res.json({message : 'New Password Change.'})   
        })
    })

});

app.get('/getUser', (req, res) => {
    res.send.apply(req.user);
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

app.listen(port, () => {
    console.log("Server Started on port 4000")
});