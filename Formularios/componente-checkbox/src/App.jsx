import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [frutas, setFrutas] = React.useState("");
  const [instrumentos, setInstrumentos] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  //enviar o formulário só se a pessoa ativou os termos
  /*   if (termos.length > 0) {
    
  } */

  return (
    <form>
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
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
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
