import { useState } from 'react';
import './App.css';

function App(props) {

  const [cep, setCep] = useState({});

  function handleTextChange(e) {
    e.preventDefault();
    fetch(`https://viacep.com.br/ws/${e.target.value}/json/`).then(res => res.json())
      .then(res => setCep(res))
  }

  return (
    <div>
      <strong>Olá, {props.name}</strong>
      <div>
        Digite o cep: <input type="text" onChange={handleTextChange}></input>
        {Object.entries(cep).map((values, key) => (
          <h2 key={key}>
            <strong>{values[0]}:</strong>{values[1]}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default App;