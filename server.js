const express = require('express');
const app = express();
const path = require('path');
const mysql   = require("mysql2");

app.use(express.static(path.join(__dirname, '/build')));

const db = mysql.createPool({
    host: "127.0.0.1", 
    user: "root",      
    password: "jini0599", 
    database: "todo"
});

// 모든 user table 받아오기
app.get("/api/selectUser", (req, res) => {
    const sqlQuery = "SELECT * FROM User";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  });

// 사용자 정보 table에 저장하기 
app.post('/api/insertUser', (req, res) => {
const { name, id, pw, email } = req.body;
const sqlQuery = 'INSERT INTO user (ID, Pw, Name, Email) VALUES (?, ?, ?, ?)';
db.query(sqlQuery, [name, id, pw, email], (err, result) => {
    if (err) {
    console.error('Error');
    res.status(500).json({ error: 'error' });
    return;
    }
    console.log('Success');
    res.status(201).json({ message: 'Success' });
});
});


// 사용자 아이디가 존재하는지 검사하기
app.get('/api/where/:id', (req, res) => {
    const userId = req.params.id;
    const sqlQuery = 'SELECT * FROM USER WHERE ID = ?';
    console.log(sqlQuery)
    db.query(sqlQuery, userId, (err, result) => {
      res.send(result);
    });
});


// 리액트 라우팅
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(8000, function(){
    console.log('Server is running on port 8000');
})