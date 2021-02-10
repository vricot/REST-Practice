const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/drinks', (req, res) => {
    res.send("GET /drinks response")
})

app.post('/drinks', (req, res) => {
    const { flavor, qty } = req.body;
    res.send(`OK, here are your ${qty} ${flavor} drinks!`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})