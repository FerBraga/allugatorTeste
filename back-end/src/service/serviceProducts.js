const { 
getAll,
getProductById,
getProductByName,
getByOrderValue
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
    const product = await getByOrderValue(value);
    return product;
};
 
module.exports = {
  getAllService,
  getProductByIdService,
  getProductByNameService,
  getByOrderService
};

