import React from "react";

function operacaoLenta() {
  let c;
  for (let i = 0; i < 1000000; i++) {
    c = i + i / 10;
  }

  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);

  // só será executado uma vez
  /* const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem("produto");
    // console.log("aconteceu o memo"); teste para ver se funcionou o memo, vendo se ele repeto ou se executa mais vezes
    return localItem;
  }, []); */

  // verificar o tempo da função com performance.now()
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(valor);
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;
