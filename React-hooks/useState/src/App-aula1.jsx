import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";
// aula 1
const App = () => {
  const [modal, setModal] = React.useState(false);
  const [items, setItems] = React.useState("Teste");

  function handleClick() {
    setItems("Outros");
  }

  return (
    <div>
      <p>{items}</p>
      <button onClick={handleClick}>Clicar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
