import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { getProductInfo } from '../api/getFromApi';
import CardInfo from '../components/CardInfo';
import '../styles/infoProduct.css'

function InfoProducts() {
  const [productInfo, setProductInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductInfo(id).then((data) => setProductInfo(data[0]));
  }, [id]);

  return (
    <div className="info-product">
      <NavBar />
      <CardInfo product= { productInfo } />
    </div>
  );
};

export default InfoProducts;
