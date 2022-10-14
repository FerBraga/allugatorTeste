import { Routes, Route } from 'react-router-dom';
import HomeProducts from './pages/HomeProducts';
import InfoProducts from './pages/InfoProducts';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import './App.css';
import Current from './pages/Current';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={ <LoginPage /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/products" element={ <HomeProducts /> } />
      <Route exact path="/info/:id" element={ <InfoProducts /> } />
      <Route exact path="/checkout" element={ <Checkout /> } />
      <Route exact path="/current" element={ <Current /> } />
    </Routes>
    </div>
  );
};

export default App;
