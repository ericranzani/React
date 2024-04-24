import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [frutas, setFrutas] = React.useState("");
  const [instrumentos, setInstrumentos] = React.useState([]);
  const [termos, setTermos] = React.useState([]);
  const [error, setErro] = React.useState(null);

  // padrão de cep em regex
  function validateCep(value) {
    if (value.length === 0) {
      setErro("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setErro("Preencha um CEP válido");
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  // função para capitar o valor assim que o campo sair de foco
  function handleBlur({ target }) {
    validateCep(target.value);
  }

  // função para validar conforme vai digitando
  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log("enviou");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cores</h2>
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />

      <h2>Frutas</h2>
      <Radio
        options={["Maçã", "Abacaxi", "Limão"]}
        value={frutas}
        setValue={setFrutas}
      />

      <h2>Instumento</h2>
      <Checkbox
        options={["Guitarra", "Baixo", "Bateria"]}
        value={instrumentos}
        setValue={setInstrumentos}
      />

      <Select
        options={["Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />

      <Input
        id="cep"
        label="CEP"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
        required
      />
      {error && <p>{error}</p>}

      <h2>Termos</h2>
      <Checkbox
        options={["Li e aceitos os termos."]}
        value={termos}
        setValue={setTermos}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
