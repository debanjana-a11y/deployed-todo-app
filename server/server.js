const port = process.env.PORT ?? 8000;
const express = require('express');
const app = express();

// Get all todos
app.get('/todos', (req, res) => {
    try {

    } catch (error) {
        console.error(error);
    }
});

app.listen(port, ()=> {
    console.log(`Server is listening in port ${port}`);
});