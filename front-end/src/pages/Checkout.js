import React, { useState, useEffect } from 'react';
import { getUserByEmail, addSales } from '../api/getFromApi';
import { getShoppingCart, getUser } from '../api/localStorage';
import CheckoutTable from '../components/CheckoutTable';
import Navbar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import '../styles/checkout.css';

function Checkout() {
  const [productsList, setProductsList] = useState([]);
  const [identification, setIdentification] = useState("");
  const [isDidabled, setDisabled] = useState(true);
  const [finished, setFinished] = useState(false);
  const [credCard, setCredCard] = useState('');
  const navigate = useNavigate();

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
    const regex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
    return regex.test(cpf);
  };

  const handleInputChange = (value) => {
    setIdentification(value);
    validateId(value) && setDisabled(false);
  };

  const submitSale = async () => {
    const product = getShoppingCart();

    const localStorageUser = getUser();

    const { data }= await getUserByEmail(localStorageUser.email)

    await addSales(data[0].id, product[0].id);

    setFinished(true);

    navigate('/current');
  };

  useEffect(() => {
    const { products } = getFromStorage();
    setProductsList(products);
  }, []);

  return (
      <main className="checkout-main">
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
           <input
            className="input-checkout"
            type="text"
            name="cred-card"
            placeholder="insira seu cartão de crédito"
            value={ credCard }
            onChange={ ({ target }) => setCredCard(target.value) }
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
};

export default Checkout;
