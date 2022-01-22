import { Link } from "react-router-dom";

function CategoriaVirgin() {
  return (
    <div>
      ¡CÓCTELES VIRGIN!
      <ul>
        <Link to="/SubcategoriaVirgin">
          <li>CÍTRICO</li>
        </Link>
        <Link to="/SubcategoriaVirgin">
          <li>AFRUTADO</li>
        </Link>
        <Link to="/SubcategoriaVirgin">
          <li>BITTER</li>
        </Link>
        <Link to="/SubcategoriaVirgin">
          <li>MUY AFRUTADO</li>
        </Link>

        <Link to='/CategoriaAlcohol'>
          <li>¡MEJOR DALE UN TOQUE DE ALCOHOL!</li>
        </Link>
      </ul>
      ¿UN VISTAZO A LOS CÓCTELES SIN ALCOHOL?
    </div>
  );
}

export default CategoriaVirgin;
