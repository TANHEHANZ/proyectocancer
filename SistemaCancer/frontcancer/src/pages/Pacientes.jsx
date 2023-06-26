import React from "react";
import { useState, useEffect, useContext } from "react";
import { useModal } from "../hooks/useModal";
import PacientesForm from "../models/PacientesForm";
import { UseFech } from "../hooks/useFech";
import { getPacientes } from "../services/Paciente";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { PacienteContext, PacienteProvider } from "../context/pacienteContext";
import Derivaciones from "./Derivaciones";
import ReportesPacientesGeneral from "../Report/ReportesPacientesGeneral";
import ReportesPacienteEdad from "../Report/ReportesPacienteEdad";
import Visitas from "./Visitas";

const Pacientes = () => {
  const [pacienteactualdos, setPacienteactualdos] = useState({});
  const { getApi, data: pac } = UseFech(getPacientes);
  const { openModal, closeModal } = useModal(
    "Agregar Pacientes",
    <PacientesForm
      getApi={getApi}
      pacienteactualdos={pacienteactualdos}
      setPacienteactualdos={setPacienteactualdos}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(pacienteactualdos).length > 0) {
      openModal();
    }
  }, [pacienteactualdos]);

  const { paciento, guardarPaciente } = useContext(PacienteContext);
  const handleClick = (v) => {
    guardarPaciente(v);
  };
  console.log(paciento);
  return (
    <Section>
      <div>
        <article>
          <label htmlFor="">Busqueda por el nombre del paciente</label>
          <input
            type="text"
            placeholder="Buscar"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </article>

        <Div>
          <section>
            <h1>Registro Pacientes</h1>
            <button onClick={openModal}> nuevo</button>
            <p> cantidad de Registros {pac.length}</p>
          </section>
          <section>
          <h1>Registro de Derivaciones</h1>
          <Derivaciones/>

          </section>
          <section>
            <h1>registro de visitas por cada paciente</h1>
            <Visitas/>
          </section>
          <Paciente>
            {pac
              .filter((v) =>
                v.nombre.toLowerCase().includes(filtro.toLowerCase())
              )
              .map((v, i) => (
                <Car key={i}>
                  <label>Id° : {v.id}</label>
                  <label>Nombre : {v.nombre}</label>
                  <label>Ap Paterno:{v.ap_paterno}</label>
                  <label>Sexo: {v.sexo}</label>
                  <label>F nacimiento : {v.fecha_nacimiento}</label>
                  <label>Telefono: {v.telefono}</label>
                  <label>Ci: {v.ci}</label>
                  <button onClick={() => handleClick(v)}>
                    <Linkes to="/detalle-paciente">Historial paciente</Linkes>
                  </button>
                </Car>
              ))}
          </Paciente>
        </Div>
        <aside>
          <ReportesPacientesGeneral />
          <ReportesPacienteEdad/>
        </aside>
      </div>
    </Section>
  );
};

export default Pacientes;
const animat = keyframes`
  0% {
    transform:translateX(10px);
  }
  100% {
    transform:translateX(0px);
    
  }
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 1em;
  display: flex;
  flex-direction: row;
  & > div {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    & aside {
      width: 48%;
      height: auto;
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      border-radius: 15px;
      border: solid 1px #fff2;
    }
    & > article {
      height: 3em;
      gap: 1em;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      & label {
        font-size: 0.8em;
        text-transform: uppercase;
        font-weight: 400;
        width: 15%;
        color: #fff;
        margin-left: 2em;
      }
      & input {
        width: 70%;
        border: solid 1px #069266;
        background-color: transparent;
        color: #069266;
        outline: #fff;
      }
    }
  }
`;

const Div = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  border-radius: 15px;
  border: solid 1px #fff2;

  & > section {
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin: 0.5em 1em 0 1em;
    border-bottom: solid 1px #069266;
    padding: 1em 0;
    &:nth-child(2){
    display: flex;
    flex-direction: column;
    }
    &:nth-child(3){
    display: flex;
    flex-direction: column;
    }
    & > p {
      color: #069266;
      text-transform: uppercase;
      font-size: 0.8em;
    }
    & > h1 {
      font-size: 0.9em;
      font-weight: 100;
      color: #fff;
      text-transform: uppercase;
    }
    & > button {
      padding: 0.2em 1em;
      color: #069266;
      border: solid 1px #069266;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;
const Paciente = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 1em;
  flex-wrap: wrap;
  gap: 1em;
`;
const Car = styled.article`
  width: calc(90% / 2);
  height: 20em;
  display: flex;
  flex-direction: column;
  padding: 2em;
  border: ridge 1px #fff2;
  color: #fff;
  gap: 0.5em;
  font-size: 0.9em;
  &:hover {
  box-shadow: 0 3px 5px #fff2;
  transform: translateX(5px);
}
  & button {
    width: 100%;
    height: 3em;
    border-radius: 0.5em;
    border: none;
    background-color: #069266;
    padding: 0.4em 0;
  }
`;
export const Linkes = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: transparent;
`;
