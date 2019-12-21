import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

export default function TechList() {
  const dispatch = useDispatch();

  const [newTech, setNewTech] = useState('');

  const techs = useSelector(state => state.techs);

  function handleAddTech() {
    dispatch({ type: 'ADD_TECH', payload: { tech: newTech } });

    setNewTech('');
  }

  return (
    <form onSubmit={handleAddTech} data-testid="tech-form">
      <ul data-testid="tech-list">
        {techs.map((tech, index) => (
          <li key={String(index)}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input
        type="text"
        id="tech"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button">Adicionar</button>
    </form>
  );
}
