import React from "react";
import Produto from "./Produto";
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [produto, setProduto] = React.useState(null);

  // efeito de trazer o produto do localStorage
  // assim, ao atualizar, em preferências já vai estar o produto que foi desejado
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  // salvando no localStorage o estado conforme o efeito selecionado pelo botão
  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  // setando o nome do produto no estado assim que interagir com o botão
  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <h1>Preferências: {produto}</h1>
      <button style={{ marginRight: "0.5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ marginRight: "0.5rem" }} onClick={handleClick}>
        smartphone
      </button>
    </>
  );
};

export default App;
