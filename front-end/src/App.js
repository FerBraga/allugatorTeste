import { Router } from 'express';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/products" />
    </Routes>
    </div>
  );
}

export default App;
