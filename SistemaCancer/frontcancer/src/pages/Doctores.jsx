import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import DoctoresForm from "../models/DoctoresForm";
import { UseFech } from "../hooks/useFech";
import { deleteDoctores, getDoctores } from "../services/Doctor";
import styled from "styled-components";

const Doctores = () => {
  const [doctoresactual, setDoctoresactual] = useState({});
  const { getApi, data: doc } = UseFech(getDoctores);
  const { openModal, closeModal } = useModal(
    Object.keys(doctoresactual).lengTh > 0
      ? "Editar pacientes"
      : "Agregar Pacientes",
    <DoctoresForm
      getApi={getApi}
      doctoresactual={doctoresactual}
      setDoctoresactual={setDoctoresactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(doctoresactual).lengTh > 0) {
      openModal();
    }
  }, [doctoresactual]);

  return (
    <Section>
      <H1>Doctores</H1>
      <Div>
        <button onClick={openModal}>
          <img src="" alt="" /> Nuevo
        </button>
        <table>
          <thead>
            <tr>
              <th>Nº</th>
              <th>Nombre</th>
              <th>Ap Paterno</th>
              <th>Ap Materno</th>
              <th>Ci</th>
              <th>Especialidades</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          {doc
            .filter((v) =>
              v.nombre.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <tbody key={i}>
                <tr>
                  <td>{i + 1}</td>
                  <td>{v.nombre}</td>
                  <td>{v.ap_paterno}</td>
                  <td>{v.ap_materno}</td>
                  <td>{v.ci}</td>
                  <td>{v.especialidad}</td>

                  <td>
                    <div>
                      <button
                        onClick={() => {
                          setDoctoresactual(v);
                        }}
                      >
                        Editar
                      </button>
                      <Abutton
                        onClick={() => {
                          deleteDoctores(v.id, getApi);
                        }}
                      >
                       Eliminar
                      </Abutton>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </Div>
    </Section>
  );
};

export default Doctores
const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 1em;
`;

const H1 = styled.h1`
  width: 100%;
  font-size: 1.5em;
  margin:1em;
  &::first-letter {
    font-size: 1.4em;
    color: blue;
  }
`;
const Abutton = styled.button`
background-color:#c85858 !important;

`;

const Div = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  margin:0 auto;
  flex-direction: column;
  & > button {
    width: 15%;
    padding: 1em 2em;
    border: none;
    background-color: #0000ffc7;
    border-radius: 0.5em;
    color: #fff;
  }
  & table {
    margin: 1em auto;
    background-color: #0005;
    width: 85%;
    height: auto;
    padding: 1em;
    border-collapse: collapse;
    & th {
      border: 0.5px solid #ffffff54;
      height: 0em;
      padding: 0.6em 0.5em;
      background-color: #0037ffe3;
      color: #fff;
    }
    & tr {
        background-color: #ffffff;
      border: 0.5px solid #ffffff54;

  color: #211e1e;
  text-align: left;
  font-weight:100;
  &:hover{
    background-color: #3636ffdf;
    color:#fff;
  }
    }
    & thead {
      background-color: #fff;
    }
   & button{
    width:80%;
    padding:0.5em;
    border:none;
   cursor: pointer;
   margin:1px auto;
   border-radius:0.5em;
   background-color:#1e52fc;
    color:#fff;
&:hover{
    background-color:#fff !important;
    color:blue;
}
   }
   
  }
`;

