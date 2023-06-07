import React, { createContext, useState } from 'react';

const PacienteContext = createContext();

const PacienteProvider = ({ children }) => {
  const [paciento, setPaciente] = useState({});

  const guardarPaciente = (nuevoPaciente) => {
    setPaciente(nuevoPaciente);
  };

  return (
    <PacienteContext.Provider value={{ paciento, guardarPaciente }}>
      {children}
    </PacienteContext.Provider>
  );
};
export { PacienteContext, PacienteProvider };
