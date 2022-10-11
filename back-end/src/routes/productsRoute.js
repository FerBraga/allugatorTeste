const { Router } = require('express');
const { 
  getAllController, 
  getProductByIdController, 
  getProductByNameController 
} = require('../controller/productsController');

const productsRoute = Router();

productsRoute.get('/products', getAllController);
productsRoute.get('/info/:id', getProductByIdController);
productsRoute.get('/products/search', getProductByNameController);

module.exports = productsRoute;