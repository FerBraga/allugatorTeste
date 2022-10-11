import React from 'react';
// import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
//   const navigate = useNavigate();
  return (
    <nav>
      <button
        className="orders-btn"
        type="button"
        // onClick={ goToCart }
      >
        <span className="orders-btn-text">MEU CARRINHO</span>
      </button>
      <button
        className="exit-btn"
        type="button"
        // onClick={ logOut }
      >
        <span className="exit-btn-text">Sair</span>
      </button>
    </nav>
  );
}

export default Navbar;
