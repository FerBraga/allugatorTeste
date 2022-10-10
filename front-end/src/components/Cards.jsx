import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cardStyle.css'
import { useNavigate } from 'react-router-dom';


function Cards({ item }) {
const navigate = useNavigate();

const handleMoreInfo = ({ target }, id) => {
  navigate(`/info/${id}`);
}
 
  return (
    <div key={ item.id } className="cards">
      <img
        className="product-img"
        src={ item.image }
        alt="product"
       />
      <p className="price-text" >
        {`R$ ${item.price.replace('.', ',')}`}
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
        //   onClick={ (e) => handleAddToCart(e, item.id, item.name, item.price) }
        >
          colocar no carrinho
        </button>
        <button
          className="more-info-btn"
          type="button"
          name="moreInfo"
          onClick={ (e) => handleMoreInfo(e, item.id) }
        >
          mais informações
        </button>
      </div>
    </div>
  );
}

Cards.propTypes = {
  productsList: PropTypes.node,
}.isRequired;

export default Cards;
