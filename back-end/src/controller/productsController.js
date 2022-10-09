const { getAllService } = require('../service/serviceProducts');

const getAllController = async (req, res) => {
    const products = await getAllService();
    return res.status(200).json(products);
};

module.exports = {
  getAllController,
};

