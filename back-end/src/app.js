const cors = require('cors');
require('express-async-errors');
const express = require('express');
const connection = require('./database/connection');
const path = require('path');
const  productsRoute  = require('./routes/productsRoute');
const usersRoute = require('./routes/usersRoutes');



const app = express();

app.use(express.json());
app.use(express.urlencoded({  extended: true }))
app.use(cors());
app.use('/images', express.static(path.join(__dirname, '..', 'images')));


app.get('/products', productsRoute);
app.get('/products/search', productsRoute);
app.get('/users', usersRoute);
app.get('/info/:id', productsRoute);
app.get('/order', productsRoute);


module.exports = app;