const port = process.env.PORT ?? 8000;
const express = require('express');
const app = express();
const pool = require('./db')
const cors = require('cors');

app.use(cors());

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

app.listen(port, ()=> {
    console.log(`Server is listening in port ${port}`);
});