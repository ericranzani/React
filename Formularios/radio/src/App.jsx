import React from "react";

const App = () => {
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      {cor}
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === "azul"} // aqui é a reatividade na qual vai ser o estado
          value="azul"
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === "vermelho"}
          value="vermelho"
        />
        Vermelho
      </label>
      <h2>Produtos</h2>
      {produto}
      <label>
        <input
          type="radio"
          onChange={handleChange}
          checked={produto === "smartphone"}
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          checked={produto === "notebook"}
          value="notebook"
        />
        Notebook
      </label>
    </form>
  );
};

export default App;
