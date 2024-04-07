const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.get('/api/emp', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'person',
    multipleStatements: true
  });

  connection.connect();

  connection.query('SELECT * FROM login', (error, rows, fields) => {
    if (error) throw error;

    res.send(rows);
  });

  connection.end();
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});