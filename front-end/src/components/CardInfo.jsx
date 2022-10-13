import React from 'react';
import { useState,useEffect } from 'react';
import { addShoppingCart } from '../api/localStorage';
import PropTypes from 'prop-types';
import '../styles/cardStyle.css'
import { useNavigate } from 'react-router-dom';


function CardInfo({ product }) {
const navigate = useNavigate();
const [cart, setToCart] = useState([]);

const handleAddToCart = async (id, name, price) => {
  setToCart([...cart, { id, name, price }]);
};

useEffect(() => {
  addShoppingCart(cart);
}, [cart]);

const handleReturn = () => {
  navigate(`/products`);
};
 
  return (
    <div key={ product.id } className="cards">
      <img
        className="product-img"
        src={ product.image }
        alt="product"
       />
      <div className="item-name-container">
        <p className="item-name" >
          {product.name}
        </p>
      </div>
      <div className="item-description-container">
        <p className="item-description" >
          {product.description}
        </p>
      </div>
      <p className="price-text" >
        {`R$ ${product.price?.replace('.', ',')} para assinar por um ano. Até 12x sem juros`}
      </p>
      <div className="add-btn">
        <button
          className="add-btn"
          type="button"
          name="add"
          onClick={ () => handleAddToCart() }
        >
          colocar no carrinho
        </button>
        <button
          className="more-info-btn"
          type="button"
          name="moreInfo"
          onClick={ () => handleReturn(product.id, product.name, product.price) }
        >
          voltar para produtos
        </button>
      </div>
    </div>
  );
}

CardInfo.propTypes = {
  list: PropTypes.node,
}.isRequired;

export default CardInfo;
