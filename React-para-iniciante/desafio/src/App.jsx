import React from "react";
import Header from "./Header";
import Titulo from "./Titulo";
import Produtos from "./Produtos";

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Titulo;
  }

  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};

export default App;
