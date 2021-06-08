import React from 'react';

import Header from './components/Header/Header'
import Counter from './components/Counter/Counter';


function App() {
  return (
    <div>
      <Header name="Wesley" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
      <Counter count={0}></Counter>
    </div>
  );
}

export default App;
