import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../styles/cardStyle.css'
import { addShoppingCart } from '../api/localStorage';


function Cards({ item }) {
const navigate = useNavigate();
const [cart, setToCart] = useState([]);
const [isDisabled, setDisabled] = useState(false);

const handleAddToCart = async (id, name, price) => {
  setDisabled(true);
  setToCart([...cart, { id, name, price }]);
};

const handleMoreInfo = (id) => {
  navigate(`/info/${id}`);
};

useEffect(() => {
  addShoppingCart(cart);
}, [cart]);

  return (
    <div key={ item.id } className="cards">
      <img
        className="product-img"
        src={ item.image }
        alt="product"
       />
      <p className="price-text" >
        {`por R$ ${item.price.replace('.', ',')} assine por um ano.`}
      </p>
      <div className="item-name-container">
        <p className="item-name" >
          {item.name}
        </p>
      </div>

      <div className="add-btn">
        <button
          className="add-btn"
          type="button"
          name="add"
          onClick={ () => handleAddToCart(item.id, item.name, item.price) }
        >
          colocar no carrinho
        </button>
        { isDisabled &&  
        <span className="cart-count">
          { `produto adicionado ao carrinho`}
        </span> }
        <button
          className="more-info-btn"
          type="button"
          name="moreInfo"
          onClick={ () => handleMoreInfo(item.id) }
        >
          mais informações
        </button>
      </div>
    </div>
  );
};

Cards.propTypes = {
  productsList: PropTypes.node,
}.isRequired;

export default Cards;
