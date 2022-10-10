const { Router } = require('express');
const { getAllController, getProductByIdController } = require('../controller/productsController');

const productsRoute = Router();

productsRoute.get('/products', getAllController);
productsRoute.get('/info/:id', getProductByIdController)

module.exports = productsRoute;