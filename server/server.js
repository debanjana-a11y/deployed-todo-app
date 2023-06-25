const port = process.env.PORT ?? 8000;
const express = require('express');
const uuid = require('uuid');
const app = express();
const pool = require('./db')
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Get all todos
app.get('/todos/:userEmail', async (req, res) => {
    try {
        const { userEmail } = req.params;
        const todos = await pool.query('SELECT * FROM todos WHERE user_email=$1', [userEmail]);
        res.send(todos.rows);
    } catch (error) {
        console.error(error);
    }
});

app.post('/todos/', async (req, res) => {
    const {user_email, title, progress, date} = req.body;
    console.log(`Post API is received for ${user_email}, ${title}, ${progress}, ${date}`);
    const id = uuid.v4();
    try {
        const newTodo = await pool.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`,[id, user_email, title, progress, date]);
        res.json(newTodo);
    } catch (error) {
        console.log(error);
    }
});

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const {user_email, title, progress, date} = req.body;
    console.log(`PUT API is received for ${id} ${user_email}, ${title}, ${progress}, ${date}`);
    try {
        const editTodo = await pool.query(`UPDATE todos SET user_email=$2, title=$3, progress=$4, date=$5 WHERE id=$1;`,[id, user_email, title, progress, date]);
        res.json(editTodo);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, ()=> {
    console.log(`Server is listening in port ${port}`);
});