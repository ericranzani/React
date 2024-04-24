import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";
import useForm from "./Hooks/useForm";

const App = () => {
  const nome = useForm("");
  const sobrenome = useForm(false); // passado como false para nao entrar na verificação de campo
  const email = useForm("email");
  const cep = useForm("cep");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [frutas, setFrutas] = React.useState("");
  const [instrumentos, setInstrumentos] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
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

      <Input id="nome" type="text" label="Nome" {...nome} />

      <Input id="sobrenome" type="text" label="Sobrenome" {...sobrenome} />

      <Input id="email" type="email" label="Email" {...email} />

      <Input
        id="cep"
        type="text"
        label="CEP"
        placeholder="00000-000"
        {...cep}
      />

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
