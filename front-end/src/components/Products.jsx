import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';

function Products({ list }) {
  return (
    <div className="list-products">
      <div className="cards-products">
        {list.map((item) => ( 
          <Cards
            key={ item.id }
            item={ item }
          />
        ))}
      </div>
    </div>
  );
}

Products.propTypes = {
  list: PropTypes.node,
}.isRequired;

export default Products;
