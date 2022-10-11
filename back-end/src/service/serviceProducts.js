const { 
getAll,
getProductById,
getProductByName,
getByOrderValue,
getByAlphabetical
} = require('../model/modelProducts')


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

const getByOrderService = async (value) => {
  const products = await getByOrderValue(value);
  return products;
};

const getByAlphabeticalOrderService = async () => {
  const products = await getByAlphabetical();
  return products;
};
 
module.exports = {
  getAllService,
  getProductByIdService,
  getProductByNameService,
  getByOrderService,
  getByAlphabeticalOrderService
};

