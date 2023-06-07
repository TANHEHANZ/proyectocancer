import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import ExamenForm from "../models/ExamenForm";
import { UseFech } from "../hooks/useFech";
import { Info, Div, Infohijo, Section } from "./Centros";
import { getExamen  ,deleteExamen} from "../services/Examen";
const Examen = () => {
  const [examenactual, setExamenactual] = useState({});
  const { getApi, data: exa } = UseFech(getExamen);
  const { openModal, closeModal } = useModal(
    Object.keys(examenactual).length > 0
      ? "Editar Examen"
      : "Agregar Examen",
    <ExamenForm
      getApi={getApi}
      examenactual={examenactual}
      setExamenactual={setExamenactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(examenactual).length > 0) {
      openModal();
    }
  }, [examenactual]);
  return (
    <Section>
      <Info>
        <Infohijo>
          <div>
            <article>
              <h2>{exa.length}</h2>
              <p>Pacientes</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
        <Infohijo>
          <div>
            <article>
              <h2>{exa.length}</h2>
              <p>Pacientes</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
        <Infohijo>
          <div>
            <article>
              <h2>{exa.length}</h2>
              <p>Pacientes</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
      </Info>
      <Div>
        <section>
          <h1>Registro Examen de cada paciente</h1>
          <button onClick={openModal}> nuevo</button>
          <button onClick={openModal}> Excel</button>
          <button onClick={openModal}> Pdf</button>
        </section>
        <table>
          <thead>
            <tr>
              <th>Nº</th>
              <th>Paciente</th>
              <th>TipoExamen</th>
              <th>Descripcion</th>
              <th>fecha</th>
              <th>resultado</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          {exa
            .filter((v) =>
              v.nombre_paciente.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <tbody key={i}>
                <tr  onClick={() => {
                          setExamenactual(v);
                        }}>
                  <td>{i + 1}</td>
                  <td>{v.nombre_paciente}</td>
                  <td>{v.nombre_tipo_examen}</td>
                  <td>{v.descripcion}</td>
                  <td>{v.fecha}</td>
                  <td>{v.resultado}</td>
                  <td>
                    <div>
                    
                      <button
                        onClick={() => {
                            deleteExamen(v.id, getApi);
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

export default Examen;
