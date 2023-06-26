import React, { useEffect, useState } from "react";
import { UseFech } from "../hooks/useFech";
import { useModal } from "../hooks/useModal";
import { Info, Div, Infohijo, Section } from "./Centros";
import { getTipoexamen, deleteTipoexamen } from "../services/Tipoexamen";
import TipoexamenForm from "../models/TipoexamenForm";

const Tipoexamen = () => {
  const [examenactual, setExamenactual] = useState("");
  const { getApi, data: tip } = UseFech(getTipoexamen);
  const { openModal, closeModal } = useModal(
    Object.keys(examenactual).length > 0
      ? "Editar Examen"
      : "Agregar Un nuevo Tipo de examen",
    <TipoexamenForm
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
              <h2>{tip.length}</h2>
              <p>Tipos Examen</p>
            </article>
            <img src="src\img\paciente.png" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Infohijo>
      </Info>
      <Div>
        <section>
          <h1>Registro Tipos Examen</h1>
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
          {tip
            .filter((v) =>
              v.nombre.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <tbody key={i}>
                <tr
                  onClick={() => {
                    setExamenactual(v);
                  }}
                >
                  <td>{i + 1}</td>
                  <td>{v.nombre}</td>

                  <td>
                    <div>
                      <button
                        onClick={() => {
                          deleteTipoexamen(v.id, getApi);
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

export default Tipoexamen;
