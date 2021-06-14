import React from 'react';
import './App.css';

import Nav from './components/Navegação/Nav';
import Home from './components/Home/Home';
import Aulas from './components/Aula/Aulas';
import Sobre from './components/Sobre/Sobre';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        
        <Route path="/">
          <Home/>
        </Route>

        <Route path="/aulas">
          <Aulas/>
        </Route>

        <Route path="/aulas/a">
          <div className="page">Conteúdo</div>
        </Route>

        <Route path="/sobre">
          <Sobre/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
