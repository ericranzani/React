import React from "react";

const App = () => {
  const [textarea, setTextarea] = React.useState("");

  return (
    <form>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
      />
      {textarea}
    </form>
  );
};

export default App;
