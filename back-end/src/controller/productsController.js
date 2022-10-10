const { getAllService, getProductByIdService} = require('../service/serviceProducts');

const getAllController = async (req, res) => {
  const products = await getAllService();
  return res.status(200).json(products);
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const product = await getProductByIdService(id);
  return res.status(200).json(product);
} 

module.exports = {
  getAllController,
  getProductByIdController
};

