import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import DerivacionesForm from "../models/DerivacionesForm";
import { UseFech } from "../hooks/useFech";
import { Info, Div, Infohijo, Section } from "./Centros";
import styled from "styled-components";
import { getDerivaciones, deleteDerivaciones } from "../services/Derivaciones";
const Derivaciones = () => {
  const [derivaciones, setDerivaciones] = useState({});
  const { getApi, data: deriv } = UseFech(getDerivaciones);
  const { openModal, closeModal } = useModal(
    Object.keys(derivaciones).length > 0
      ? "Editar Registro D"
      : "Agregar Derivaciones",
    <DerivacionesForm
      getApi={getApi}
      derivaciones={derivaciones}
      setDerivaciones={setDerivaciones}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  const [showTable, setShowTable] = useState(false); // Estado para controlar la visibilidad de la tabla
  const [toggleButtonText, setToggleButtonText] = useState("Ver Registros"); // Estado para el texto del botón

  const handleVerRegistros = () => {
     if (showTable) {
      setShowTable(false);
      setToggleButtonText("Ver Registros");
    } else {
      setShowTable(true);
      setToggleButtonText("Ocultar");
    }
  };

  useEffect(() => {
    if (Object.keys(derivaciones).length > 0) {
      openModal();
    }
  }, [derivaciones]);

  return (
    <Section>
      <Div>
        <section>
          <h1>Derivaciones</h1>
          <button onClick={openModal}> nuevo</button>
          <button onClick={handleVerRegistros}>{toggleButtonText}</button>
        </section>
        {showTable && (
        <table>
          <thead>
            <tr>
              <th>Nº</th>
              <th>Paciente</th>
              <th>Doctor Asignado</th>
              <th>Trtatamiento</th>
              <th>centro</th>
              <th>resultados</th>
              <th>fecha inicio</th>
              <th>fecha fin</th>
            </tr>
          </thead>
          {deriv
            .filter((v) =>
              v.nombre_paciente.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
              <tbody key={i}>
                <tr>
                  <td>{i + 1}</td>
                  <td>{v.nombre_paciente}</td>
                  <td>{v.nombre_doctor}</td>
                  <td>{v.estadotratamiento}</td>
                  <td>{v.nombre_centro}</td>
                  <td>{v.nombre_resultado}</td>
                  <td>{v.fecha_inicio}</td>
                  <td>{v.fecha_fin}</td>
                  <td>
                    <div>
                      <button
                        onClick={() => {
                          setDerivaciones(v);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          deleteDerivaciones(v.id, getApi);
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
         )}
      </Div>
    </Section>
  );
};

export default Derivaciones;
