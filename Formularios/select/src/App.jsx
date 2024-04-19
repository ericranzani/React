import React from "react";

const App = () => {
  const [select, setselect] = React.useState("");

  return (
    <form>
      <select
        id="produtos"
        value={select}
        onChange={({ target }) => setselect(target.value)}
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </form>
  );
};

export default App;
