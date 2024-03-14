import React from "react";

const App = () => {
  const numero = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome) {
    return "Eric " + sobrenome;
  }

  const carro = {
    marca: "Ford",
    rodas: 4,
  };

  const estiloH1 = {
    color: "blue",
    fontSize: "20px",
    fontFamily: "Helvetica",
  };

  const titulo = <h1 style={estiloH1}>Esse é um titulo</h1>;

  return (
    <>
      {titulo}
      {mostrarNome("Ranzani")}
      <p>{new Date().getFullYear()}</p>
      <p style={{ color: "green" }}>
        {carro.marca} que tem {carro.rodas} rodas
      </p>
      <p className={ativo ? "ativo" : "inativo"}>{numero * 100}</p>
    </>
  );
};

export default App;
