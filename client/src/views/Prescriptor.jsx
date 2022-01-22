import React from "react";
import { Link } from "react-router-dom";

export default function Prescriptor() {
  return (
    <div>
      <h2>¡PÍDETE ALGO!</h2>
      <ul>
        <Link to='CategoriaAlcohol'>
          <li>CON ALCOHOL</li>
        </Link>
        <Link to='CategoriaVirgin'>
          <li>SIN ALCOHOL</li>
        </Link>
      </ul>
    </div>
  );
}
