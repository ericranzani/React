import React from "react";
import Produto from "./Produto";
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [dados, setDados] = React.useState(null);

  async function handleClick(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
  }

  return (
    <div>
      <h1>Preferências:</h1>
      <button style={{ margin: "0.5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "0.5rem" }} onClick={handleClick}>
        smartphone
      </button>
      <Produto dados={dados} />
    </div>
  );
};

export default App;
