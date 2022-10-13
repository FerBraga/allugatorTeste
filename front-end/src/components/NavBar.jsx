import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="div-btns-nav">
        <button
          className="orders-btn"
          type="button"
          onClick={ () => navigate('/checkout') }
        >
          <span className="orders-btn-text">Carrinho</span>
        </button>
        <button
          className="k"
          type="button"
          onClick={ () => navigate('/current') }
        >
          <span className="orders-btn-text">Assinaturas</span>
        </button>
        <button
          className="exit-btn"
          type="button"
          onClick={ () => navigate('/') }
        >
          <span className="exit-btn-text">Sair</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
