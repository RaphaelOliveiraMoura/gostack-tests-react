import React, { useState } from 'react';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);

  function handleAddTech() {
    setTechs([...techs, 'Node.js']);
  }

  return (
    <div>
      <ul data-testid="techlist">
        {techs.map((tech, index) => (
          <li key={String(index)}>{tech}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddTech}>
        Adicionar
      </button>
    </div>
  );
}
