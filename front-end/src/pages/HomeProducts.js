import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import { 
  getProducts,
  getProductByName,
  getByOrderValue,
  getByAlphabeticalOrder
} from '../api/getFromApi';

function HomeProducts() {
  const [productsList, setProductsList] = useState([]);
  const [inputSearch, setInputSearch] = useState('');


  useEffect(() => {
    getProducts().then((data) => setProductsList(data));
  }, []);

  const handleSearch = () => {
    getProductByName(inputSearch).then((data) => setProductsList(data));
  };

  const handleOptions = (value) => {
    getByOrderValue(value).then(({ data }) => setProductsList(data))
  };

  const handleAlphabeticalFilter = () => {
    getByAlphabeticalOrder().then((data) => setProductsList(data))
  }

  return (
    <>
      <NavBar />
      <input
        className="input-bar" 
        placeholder="produto"
        onChange={ (e) => setInputSearch(e.target.value) }
        value={ inputSearch }
      />
      <button
        className="btn-search"
        type="button"
        onClick={ () => handleSearch() } 
      >
      procurar
      </button>
      <select
        className="select-bar"
        name='maior-menor'
        onChange={ (e) => handleOptions(e.target.value) }
      >
        <option
          value='maior valor'
        >
        maior valor
        </option>
        <option
          value='menor valor'
        >
        menor valor
        </option>
      </select>
      <button
        className="btn-order"
        type="button"
        onClick={ () => handleAlphabeticalFilter() } 
      >
      ordem alfabética
      </button>
      <Products list={ productsList } />
   </>
  );
}

export default HomeProducts;
