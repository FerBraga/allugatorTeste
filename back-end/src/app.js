const cors = require('cors');
require('express-async-errors');
const express = require('express');
const connection = require('./connection');
const path = require('path');



const app = express();

app.use(express.json());
app.use(express.urlencoded({  extended: true }))
app.use(cors());
app.use('/images', express.static(path.join(__dirname, '..', '..', 'images')));


app.get('/', (req, res) => res.json('Fala dele!'));

module.exports = app;