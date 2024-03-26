import React from "react";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Titulo cor="red" texto="Meu título 1">
        Isso é o children
      </Titulo>
      <Titulo cor="blue" texto="Meu título 2" />
      <Titulo texto="Meu título 3" />
    </div>
  );
};

export default App;
