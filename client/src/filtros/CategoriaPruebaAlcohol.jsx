import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Prescriptor from "../views/Prescriptor";
import CategoriaAlcohol from "./CategoriaAcohol";
import SubcategoriaAlcohol from "../subfiltrosAlcohol/SubcategoriaAlcohol";

const CategoriaPruebaAlcohol = () => {
  let [alcohol, setAlcohol] = useState(null);
  let [categoria, setCategoria] = useState(null);
  let [subCategoria, setSubCategoria] = useState(null);
  
  return (
    <div>
      
      <Routes>
        <Route index element={<Prescriptor alcohol={alcohol} setAlcohol={setAlcohol} />}/>
        <Route
          path="CategoriaAlcohol"
          element={
            <CategoriaAlcohol
              categoria={categoria}
              setCategoria={setCategoria}
            />
          }
        />
        <Route
          path="SubcategoriaAlcohol"
          element={
            <SubcategoriaAlcohol
              subCategoria={subCategoria}
              setSubCategoria={setSubCategoria}
            />
          }
        />
      </Routes>
      <Outlet/>
    </div>

  );
};

export default CategoriaPruebaAlcohol;
