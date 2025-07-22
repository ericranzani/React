import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Produto = () => {
  const params = useParams();
  const location = useLocation();

  const search = new URLSearchParams(location.search);

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <p>Essa é a home</p>
    </div>
  );
};

export default Produto;
