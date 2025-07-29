import React from 'react';

function reducer(state, action, ae) {
  switch (action.type) {
    case 'remover':
      return state.filter((item) => item !== action.content);
    case 'adicionar':
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Maçã', 'Uva']);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'remover', content: 'Maçã' })}>
        Remover Maçã
      </button>
      <button
        onClick={() => dispatch({ type: 'adicionar', content: 'Uva' })}
      >
        Adicionar Uva
      </button>
      <p>{state}</p>
    </div>
  );
};

export default Exemplo;