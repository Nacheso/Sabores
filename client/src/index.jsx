import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import Formulario from "./views/Formulario";
import Formulario1 from "./views/Formulario1";

import Prescriptor from "./views/Prescriptor";
import CategoriaAlcohol from "./filtros/CategoriaAcohol";
import CategoriaVirgin from "./filtros/CategoriaVirgin";
import SubcategoriaVirgin from "./subfiltrosVirgin/SubcategoriaVirgin";
import SubcategoriaAlcohol from "./subfiltrosAlcohol/SubcategoriaAlcohol";

import Carta from "./views/Carta";
import UnCoctel from "./components/UnCoctel";

import Fotos from "./views/Fotos";

import CategoriaPruebaAlcohol from "./filtros/CategoriaPruebaAlcohol";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Formulario" element={<Formulario />} />
        <Route path="Formulario1" element={<Formulario1 />} />

        <Route path="Prescriptor" element={<Prescriptor />} />

        <Route path="Carta" element={<Carta />} />

        <Route path="CategoriaVirgin" element={<CategoriaVirgin />} />
        <Route path="SubcategoriaVirgin" element={<SubcategoriaVirgin />} />

        <Route path="CategoriaAlcohol" element={<CategoriaAlcohol />} />
        <Route path="SubcategoriaAlcohol" element={<SubcategoriaAlcohol />} />

        <Route path="CoctelInfo/:CoctelIndex" element={<UnCoctel />} />

        <Route path="Fotos" element={<Fotos />} />

        <Route path="Prueba/*" element={<CategoriaPruebaAlcohol />} />

        <Route path="*" element={<main></main>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
