import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="./App">
        <h3>Logo</h3>
      </Link>
      <ul>
        <Link to="../Formulario">
          <li>LOGIN</li>
        </Link>
        <Link to="../HechoNoelia">
          <li>¡NACHONOELIA!</li>
        </Link>
        <Link to="../Prescriptor">
          <li>¡PIDETE ALGO!</li>
        </Link>
        <Link to="../Prescriptor1">
          <li>¡PIDETE ALGO, MANOLO!</li>
        </Link>
        <Link to="../Carta">
          <li>LA CARTA</li>
        </Link>
        <Link to="../Fotos">
          <li>FOTOS</li>
        </Link>
        <Link to="../Prueba">
          <li>PRUEBA</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
