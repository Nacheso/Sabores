import PostFiltro from "../components/PostFiltro";
import ListadoCocteles from "../components/ListadoCocteles"
export default function Carta() {
  return (
    <div>
      <main>
        <h2>La Carta</h2>
      </main>
      ¡LISTADO DE CÓCTELES!
      <PostFiltro></PostFiltro>
      <ListadoCocteles></ListadoCocteles>
    </div>
  );
}
