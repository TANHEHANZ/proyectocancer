import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import DoctoresForm from "../models/DoctoresForm";
import { UseFech } from "../hooks/useFech";
import { deleteDoctor, getDoctor } from "../services/Doctor";
import { Info, Div, Infohijo, Section } from "./Centros";
const Doctores = () => {
  const [doctoresactual, setDoctoresactual] = useState({});
  const { getApi, data: doc } = UseFech(getDoctor);
  const { openModal, closeModal } = useModal(
    Object.keys(doctoresactual).lengTh > 0
      ? "Editar Doctores"
      : "Agregar Doctores",
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
      <Info>
        <Infohijo>
          <div>
            <article>
              <h2>{doc.length}</h2>
              <p>Pacientes</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
        <Infohijo>
          <div>
            <article>
              <h2>{doc.length}</h2>
              <p>Pacientes</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
        <Infohijo>
          <div>
            <article>
              <h2>{doc.length}</h2>
              <p>Pacientes</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
      </Info>
      <Div>
        <section>
          <h1>Registro Doctores</h1>
          <button onClick={openModal}> nuevo</button>
          <button onClick={openModal}> Excel</button>
          <button onClick={openModal}> Pdf</button>
        </section>
        <table>
          <thead>
            <tr>
              <th>Nº</th>
              <th>Nombre</th>
              <th>Ap Paterno</th>
              <th>Ap Materno</th>
              <th>Ci</th>
              <th>Correo</th>
              <th>Direccion</th>
              <th>Credenciales</th>
              <th>Descripcion</th>
              <th>Especialidades</th>
              <th>Centro</th>
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
                  <td>{v.correo}</td>
                  <td>{v.Direccion}</td>
                  <td>{v.descripcion}</td>
                  <td>{v.Credenciales}</td>
                  <td>{v.nombre_especialidad}</td>
                  <td>{v.nombre_centro}</td>

                  <td>
                    <div>
                      <button
                        onClick={() => {
                          setDoctoresactual(v);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          deleteDoctor(v.id, getApi);
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

export default Doctores;
