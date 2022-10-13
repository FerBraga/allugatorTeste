import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { getUserByEmail, getSalesById, getProductInfo } from '../api/getFromApi';
import CardInfoUser from '../components/CardInfoUser';
import { getUser } from '../api/localStorage';
import '../styles/current.css';

function Current() {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {

    const localStorageUser = getUser();

    getUserByEmail(localStorageUser.email)
    .then(({data}) =>  getSalesById(data[0].id)
    .then(({data}) => getProductInfo(data[0].product_id)
    .then((data) => setProductInfo(data))));
   
  }, []);

  return (
    <div className="current-main">
      <NavBar />
      {productInfo.length && <CardInfoUser product= { productInfo } /> }
    </div>
  );
}

export default Current;
