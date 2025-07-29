import React from "react";
import Head from './Head'
import {Helmet} from 'react-helmet'

const Home = () => {
  return (
    <div title="Home">
      <Head title="Home" description="Essa é a descrição da home"/>
      {/* <Helmet>
        <title>Aula | Home</title>
        <meta name="description" content="Essa é a descrição da home"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous"></link>
      </Helmet> */}
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};

export default Home;
