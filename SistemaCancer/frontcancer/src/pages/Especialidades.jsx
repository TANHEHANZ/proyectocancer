import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import EspecialidadesForm from "../models/EspecialidadesForm";
import { UseFech } from "../hooks/useFech";
import {
  deleteEspecialidades,
  getEspecialidades,
} from "../services/Especialidad";
import { Info, Div, Infohijo, Section } from "./Centros";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Especialidades = () => {
  const [especialidadactual, setEspecialidadactual] = useState({});
  const { getApi, data: espe } = UseFech(getEspecialidades);
  const { openModal, closeModal } = useModal(
    Object.keys(especialidadactual).length > 0
      ? "Editar Especialidades"
      : "Agregar Especialidades",
    <EspecialidadesForm
      getApi={getApi}
      especialidadactual={especialidadactual}
      setEspecialidadactual={setEspecialidadactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(especialidadactual).length > 0) {
      openModal();
    }
  }, [especialidadactual]);
  const handleDelete = (id) => {
    deleteEspecialidades(id, getApi, () => {
    });
    toast.error("Los datos se han eliminado correctamente.",{
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      theme: "dark",

    });

  };

  return (
    <Section>
      <Info>
        <Infohijo>
          <div>
            <article>
              <h2>{espe.length}</h2>
              <p>Pacientes</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
      </Info>
      <Div>
        <section>
          <h1>Registro Especialidad</h1>
          <button onClick={openModal}> nuevo</button>
          <button onClick={openModal}> Excel</button>
          <button onClick={openModal}> Pdf</button>
        </section>
        <table>
          <thead>
            <tr>
              <th>Nº</th>
              <th>Nombre</th>
            </tr>
          </thead>
          {espe
            .filter((v) =>
              v.nombre.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <tbody key={i}
              >
                <tr>
                  <td>{i + 1}</td>
                  <td onClick={() => {
                          setEspecialidadactual(v);
                        }} >{v.nombre}</td>
                  <td>
                    <div>
                    
                      <button
                        onClick={() => {
                          handleDelete(v.id);
                        }}
                      >
                        Eliminar
                      </button>
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
export default Especialidades;
