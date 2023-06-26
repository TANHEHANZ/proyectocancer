import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import EnfermerasForm from "../models/EnfermerasForm";
import { UseFech } from "../hooks/useFech";
import { Info, Div, Infohijo, Section } from "./Centros";
import { getEnfermera,deleteEnfermera } from "../services/Enfermera";
const Enfermeras = () => {
  const [enfermeraactual, setEnfermeraactual] = useState({});
  const { getApi, data: enfer } = UseFech(getEnfermera);
  const { openModal, closeModal } = useModal(
    Object.keys(enfermeraactual).length > 0
      ? "Editar registro de enfermera"
      : "Agregar registro de enfermera",
    <EnfermerasForm
      getApi={getApi}
      enfermeraactual={enfermeraactual}
      setEnfermeraactual={setEnfermeraactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(enfermeraactual).length > 0) {
      openModal();
    }
  }, [enfermeraactual]);

  return (
    <Section>
      <Info>
     
        <Infohijo>
          <div>
            <article>
              <h2>{enfer.length}</h2>
              <p>Pacientes</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
        <Infohijo>
          <div>
            <article>
              <h2>{enfer.length}</h2>
              <p>Pacientes</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
        <Infohijo>
          <div>
            <article>
              <h2>{enfer.length}</h2>
              <p>Pacientes</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
      </Info>
      <Div>
        <section>
          <h1>Registro Enfermeras</h1>
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
              <th>Direccion</th>
              <th>experiencia</th>
              <th>correo</th>
              <th>Centro</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          {enfer
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
                  <td>{v.direccion}</td>
                  <td>{v.experiencia}</td>
                  <td>{v.correo}</td>
                  <td>{v.nombre_centro}</td>

                  <td>
                    <div>
                      <button
                        onClick={() => {
                          setEnfermeraactual(v);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          deleteEnfermera(v.id, getApi);
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

export default Enfermeras;
