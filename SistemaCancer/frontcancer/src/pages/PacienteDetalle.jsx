import React, { useState, useEffect, useContext } from "react";
import { PacienteContext } from "../context/pacienteContext";
import styled from "styled-components";

const PacienteDetalle = () => {
  const { paciento } = useContext(PacienteContext);
  return (
    <Section>
      <article>
        <img src="src/img/doctors.jpg" alt="img" />
        <div>
          <p>Nombre: {paciento.nombre}</p>
          <p>id_ref: {paciento.id}</p>
          <p>Ci: {paciento.ci}</p>
          <p>Apellido Paterno: {paciento.ap_materno}</p>
          <p>Apellido Materno: {paciento.ap_paterno}</p>
          <p>Direccion: {paciento.direccion}</p>
          <p>edad: {paciento.edad}</p>
          <p>fecha Nacimiento: {paciento.fecha_nacimiento}</p>

          <p>Doctor: {paciento.nombre_doctor}</p>
          <p>Nombre: {paciento.nombre_enfermera}</p>
          <p>Nombre: {paciento.sexo}</p>
          <p>Nombre: {paciento.telefono}</p>
        </div>
      </article>
      <div>
        <section>reporte</section>
        <div>
          <button>aseguradora </button> <button>Referido clinica</button>
        </div>
        <input type="text" placeholder="notas" />
        <article> documentos asociasdos al paciente </article>
      </div>
    </Section>
  );
};

export default PacienteDetalle;
export const Section = styled.section`
  width: 90%;
  height: 100%;
  margin: 1em auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  & > article {
    width: 200px;
    border: solid 1px #fff2;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff9b;
    & > div {
      width: 95%;

      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      padding:0.5em;
    }
    img {
      margin: 2em 0;
      width: 5em;
      height: 5em;
      border-radius: 50%;
    }
  }
  & > div {
    width: calc(90% - 150px);
    background-color: transparent;
    height: 100%;
    & > section {
      width: 100%;
      height: 15em;
      border: solid 1px #fff2;
    }
    & > div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      height: 3em;
      & button {
        width: calc(90% / 2);
      }
    }
    & input {
      width: 100%;
      height: 5em;
    }
    & article {
      width: 100%;
      height: 20em;
      border: solid 1px #fff2;
    }
  }
`;
