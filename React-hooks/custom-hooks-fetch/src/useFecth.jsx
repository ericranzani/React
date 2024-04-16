import React from "react";

const useFecth = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null); // para que a mensagem não fique aparecendo direto
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (error) {
      json = null;
      setError("Error");
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, error, loading, request };
};

export default useFecth;
