const { 
  getAllService,
  getProductByIdService,
  getProductByNameService,
  getByOrderService,
  getByAlphabeticalOrderService
} = require('../service/serviceProducts');

const getAllController = async (req, res) => {
  const products = await getAllService();
  return res.status(200).json(products);
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const product = await getProductByIdService(id);
  return res.status(200).json(product);
};

const getProductByNameController = async (req, res) => {
  const { name } = req.query;
  const product = await getProductByNameService(name);
  return res.status(200).json(product);
};

const getByOrderController = async (req, res) => {
  const products = await getByOrderService(req.query);
  return res.status(200).json(products);
};

const getByAlphabeticalOrderController = async (req, res) => {
  const products = await getByAlphabeticalOrderService();
  return res.status(200).json(products)
};

module.exports = {
  getAllController,
  getProductByIdController,
  getProductByNameController,
  getByOrderController,
  getByAlphabeticalOrderController
};

