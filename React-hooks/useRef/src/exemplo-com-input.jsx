import React from "react";

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef(); // criando a referencia

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput(""); // limpar a caixa do imput
    inputElement.current.focus(); // referencia para que o input seja sempre o foco
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
        <input
          type="text"
          ref={inputElement}
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
      </ul>
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default App;
