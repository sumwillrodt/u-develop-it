const express = require('express');
const mysql = require('mysql2');

//PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '',
      database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//test to confirm connection to Express.ks server
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

//function to start Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});