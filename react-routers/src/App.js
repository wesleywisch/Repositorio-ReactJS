import React from 'react';
import './App.css';


// Components
import Nav from './components/Navegação/Nav';
import Home from './components/Home/Home';
import Aulas from './components/Aula/Aulas';
import Sobre from './components/Sobre/Sobre';
import Aula from './components/Aula/Aula';
import Assistir from './components/Query/Assistir';

// Store
import loginReducer from './Store/reducers/loginReducer';
import PrivateRoute from './components/RotasPrivadas/PrivateRoute';
import Negado from './components/RotasPrivadas/Negado';


// imports de dependências
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const store = createStore(loginReducer)


function App() {
  return (

    <Provider store={store}>

      <Router>
        <div className="App">
          <Nav />

          <Switch>
            {/* Outra maneira de se criar uma rota */}
            {/* <Route path='/' component={Home} /> */}


            {/* Uma maneira de se criar rotas */}

            <Route path="/aulas/:id">
              <Aula />
            </Route>

            <Route exact path="/assistir">
              <Assistir />
            </Route>

            <PrivateRoute path="/aulas/">
              <Aulas />
            </PrivateRoute>

            <Route path="/sobre">
              <Sobre />
            </Route>

            <Route path="/negado">
              <Negado></Negado>
            </Route>

            <Route path="/">
              <Home />
            </Route>

            <Router path="*">
              <div className="page">Esaa rota não existe</div>
            </Router>
            {/* lidando com rotas que não existe */}

          </Switch>
        </div>
      </Router>

    </Provider>
  );
}

export default App;
