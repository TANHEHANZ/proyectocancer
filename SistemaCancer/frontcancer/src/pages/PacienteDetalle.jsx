import React, { useState, useEffect } from "react";
import { getPacientes } from "../services/Paciente";
import { UseFech } from "../hooks/useFech";

const PacienteDetalle = ({ id }) => {
  const [paciente, setPaciente] = useState({});
  const { getApi, data: pac } = UseFech(getPacientes);
  useEffect(() => {
    // Llamar a la API para obtener los detalles del paciente por su ID
    const fetchPaciente = async () => {
      try {
        const response = await getPacientes(id);
        setPaciente(response.data);
      } catch (error) {
        // Manejar el error de alguna manera (mostrar un mensaje, redirigir, etc.)
        console.error("Error al obtener los detalles del paciente", error);
      }
    };

    fetchPaciente();
  }, [id]);

  if (!paciente) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del paciente</h2>
      <p>ID: {paciente.id}</p>
      <p>Nombre: {paciente.nombre}</p>
      <p>Ap Paterno: {paciente.ap_paterno}</p>
      <p>Sexo: {paciente.sexo}</p>
      <p>Fecha de nacimiento: {paciente.fecha_nacimiento}</p>
      <p>Teléfono: {paciente.telefono}</p>
      <p>CI: {paciente.ci}</p>
      {/* Renderizar otros detalles del paciente según sea necesario */}
    </div>
  );
};

export default PacienteDetalle;
