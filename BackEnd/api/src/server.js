import app from './app';
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const server = require('http').Server(app);

mongoose.connect('mongodb+srv://filmes:filmes@cluster0.dh7gv.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true,
});

app.use(cors());

//app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
server.listen(3333);
