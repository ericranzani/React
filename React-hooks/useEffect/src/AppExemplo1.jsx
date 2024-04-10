import React from "react";

const App = () => {
  const [contar, setContar] = React.useState(0);

  // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    console.log("executou");
  }, []);

  // Agora a dependência está no estado contar,
  // assim sempre que contar for atualizar este efeito será ativado
  React.useEffect(() => {
    document.title = "Total " + contar;
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;
