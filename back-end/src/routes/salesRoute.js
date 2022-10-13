const { Router } = require('express');
const { 
  insertSalesController,
  getSalesController,
} = require('../controller/salesController');

const salesRoute = Router();

salesRoute.post('/sales', insertSalesController);
salesRoute.get('/sales/:id', getSalesController)


module.exports = salesRoute;