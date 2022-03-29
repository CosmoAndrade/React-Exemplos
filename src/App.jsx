

import './App.css';

import { Dados } from './components/Dados'
import CompProps from './components/CompProps';
import CompInput from './components/CompInput';
import { useState } from 'react';

function App() {

  const [tela, setTela] = useState(true)


  const data = Dados

  const dadosMap = data.map((item, index) => {
    return (
      <div key={index}>
        <h2>{item.Id}</h2>
        <h2>{item.Titulo}</h2>
        <h2>{item.Mensagem}</h2>

        <hr />


      </div>
    )
  })


  return (
    <div className="App">


      <button onClick={() => { setTela(!tela) }} >
        {tela ? "Props" : "Input"}
      </button>

      <button onClick={() => { setTela(!tela) }}>
        {tela ? "Input" : "Props"}
      </button>

      {tela ? <CompInput /> : <CompProps nome="Cosmo" />}

      {dadosMap}


    </div>
  );
}

export default App;
