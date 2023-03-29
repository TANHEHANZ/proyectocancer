import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/app/Nav";
import Inicio from "./components/app/Inicio";
import TiposCancer from "./components/app/TiposCancer";
import Tratamientos from "./components/app/Tratamientos";
import EfectosSecundarios from "./components/app/EfectosSecundarios";
import Contactanos from "./components/app/Contactanos";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>} >
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Tipos_de_cancer" element={<TiposCancer/>}/>
        <Route path="/Tratamientos" element={<Tratamientos/>}/>
        <Route path="/Efectos_Secundarios" element={<EfectosSecundarios/>}/>
        <Route path="/Contactanos" element={<Contactanos/>}/>
        </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
