import React from "react";
import { Navcontextprovider } from "./context/navcontext";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

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
                  <Route path="doctores" element={<Doctores />} />
                  <Route path="especialidades" element={<Especialidades />} />
                </Route>
              </Routes>
              <Modal />
          </Navcontextprovider>
        </Usercontextprovider>
        </ModalContextProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
