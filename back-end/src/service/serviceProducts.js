const { getAll, getProductById } = require('../model/modelProducts')

const getAllService = async () => {
  const products = await getAll();
  return products;
};

const getProductByIdService = async (id) => {
  const product = await getProductById(id);
  return product;
}

module.exports = {
  getAllService,
  getProductByIdService
};

