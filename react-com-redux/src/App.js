import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './components/Header';
import Contador from './components/Contador';

import contadorReducer from './reducers/contadorReducer';

function App() {

  const store = createStore(contadorReducer);

  return (
    <div className="App">
      <Provider store={store} >
        <Header></Header>
        <Contador></Contador>
      </Provider>
    </div>
  );
}

export default App;
