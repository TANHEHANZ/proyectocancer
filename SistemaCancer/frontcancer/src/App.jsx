import React from "react";
import { Navcontextprovider } from "./context/navcontext";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from "./pages/Login";
import { ModalContextProvider } from "./context/modalContext";
import { Usercontextprovider } from "./context/userContext";
import ProtectedRoute from "./wrappers/ProtectedRoute";
import { useState } from "react";
import Navbar from "./components/app/navbar";
import Modal from "./modal";
import Doctores from "./pages/Doctores"
import Pacientes from "./pages/Pacientes"
import Especialidades from "./pages/Especialidades"
import Enfermeras from "./pages/Enfermeras"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Laboratorios from "./pages/Laboratorios";
import Centros from "./pages/Centros";
import Municipios from "./pages/Municipios";
import Muestras from "./pages/Muestras";
import Resultados from "./pages/Resultados";
import Seguimientos from "./pages/Seguimientos";
import Ciudades from "./pages/Ciudades";
import Provincias from "./pages/Provincias";
import Tiposcancer from "./pages/Tiposcancer";
import Ususarios from "./pages/Ususarios";
import PacienteDetalle from "./pages/PacienteDetalle";
import CrudApp from "./componentes/Cruds/CrudApp";
import CrudApi from "./componentes/Cruds/CrudApi";

function App() {
  return (
    <>
      <BrowserRouter>
      <ModalContextProvider>

        <Usercontextprovider>
          <Navcontextprovider>
          <Routes>
                <Route path="login" element={<Login />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Navbar />
                    </ProtectedRoute>
                  }
                >
                  <Route path="home" element={<Home />} />
                  <Route path="pacientes" element={<Pacientes />} />

                  <Route path="/pacientes/:id" element={<PacienteDetalle />} />


                  <Route path="doctores" element={<Doctores />} />
                  <Route path="crudapi" element={<CrudApi />} />
                  
                  <Route path="cruds" element={<CrudApp />} />
                  <Route path="especialidades" element={<Especialidades />} />
                  <Route path="enfermeras" element={< Enfermeras/>} />
                  <Route path="centros" element={<Centros />} />
                  <Route path="municipios" element={<Municipios />} />
                  <Route path="laboratorios" element={<Laboratorios />} />
                  <Route path="muestras" element={<Muestras />} />
                  <Route path="resultados" element={<Resultados />} />
                  <Route path="seguimientos" element={<Seguimientos />} />
                  <Route path="ciudades" element={<Ciudades />} />
                  <Route path="provincias" element={<Provincias />} />
                  <Route path="tiposcancer" element={<Tiposcancer />} />
                  <Route path="usuarios" element={<Ususarios />} />
                </Route>
              </Routes>
              <Modal />
          </Navcontextprovider>
        </Usercontextprovider>
        </ModalContextProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
