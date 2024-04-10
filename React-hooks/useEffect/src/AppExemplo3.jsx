import React from "react";

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  // Podemos ter diversos useEffect no nosso código.
  // O ideal é separarmos efeitos diferentes em useEffect diferentes.

  React.useEffect(() => {
    document.title = "Total " + contar;
  }, [contar]);

  React.useEffect(() => {
    setContar(0);
  }, [modal]);

  return (
    <div>
      {modal && <p>Meu Modal</p>}
      <button onClick={() => setModal(!modal)}>Modal</button>
      <hr />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
