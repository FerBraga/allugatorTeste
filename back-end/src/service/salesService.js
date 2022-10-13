const { ValidationError } = require('../middleware/errosTypes');
const { 
    insertSale,
    getSale
    } = require('../model/salesModel');
    
    
const insertSalesService = async ({user, product}) => {
  const inserted = await insertSale(user, product);

  if (inserted.affectedRows === 1) return inserted;

  return ValidationError('Not possible');
};

const getSalesService = async (id) => {
  const saleFound = await getSale(id);
  return saleFound;
};

    module.exports = {
      insertSalesService,
      getSalesService,
    };
    
    