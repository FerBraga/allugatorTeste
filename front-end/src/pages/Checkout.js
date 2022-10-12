import React, { useState, useEffect } from 'react';
import { getShoppingCart } from '../api/localStorage';
import CheckoutTable from '../components/CheckoutTable';
import Navbar from '../components/NavBar';
// import '../style/checkout.css';

function Checkout() {
  const [productsList, setProductsList] = useState([]);
  const [identification, setIdentification] = useState("");
  const [isDidabled, setDisabled] = useState(true);
  const [finished, setFinished] = useState(false);

  const getFromStorage = () => {
    const cartItemsList = getShoppingCart();
    const total = cartItemsList.reduce((sum, { price }) => {
      sum += price;
      return sum;
    }, 0);

    return {
      products: cartItemsList,
      checkoutPrice: total,
    };
  };
  const validateId = (cpf) => {
    const regex = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    return regex.test(cpf);
  };

  const handleInputChange = (value) => {
    setIdentification(value);
    validateId(value) && setDisabled(false);
  };

  const submitSale = () => {
    const product = getShoppingCart();
    console.log(product);
    setFinished(true);
  };

  useEffect(() => {
    const { products } = getFromStorage();
    setProductsList(products);
  }, []);

  return (
      <main>
        <Navbar />
        <section className="table-section">
          <h3 className="table-tittle">Finalizar assinatura:</h3>
          <CheckoutTable productsData={ { productsList, setProductsList } } />
        </section>
          <input
            className="input-checkout"
            type="text"
            name="id-personal"
            placeholder="insira seu CPF"
            value={ identification }
            onChange={ ({ target }) => handleInputChange(target.value) }
          />
        <button
          className="send-order-btn"
          type="button"
          disabled={ isDidabled }
          onClick={ () => submitSale() }
        >
          FINALIZAR ASSINATURA
        </button>
        { finished &&   
        <span>
          ASSINATURA FINALIZADA
        </span> }
      </main>
  );
}

export default Checkout;
