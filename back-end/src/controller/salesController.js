const { 
    insertSalesService,
    getSalesService
  } = require('../service/salesService');
  
  const insertSalesController = async (req, res) => {
    const inserted = await insertSalesService(req.body);
    return res.status(200).json(inserted);
  };

  const getSalesController = async (req, res) => {
    const { id } = req.params;
    const saleFound = await getSalesService(id);
    return res.status(200).json(saleFound);
  };
  
    
  module.exports = {
    insertSalesController,
    getSalesController,
  };
  