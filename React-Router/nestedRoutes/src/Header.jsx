import React from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou a rota');
  }, [location])

  return (
    <nav>
      <NavLink to="/" end activeStyle={{ color: "green" }}>
        Home
      </NavLink>{" "}
      | <NavLink to="sobre">Sobre</NavLink> |{" "}
      <NavLink to="login">Login</NavLink>
    </nav>
  );
};

export default Header;
