import React from "react";
import Produto from "./Produto";

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
    <>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Tablet
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Notebook
      </button>
      {dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
