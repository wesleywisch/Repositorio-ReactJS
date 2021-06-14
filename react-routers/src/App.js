import React from 'react';
import './App.css';

import Nav from './components/Navegação/Nav';
import Home from './components/Home/Home';
import Aulas from './components/Aula/Aulas';
import Sobre from './components/Sobre/Sobre';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <Aulas></Aulas>
      <Sobre></Sobre>
    </div>
  );
}

export default App;
