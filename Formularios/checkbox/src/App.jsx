import React from "react";

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  /*  function checkColor(cor) {
    return cores.includes(cor);
  } */

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="Azul"
          //checked={checkColor("azul")} outra forma de fazer checked com a função
          checked={cores.includes("azul")}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="Vermelho"
          //checked={checkColor("vermelho")}
          checked={cores.includes("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App;
