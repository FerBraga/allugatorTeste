import { Routes, Route } from 'react-router-dom';
import HomeProducts from './pages/HomeProducts';
import InfoProducts from './pages/InfoProducts';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/products" element={ <HomeProducts /> } />
      <Route exact path="/info/:id" element={ <InfoProducts /> } />
    </Routes>
    </div>

    // 1) Seja exibido uma lista de produtos para assinatura, com fotos e opção de exibir mais
    // informações sobre o produto; - OKKK
    // 2) Seja possível efetuar a busca por nome do produto; OKKK 
    // 3) Seja possível ordenação por valor da assinatura ou ordem alfabética;
    // 4) Opção de criação de contas para os usuários do site, incluindo área logada;
    // 5) Ao visitar o site, deverá ser possível ao usuário selecionar determinado produto e
    // adicioná-lo ao seu "carrinho" para assinatura;
    // 6) Criar um checkout extremamente simples onde será possível simular o fechamento
    // do pedido de assinatura. No fechamento do pedido deverá ser obrigatório o envio de
    // um documento de identificação do assinante;
    // 7) Na área logada do usuário ele poderá visualizar os seus produtos assinados;
  );
}

export default App;
