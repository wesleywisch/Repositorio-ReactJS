import React from 'react';
import './App.css';

import Nav from './components/Navegação/Nav';
import Home from './components/Home/Home';
import Aulas from './components/Aula/Aulas';
import Sobre from './components/Sobre/Sobre';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch> 
        {/* Outra maneira de se criar uma rota */}
          {/* <Route path='/' component={Home} /> */}
          

          {/* Uma maneira de se criar rotas */}

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/aulas/a">
            <div className="page">Conteúdo</div>
          </Route>

          <Route path="/aulas">
            <Aulas />
          </Route>

          <Route path="/sobre">
            <Sobre />
          </Route>

          <Router path="*">
            <div className="page">Esaa rota não existe</div>
          </Router>
          {/* lidando com rotas que não existe */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
