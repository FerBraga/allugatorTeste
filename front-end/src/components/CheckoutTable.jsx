import React from 'react';
import PropTypes from 'prop-types';
import { removeFromCart, getShoppingCart } from '../api/localStorage';
// import '../style/checkout.css';

function CheckoutTable({ productsData: { productsList, setProductsList } }) {
  const removeItem = (id) => {
    removeFromCart(id);
    const newList = getShoppingCart();
    setProductsList(newList);
  };

  return (
    <table className="products-checkout-table">
      <thead>
        <tr>
          <th>Quantidade</th>
          <th>Nome</th>
          <th>Valor</th>
          <th>Remover produto</th>
        </tr>
      </thead>
      <tbody>
        {productsList.map(({ id, name, price }, index) => (
          <tr key={ id }>
            <td >{index + 1}</td>
            <td >{name}</td>
            <td >{price?.replace('.', ',')}</td>
            <td>
              <button
                className="remove-btn"
                type="button"
                onClick={ () => removeItem(id) }
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CheckoutTable;

CheckoutTable.propTypes = {
  productsData: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
    })),
  }),
}.isRequired;
