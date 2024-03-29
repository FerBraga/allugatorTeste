const cors = require('cors');
require('express-async-errors');
const express = require('express');
const path = require('path');
const  productsRoute  = require('./routes/productsRoute');
const errorHandler = require('./middleware/errorHandler');
const usersRoute = require('./routes/usersRoutes');
const salesRoute = require('./routes/salesRoute');



const app = express();

app.use(express.json());
app.use(express.urlencoded({  extended: true }));
app.use(cors());
app.use('/images', express.static(path.join(__dirname, '..', 'images')));

app.post('/login', usersRoute);
app.post('/register', usersRoute);
app.post('/sales', salesRoute);
app.get('/sales/:id', salesRoute);
app.get('/users', usersRoute);
app.get('/products', productsRoute);
app.get('/products/search', productsRoute);
app.get('/info/:id', productsRoute);
app.get('/order', productsRoute);
app.get('/order/alphabetical', productsRoute);

app.use(errorHandler);


module.exports = app;