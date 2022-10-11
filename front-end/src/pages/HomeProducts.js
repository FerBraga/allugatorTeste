import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import { getProducts, getProductByName } from '../api/getFromApi';

function HomeProducts() {
  const [productsList, setProductsList] = useState([]);
  const [inputSearch, setInputSearch] = useState('');


  useEffect(() => {
    getProducts().then((data) => setProductsList(data));
  }, []);

  const handleSearch = () => {
    console.log(inputSearch);
    getProductByName(inputSearch).then((data) => setProductsList(data));
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
      <Products list={ productsList } />
    </>
  );
}

export default HomeProducts;
