import React from 'react';
import Header from './components/Header/header'

function App() {
  return (
    <Header name="Wesley" links={["Sobre", "Comprar", "Contato"]}></Header>
  );
}

export default App;
