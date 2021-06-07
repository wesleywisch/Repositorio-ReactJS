import React from 'react';
import Header from './components/Header/Header'

function App() {
  return (
    <Header name="Wesley" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
  );
}

export default App;
