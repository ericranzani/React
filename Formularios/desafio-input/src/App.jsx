import React from "react";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
    name: "nome",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
    name: "senha",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    name: "email",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
    name: "cep",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
    name: "rua",
  },
  {
    id: "numero",
    label: "Numero",
    type: "text",
    name: "numero",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
    name: "bairro",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
    name: "cidade",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
    name: "estado",
  },
];

const App = () => {
  // Faça um fetch (POST) para a API abaixo
  // Para a criação ser aceita é necessário enviar dodos de:
  // nome, email, senha, cep, rua, numero, bairro, cidade e estado
  /* forma padrão
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  }); */

  // acc= acumulador, field valor do campo => {o retorno}
  // forma mais otimizada
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {}),
  ); // valor inicial objeto vazio

  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Essa é a função utilizado para realizar o POST
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => {
      // Mostre uma mensagem na tela, caso a resposta da API seja positiva
      setResponse(response);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type, nome }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type={type}
            name={nome}
            value={form[id]}
            onChange={handleChange}
          />
        </div>
      ))}
      {response && response.ok && <p>Formulário enviado!</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
