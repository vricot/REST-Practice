const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const comments = [
    {
        id: uuid(),
        username: 'Val',
        comment: 'lol so funny'
    },
    {
        id: uuid(),
        username: 'Gregg',
        comment: 'I want pizza'
    },
    {
        id: uuid(),
        username: 'xxSpacePrincessxx',
        comment: 'wut is so funny val?'
    },
    {
        id: uuid(),
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
    comments.push({ username, comment, id: uuid() })
    res.redirect("/comments");
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
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


 