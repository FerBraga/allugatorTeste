import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import { getProducts } from '../api/getFromApi';

function HomeProducts() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProductsList(data));
  }, []);

  return (
    <>
      <NavBar />
      <Products list={ productsList } />
    </>
  );
}

export default HomeProducts;
