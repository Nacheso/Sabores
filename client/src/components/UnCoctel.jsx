import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function UnCoctel({ name, varios, to = "" }) {
  const { CoctelIndex } = useParams();
  const [coctel, setCoctel] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Api/CoctelesRouter/find/${CoctelIndex}`)
      .then((res) => {
        setCoctel(res.data.coctel);

        var productos = coctel.ingredientes.map(function () {
          return productos;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [CoctelIndex, coctel.ingredientes]);

  return (
    <div>
      ¡QUE LO DISFRUTE!
      <table>
        <tr>{coctel.name}</tr>
        <td>{coctel.ingredientes}</td>
      </table>
      <ul>¿QUIERE SEGUIR MIRANDO LA CARTA?</ul>
    </div>
  );
}

export default UnCoctel;
