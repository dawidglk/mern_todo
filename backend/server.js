const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes.js');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=> {
    res.send('Api is runing')
});

app.get('/api/notes',(req,res) => {
    res.json(notes);
})

app.get('/api/notes/:id',(req,res) => {
    const { id } = req.params;
    const note = notes.filter(el => el._id === id);

    res.send(note);
})

app.listen(PORT , () => {
    console.log('server started on 5000 port')
})