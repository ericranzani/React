import React from "react";
// aula 2 useState
const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick() {
    // separando as funções deixa mais clean
    // e não ocorre nenhum efeito colateral
    setContar(contar + 1);
    setItems([...items, "Item" + (contar + 1)]);
  }

  /*   function handleClick() {
    // Caso estiver usando o StrictMode, 
    // essa função vai ser renderizada duas vezez
    // na qual vai começar gerar erro
    setContar((contar) => {
      setItems((items) => [...items, "Item" + (contar + 1)]);
      return contar + 1;
    });
  } */

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
