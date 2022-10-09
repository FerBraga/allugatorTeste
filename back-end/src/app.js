const cors = require('cors');
const express = require('express');
const connection = require('./connection');



const app = express();

app.use(express.json());
app.use(express.urlencoded({  extended: true }))
app.use(cors());

app.get('/', (req, res) => res.json('Fala dele!'));

module.exports = app;