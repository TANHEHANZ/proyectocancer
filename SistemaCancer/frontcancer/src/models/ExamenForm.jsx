import React from "react";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { postExamen ,updateExamen } from "../services/Examen";
import { getPacientedos } from "../services/pacientes2";
import { getTipoexamen } from "../services/Tipoexamen";
import {
  Divinput,
  Botonagregar,
  Container,
  Divboton,
  Divinputlabel,
  Input,
  Select,
} from "./DoctoresForm";
const ExamenForm = ({
  getApi,
  examenactual,
  setExamenactual,
  closeModal,
}) => {
  const [resultado, setResultado] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  const [id_pacientes, setId_pacientes] = useState("");
  const { data: paci } = UseFech(getPacientedos);
  const [id_tipoexamens, setId_tipoexamens] = useState("");
  const { data: tipexa } = UseFech(getTipoexamen);

  useEffect(() => {
    if (Object.keys(examenactual).length > 0) {
        setResultado(examenactual.resultado);
        setDescripcion(examenactual.descripcion);
        setFecha(examenactual.fecha);
    }
    return () => {
        setExamenactual({});
    };
  }, [examenactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(examenactual).length > 0) {
      updateExamen(
        {
        id: examenactual.id,
        resultado:resultado,
        descripcion:descripcion,
        fecha:fecha,
        id_pacientes:id_pacientes,
        id_tipoexamens:id_tipoexamens,
        },
        () => {
          setDescripcion("");
          setFecha("");
          setResultado("");
          closeModal();
          setExamenactual({});
          getApi();
        }
      );
    } else {
      postExamen( 
          id_pacientes,id_tipoexamens,descripcion,fecha,resultado,
        () => {
          setDescripcion("");
          setFecha("");
          setResultado("");
        getApi();
        closeModal();
      });
    }
  };
  console.log("id_pacientes:", resultado);

  return (
    <Container>
    <div>
      <form>
        <Divinput>
          <Divinputlabel>
            <label>Resultado:</label>
            <Input
              name="Resultado"
              placeholder="Ingrese un Resultado"
              type="text"
              required
              value={resultado}
              onChange={(e) => setResultado(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divinput>
          <Divinputlabel>
            <label>Descripcion:</label>
            <Input
              name="app"
              placeholder="Ingrese Descripcion"
              type="text"
              required
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divinput>
        <Divinputlabel>
            <label>fecha:</label>
            <Input
              name="fecha"
              placeholder="Ingrese fecha"
              type="date"
              required
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divinput>
              <Divinputlabel>
                <label>Paciente</label>
                <Select onChange={(e) => setId_pacientes(e.target.value)}>
                  <option >seleccione a un paciente</option>
                  {paci.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Tipo Examen</label>
                <Select onChange={(e) => setId_tipoexamens(e.target.value)}>
                  <option >seleccione el tipo de examen</option>
                  {tipexa.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(examenactual).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
}

export default ExamenForm
