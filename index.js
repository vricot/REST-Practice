const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const comments = [
    {
        id: 1,
        username: 'Val',
        comment: 'lol so funny'
    },
    {
        id: 2,
        username: 'Gregg',
        comment: 'I want pizza'
    },
    {
        id: 3,
        username: 'xxSpacePrincessxx',
        comment: 'wut is so funny val?'
    },
    {
        id: 4,
        username: 'onlymeows',
        comment: 'meowwwww purrr'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.redirect("/comments");
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id))
    res.render('comments/show', { comment })
})

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

/* CRUD Blueprint: 
GET /comments - list all comments
POST /comments - create a new comment
GET /comments/:id - get one comment (using ID)
PATCH/PUT /comments/:id - update one comment
DELETE /comments/:id - delete one comment */


 