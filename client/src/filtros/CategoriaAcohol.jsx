import { Link } from "react-router-dom";

function CategoriaAlcohol() {
  return (
    <div>
      ¡CÓCTELES CON ESE TOQUE!
      <ul>
        <Link to="/SubcategoriaAlcohol">
          <li>CÍTRICO</li>
        </Link>
        <Link to="/SubcategoriaAlcohol">
          <li>AFRUTADO</li>
        </Link>
        <Link to="/SubcategoriaAlcohol">
          <li>BITTER</li>
        </Link>
        <Link to="/SubcategoriaAlcohol">
          <li>MUY AFRUTADO</li>
        </Link>

        <Link to="./PRUEBA">
          <li>PRUEBA</li>
        </Link>

        <Link to="/CategoriaVirgin">
          <li>¿CON ALCOHOL? ¡MEJOR UN BUEN CÓCTEL VIRGIN!</li>
        </Link>
        
      </ul>
      ¿QUIERES COTILLEAR LA CARTA DE CÓCTELES CON ALCOHOL?
    </div>
  );
}

export default CategoriaAlcohol;
