import React from 'react';

import './global.css'

import Routes from './routes';

function App(){
  return(
    <Routes />
  );
}

export default App;






// JSX (JavaScript XML)
/**
 * import React, {useState} from 'react';
 * 
 * function App() {
  // useState retorna um array definido abaixo:
  // Array [valor, funcaoDeAtualizaçãoDoValor]
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);

    console.log(counter);
  }
  
  return (
    <div>
      <Header title="Semana Onmistack">
        Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
 */
