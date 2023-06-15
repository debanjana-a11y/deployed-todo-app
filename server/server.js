const port = process.env.PORT ?? 8000;
const express = require('express');
const app = express();
const pool = require('./db')

// Get all todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await pool.query('SELECT * FROM todos');
        res.send(todos.rows);
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, ()=> {
    console.log(`Server is listening in port ${port}`);
});