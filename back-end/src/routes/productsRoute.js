const { Router } = require('express');
const { 
  getAllController, 
  getProductByIdController, 
  getProductByNameController,
  getByOrderController,
  getByAlphabeticalOrderController, 
} = require('../controller/productsController');

const productsRoute = Router();

productsRoute.get('/products', getAllController);
productsRoute.get('/info/:id', getProductByIdController);
productsRoute.get('/products/search', getProductByNameController);
productsRoute.get('/order', getByOrderController);
productsRoute.get('/order/alphabetical',getByAlphabeticalOrderController)

module.exports = productsRoute;