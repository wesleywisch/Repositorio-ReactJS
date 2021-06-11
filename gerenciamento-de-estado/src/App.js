import React from 'react';
import './App.css';

import Contador from './components/Contador/Contador';
import Header from './components/Header/Header';
import { ContadorProvider } from './components/ContadorContext'

function App() {
  return (
    <div className="app">
      <ContadorProvider>
        <Header></Header>
        <Contador></Contador>
      </ContadorProvider>
    </div>
  );
}



export default App;
