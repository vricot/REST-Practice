const express = require('express');
const app = express();

app.get('/drinks', (req, res) => {
    res.send("GET /drinks response")
})

app.post('/drinks', (req, res) => {
    res.send("POST /drinks response")
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})