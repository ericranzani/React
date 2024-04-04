import React from "react";
//aula 1
const ButtonModal = ({ setModal }) => {
  function handleClick() {
    // usando um callback
    setModal((ativo) => !ativo);
  }

  return <button onClick={handleClick}>Abrir</button>;
};

export default ButtonModal;
