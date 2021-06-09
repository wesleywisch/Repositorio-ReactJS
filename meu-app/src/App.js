import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header'
import Counter from './components/Counter/Counter';


function App() {

  const [show, setShow] = useState(true);
  let time = 0;

  useEffect(()=>{

    let timer = setInterval( () => {
      time++;
      console.log(time);
  
      if (time > 5) {
        clearInterval(timer);
        setShow(false)
      }
    }, 1000);

  })

  if (show) {
    return (
      <div>
        <Header name="Wesley" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
        <Counter count={3}></Counter>
      </div>
    );

  } else {

    return (
      <div>
        <Header name="Wesley" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
        Sem contador!
      </div>
    );
  }
}

export default App;
