import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cardStyle.css'


function CardInfoUser({ product }) {
 
  return (
    <div key={ product[0].id } className="cards">
      <img
        className="product-img"
        src={ product[0].image }
        alt="product"
       />
      <div className="item-name-container">
        <p className="item-name" >
          {product[0].name}
        </p>
      </div>
      <div className="item-description-container">
        <p className="item-description" >
          {product[0].description}
        </p>
        <p className="p-assinatura">
            produto com assinatura válida
        </p>
      </div>
    </div>
  );
}

CardInfoUser.propTypes = {
  list: PropTypes.node,
}.isRequired;

export default CardInfoUser;
