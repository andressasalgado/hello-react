import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Olá, ${name}!`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Qual é o seu nome?
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
