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

    // 1) Seja exibido uma lista de produtos para assinatura, com fotos e opção de exibir mais
    // informações sobre o produto; - OKKK
    // 2) Seja possível efetuar a busca por nome do produto; OKKK 
    // 3) Seja possível ordenação por valor da assinatura ou ordem alfabética; okk
    // 4) Opção de criação de contas para os usuários do site, incluindo área logada; okkk
    // 5) Ao visitar o site, deverá ser possível ao usuário selecionar determinado produto e
    // adicioná-lo ao seu "carrinho" para assinatura; OKK 
    // 6) Criar um checkout extremamente simples onde será possível simular o fechamento 
    // do pedido de assinatura. No fechamento do pedido deverá ser obrigatório o envio de
    // um documento de identificação do assinante; OKK 
    // 7) Na área logada do usuário ele poderá visualizar os seus produtos assinados;
  );
};

export default App;
