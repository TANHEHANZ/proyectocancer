import React from "react";
import {
  postResultados,
  updateResultados,
} from "../services/Resultados";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { getMuestras } from "../services/Muestras";
import { getLaboratotio } from "../services/Laboratorios";
import {
  Divinput,
  Botonagregar,
  Container,
  Divboton,
  Divinputlabel,
  Input,
  Select,
} from "./DoctoresForm";
import { getPacientes } from "../services/Paciente";
import { getTiposcancer } from "../services/Tiposcancer";

const ResultadosForm = ({
  getApi,
  resultadoactual,
  setResultadoactual,
  closeModal,
}) => {
  const [resultados, setResultados] = useState("");

  const [id_pacientes, setId_pacientes] = useState("");
  const { data: pac } = UseFech(getPacientes);

  const [id_tiposcancers, setId_tiposcancers] = useState("");
  const { data: tipoca } = UseFech(getTiposcancer);

  const [id_muestras, setId_muestras] = useState("");
  const { data: muestras } = UseFech(getMuestras);

  const [id_laboratorios, setId_laboratorios] = useState("");
  const { data: labora } = UseFech(getLaboratotio);

  const [fecha, setFecha] = useState("");
  useEffect(() => {
    if (Object.keys(resultadoactual).length > 0) {
      setResultados(resultadoactual.resultados);
      setFecha(resultadoactual.fecha);
    }
    return () => {
      setResultadoactual({});
    };
  }, [resultadoactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(resultadoactual).length > 0) {
      updateResultados(
        {
          id: resultadoactual.id,
          resultados: resultados,
          id_muestras: id_muestras,
          id_laboratorios: id_laboratorios,
          id_pacientes: id_pacientes,
          id_tiposcancers: id_tiposcancers,
          fecha: fecha,
        },
        () => {
          setResultados("");
          setFecha("");
          closeModal();
          setResultadoactual({});
          getApi();
        }
      );
    } else {
      postResultados(
        resultados,id_pacientes,id_tiposcancers,id_muestras,id_laboratorios,fecha,
        () => {
          setResultados("");
          setFecha("");
          getApi();
          closeModal();
        }
      );
    }
  };

  return (
    <Container>
      <div>
        <form>
          <Divinput>
            <Divinputlabel>
              <label>pacientes</label>
              <Select onChange={(e) => setId_pacientes(e.target.value)}>
                <option>seleccione Al paciente</option>
                {pac.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.nombre}
                  </option>
                ))}
              </Select>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>resultados:</label>
              <Input
                name="resultados"
                placeholder="Ingrese el resultado"
                type="text"
                required
                value={resultados}
                onChange={(e) => setResultados(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>

          <Divinput>
            <Divinputlabel>
              <label>Muestras</label>
              <Select onChange={(e) => setId_muestras(e.target.value)}>
                <option>seleccione la muestra</option>
                {muestras.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.id}
                  </option>
                ))}
              </Select>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Laboratorios</label>
              <Select onChange={(e) => setId_laboratorios(e.target.value)}>
                <option>seleccione El Laboratorio</option>
                {labora.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.nombre}
                  </option>
                ))}
              </Select>
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>tipos de cancer</label>
              <Select onChange={(e) => setId_tiposcancers(e.target.value)}>
                <option>seleccione el tipo</option>
                {tipoca.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.nombre}
                  </option>
                ))}
              </Select>
            </Divinputlabel>
          </Divinput>

          <Divinput>
            <Divinputlabel>
              <label>Fecha: </label>
              <Input
                name="fecha"
                type="date"
                required
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divboton>
            <Botonagregar onClick={(e) => updatepost(e)}>
              {Object.keys(resultadoactual).length > 0 ? "Editar" : "Agregar"}
            </Botonagregar>
          </Divboton>
        </form>
      </div>
    </Container>
  );
};

export default ResultadosForm;
