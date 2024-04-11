import React from "react";
// exemplo real
// uma notificação ao "adicionar item no carrinho"

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);

  function handleClick() {
    setCarrinho(carrinho + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;
