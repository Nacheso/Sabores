import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Prescriptor from "./views/Prescriptor";
import CategoriaVirgin from "./filtros/CategoriaVirgin";
import SubcategoriaVirgin from "./subfiltrosVirgin/SubcategoriaVirgin";

const Filtros = () => {
  let [alcohol, setAlcohol] = useState(null);
  let [categoria, setCategoria] = useState(null);
  let [subCategoria, setSubCategoria] = useState(null);

  return (
    <div>
      <Prescriptor alcohol={alcohol} setAlcohol={setAlcohol} />
      <Routes>
        <Route
          path="CategoriaVirgin"
          element={
            <CategoriaVirgin
              categoria={categoria}
              setCategoria={setCategoria}
            />
          }
        />
        <Route
          path="SubcategoriaVirgin"
          element={
            <SubcategoriaVirgin
              subCategoria={subCategoria}
              setSubCategoria={setSubCategoria}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Filtros;
