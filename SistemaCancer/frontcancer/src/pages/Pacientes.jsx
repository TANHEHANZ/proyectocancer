import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import PacientesForm from "../models/PacientesForm";
import { UseFech } from "../hooks/useFech";
import { deletePacientes, getPacientes } from "../services/Paciente";
import styled from "styled-components";

const Pacientes = () => {
  const [pacienteactual, setPacienteactual] = useState({});
  const { getApi, data: pac } = UseFech(getPacientes);
  const { openModal, closeModal } = useModal(
    Object.keys(pacienteactual).length > 0
      ? "Editar pacientes"
      : "Agregar Pacientes",
    <PacientesForm
      getApi={getApi}
      pacienteactual={pacienteactual}
      setPacienteactual={setPacienteactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(pacienteactual).length > 0) {
      openModal();
    }
  }, [pacienteactual]);

  return (
    <Section>
      <div>
        <article>
          <label htmlFor="">Busqueda por criterios</label>
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
          </section>
          <Paciente>
            {pac
              .filter((v) =>
                v.nombre.toLowerCase().includes(filtro.toLowerCase())
              )
              .map((v, i) => (
                <Car>
                  <label>Id° : {v.id}</label>
                  <label>Nombre : {v.nombre}</label>
                  <label>Ap Paterno:{v.ap_paterno}</label>
                  <label>Sexo: {v.sexo}</label>
                  <label>F nacimiento : {v.fecha_nacimiento}</label>
                  <label>Telefono: {v.telefono}</label>
                  <label>Ci: {v.ci}</label>
                  <label>Ci: {v.direccion}</label>
                  <label>Ci: {v.correo}</label>
                  <label>Ci: {v.edad}</label>
                  <label>Ci: {v.nombre_doctor}</label>
                  <label>Ci: {v.nombre_enfermera}</label>
                  <button  onClick={() => {
                      setPacienteactual(v);
                    }}>Mas info</button>
                </Car>
              ))}
          </Paciente>
          {/* <table>
            <thead>
             
            </thead>
            {pac
              .filter((v) =>
                v.nombre.toLowerCase().includes(filtro.toLowerCase())
              )
              .map((v, i) => (
                <tbody key={i}>
                  <tr
                    onClick={() => {
                      setPacienteactual(v);
                    }}
                  >
                    <td>{v.id}</td>
                    <td>{v.nombre}</td>
                    <td>{v.ap_paterno}</td>
                    <td>{v.ap_materno}</td>
                    <td>{v.sexo}</td>
                    <td>{v.fecha_nacimiento}</td>
                    <td>{v.telefono}</td>
                    <td>{v.ci}</td>

                    <td>
                      <div>
                        <button
                          onClick={() => {
                            deletePacientes(v.id, getApi);
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table> */}
        </Div>
      </div>
    </Section>
  );
};

export default Pacientes;

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
      }
      & input {
        width: 70%;
        border: solid 1px #069266;
        background-color: transparent;
        color: #069266;
      }
    }
  }
`;

const Div = styled.div`
  width: 100%;
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

  & table {
    margin: 1em auto;
    /* background-color: transparent; */
    width: 90%;
    background-color: rgb(59, 78, 87);
    height: auto;
    border-collapse: collapse;

    & button {
      background-color: transparent;
      border: solid 1px #09216f;
      color: #fff;
      margin: 0 5px;
      cursor: pointer;
      padding: 0.2em 1em;
      &:nth-child(2) {
        border: solid 1px #6f0909;
      }
      &:hover {
        background-color: #09216f;
        &:nth-child(2) {
          background-color: #6f0909;
        }
      }
    }
    & th {
      font-size: 1em;
      font-weight: 100;
    }
    & td {
      color: #fff;
      font-weight: lighter;
      font-size: 0.8em;
      padding: 0.5em 0;
      text-align: center;
      &:nth-child(1) {
        padding: 0 1.5em;
      }
    }

    & tr {
      border-top: solid 1px #fff2;
      border-bottom: solid 1px #fff2;

      &:hover {
        background-color: #069266;
        color: #fff;
      }
    }
    & thead {
      color: #069266;
      padding: 1em 0;
      & tr {
        &:hover {
          background-color: transparent;
          color: #069266;
          font-weight: 100;
        }
      }
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
  width: calc(90% / 3);
  height: 20em;
  display: flex;
  flex-direction: column;
  padding: 2em;
  border: ridge 1px #fff2;
  color: #fff;
  gap: 0.5em;
  font-size:0.9em;
  & button {
    width: 100%;
    height: 2.5em;
    border-radius: 0.5em;
    border: none;
  }
`;
