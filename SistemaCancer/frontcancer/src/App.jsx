import React from "react";
import { Navcontextprovider } from "./context/navcontext";
import Login from "./pages/Login";
import { Usercontextprovider } from "./context/userContext";
import ProtectedRoute from "./wrappers/ProtectedRoute";
import { useState } from "react";
import Navbar from "./components/app/navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
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
                   {/* <Route path="" element={} /> */}
                 
                </Route>
              </Routes>
          </Navcontextprovider>
        </Usercontextprovider>
      </BrowserRouter>
    </>
  );
}

export default App;
