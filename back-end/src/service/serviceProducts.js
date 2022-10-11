const { getAll, getProductById, getProductByName } = require('../model/modelProducts')

const getAllService = async () => {
  const products = await getAll();
  return products;
};

const getProductByIdService = async (id) => {
  const product = await getProductById(id);
  return product;
};

const getProductByNameService = async (name) => {
  const product = await getProductByName(name);
  return product;
};
 
module.exports = {
  getAllService,
  getProductByIdService,
  getProductByNameService
};

