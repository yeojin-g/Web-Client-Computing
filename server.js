const express = require('express');
const app = express();
const path = require('path');
const mysql = require("mysql2");

app.use(express.static(path.join(__dirname, '/build')));
app.use(express.json()); 

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "jini0599",
    database: "todo"
});

// 사용자 정보 table에 저장하기 
app.post('/api/insertUser', (req, res) => {
    const { ID, Pw, Name, Email } = req.body;
    const sqlQuery = 'INSERT INTO user (ID, Pw, Name, Email) VALUES (?, ?, ?, ?)';
    db.query(sqlQuery, [ID, Pw, Name, Email], (err, result) => {
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
    db.query(sqlQuery, userId, (err, result) => {
        res.send(result);
    });
});

// 사용자 정보 불러오기
app.get('/info', (req, res) => {
  const userId = req.query.ID;
  const sqlQuery = 'SELECT * FROM USER WHERE ID = ?';
  db.query(sqlQuery, userId, (err, result) => {
      res.send(result);
  });
});

// 비밀번호 변경
app.post('/api/updatePassword', (req, res) => {
    const userId = req.body.ID;
    const newPassword = req.body.NewPassword;
    const sqlQuery = 'UPDATE USER SET Pw = ? WHERE ID = ?';
    db.query(sqlQuery, [newPassword, userId], (err, result) => {
        if (err) {
        console.error('Error');
        res.status(500).json({ error: 'error' });
        return;
        }
        console.log('Success');
        res.status(201).json({ message: 'Success' });
  });
});

//basicTodo항목 저장
app.post('/api/insertTodo', (req, res) => {
    const { idx, ID, isCheckD, todoText } = req.body;
    const sqlQuery = 'INSERT INTO basicTodo (idx, ID, ischeck, todoText) VALUES (?, ?, ?, ?)';
    db.query(sqlQuery, [idx, ID, isCheckD, todoText], (err, result) => {
        if (err) {
            console.error('basic todo 저장 Error');
            res.status(500).json({ error: 'error' });
            return;
        }
        console.log('basic todo 저장 Success');
        res.status(201).json({ message: 'Success' });
    });
});

// basicTodo ischeck 변경
app.post('/api/updateisCheck', (req, res) => {
    const idx = req.body.idx;
    const newCheck = req.body.newCheck;
    const sqlQuery = 'UPDATE basicTodo SET isCheck = ? WHERE idx = ?';
    db.query(sqlQuery, [newCheck, idx], (err, result) => {
        if (err) {
        console.error('ischeck 수정 Error');
        res.status(500).json({ error: 'error' });
        return;
        }
        console.log('ischeck 수정 Success');
        res.status(201).json({ message: 'Success' });
  });
});

// basicTodo todoText 변경
app.post('/api/updatetodoText', (req, res) => {
    const idx = req.body.idx;
    const newText = req.body.newText;
    const sqlQuery = 'UPDATE basicTodo SET todoText = ? WHERE idx = ?';
    db.query(sqlQuery, [newText, idx], (err, result) => {
        if (err) {
        console.error('todoText 변경 Error');
        res.status(500).json({ error: 'error' });
        return;
        }
        console.log('todoText 변경 Success');
        res.status(201).json({ message: 'Success' });
  });
});

// 해당 idx의 basicTodo가 존재하는지 검사하기
app.get('/api/whereTodo/:idx/:ID', (req, res) => {
    const userIdx = req.params.idx;
    const userID = req.params.ID;

    const sqlQuery = 'SELECT * FROM basicTodo WHERE Idx = ? AND ID = ?';
    db.query(sqlQuery, [userIdx, userID], (err, result) => {
        res.send(result);
    });
});


// basicTodo 특정 ID 것 불러오기
app.get('/api/getBasicTodo/:ID', (req, res) => {
    const userId = req.params.ID;
    const sqlQuery = 'SELECT * FROM basicTodo WHERE ID = ?';
    db.query(sqlQuery, userId, (err, result) => {
        res.send(result);
    });
})

// basicTodo 모든 항목 삭제
app.delete('/api/basicTodoDel/:ID', (req, res) => {
    const userId = req.params.ID;
    const sqlQuery = 'DELETE FROM basicTodo WHERE ID = ?';
    db.query(sqlQuery, userId, (err, result) => {
        if (err) {
            console.error('Error deleting items for user:', err);
            res.status(500).send('Error deleting items for user');
        } else {
            console.log('Items deleted successfully for user:', userId);
            res.status(200).send('Items deleted successfully for user');
        }
    });
});

// HabbitTracker 새로 만들기
app.post('/api/insertHabbit', (req, res) => {
    const { idx, ID, habbitName, checkButtonL } = req.body;
    const sqlQuery = 'INSERT INTO habbittracker (idx, ID, habbitName, checkButtonL) VALUES (?, ?, ?, ?)';
    db.query(sqlQuery, [idx, ID, habbitName, checkButtonL], (err, result) => {
        if (err) {
            console.error('habbittracker 저장 Error');
            res.status(500).json({ error: 'error' });
            return;
        }
        console.log('habbittracker 저장 Success');
        res.status(201).json({ message: 'Success' });
    });
});

// HabbitTracker habbitName 변경
app.post('/api/updateHabbitName', (req, res) => {
    const idx = req.body.idx;
    const ID = req.body.ID;
    const newName = req.body.newName;
    const sqlQuery = 'UPDATE HabbitTracker SET habbitName = ? WHERE idx = ? AND ID = ?';
    db.query(sqlQuery, [newName, idx, ID], (err, result) => {
        if (err) {
        console.error('habbitName 변경 Error');
        res.status(500).json({ error: 'error' });
        return;
        }
        console.log('habbitName 변경 Success');
        res.status(201).json({ message: 'Success' });
  });
});

// HabbitTracker checkButtonL 변경
app.post('/api/updateHabbitCheckButtonL', (req, res) => {
    const idx = req.body.idx;
    const ID = req.body.ID;
    const newCheckButtonL = req.body.checkButtonL;
    const sqlQuery = 'UPDATE HabbitTracker SET checkButtonL = ? WHERE idx = ? AND ID = ?';
    db.query(sqlQuery, [newCheckButtonL, idx, ID], (err, result) => {
        if (err) {
            console.error('checkButtonL 변경 Error');
            res.status(500).json({ error: 'error' });
            return;
        }
        console.log('checkButtonL 변경 Success');
        res.status(201).json({ message: 'Success' });
    });
});


// habbit tracker 특정 ID 것 불러오기
app.get('/api/getHabbitTracker/:ID', (req, res) => {
    const userId = req.params.ID;
    const sqlQuery = 'SELECT * FROM habbittracker WHERE ID = ?';
    db.query(sqlQuery, userId, (err, result) => {
        res.send(result);
    });
})



// 리액트 라우팅
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(8000, function () {
    console.log('Server is running on port 8000');
});
