import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFecth from "./useFecth";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFecth();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/",
      );
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>Produto Preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
