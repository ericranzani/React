import React from "react";

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null)
      fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
      );
  }, [produto]);

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.preco}</p>
    </div>
  );
};

export default Produto;
