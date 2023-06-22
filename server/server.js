const port = process.env.PORT ?? 8000;
const express = require('express');
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

app.post('/todos/', (req, res) => {
    const {user_email, title, progress, date} = req.body;
    console.log(`Post API is received for ${user_email}, ${title}, ${progress}, ${date}`);
    // try {
    //     pool.query('INSERT INTO todos VALUES($1, $2, $3, $4, $5)',[1, user_email, title, progress, date]);
    // } catch (error) {
    //     console.log(error);
    // }
});

app.put('/todos/', (req, res) => {
    const {user_email, title, progress, date} = req.body;
    console.log(`PUT API is received for ${user_email}, ${title}, ${progress}, ${date}`);
});

app.listen(port, ()=> {
    console.log(`Server is listening in port ${port}`);
});