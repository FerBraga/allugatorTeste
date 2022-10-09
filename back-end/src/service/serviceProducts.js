const { getAll } = require('../model/modelProducts')

const getAllService = async () => {
    const products = await getAll();
    return products;
};

module.exports = {
  getAllService,
};

