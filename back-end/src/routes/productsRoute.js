const { Router } = require('express');
const { 
  getAllController, 
  getProductByIdController, 
  getProductByNameController,
  getByOrderController
} = require('../controller/productsController');

const productsRoute = Router();

productsRoute.get('/products', getAllController);
productsRoute.get('/info/:id', getProductByIdController);
productsRoute.get('/products/search', getProductByNameController);
productsRoute.get('/order', getByOrderController);

module.exports = productsRoute;