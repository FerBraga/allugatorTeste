const { Router } = require('express');
const { getAllController } = require('../controller/productsController');

const productsRoute = Router();

productsRoute.get('/products', getAllController);

module.exports = productsRoute;