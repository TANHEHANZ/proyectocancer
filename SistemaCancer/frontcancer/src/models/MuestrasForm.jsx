import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { postmuestras, updateMuestras } from "../services/Muestras";
import { getPacientes } from "../services/Paciente";
import { getEnfermera } from "../services/Enfermera";
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input,Select } from './DoctoresForm';
import { getTipomuestras } from "../services/Tipomuestras";

const MuestrasForm = ({
  getApi,
  muestrasactual,
  setMuestrasactual,
  closeModal,
}) => {
  const [fecha, setFecha] = useState("");

  const [id_pacientes, setId_pacientes] = useState("");
  const { data: pacientes } = UseFech(getPacientes);

  const [descripcion, setDescripcion] = useState("");

  const [id_tipomuestra, setId_tipomuestra] = useState("");
  const { data: tipm } = UseFech(getTipomuestras);

  const [id_enfermeras, setId_enfermeras] = useState("");
  const { data: enferm } = UseFech(getEnfermera);

  useEffect(() => {
    if (Object.keys(muestrasactual).length > 0) {
      setFecha(muestrasactual.fecha);
      setDescripcion(muestrasactual.descripcion);
    }
    return () => {
      setMuestrasactual({});
    };
  }, [muestrasactual]);
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(muestrasactual).length > 0) {
      updateMuestras(
        {
          id: muestrasactual.id,
          id_pacientes: id_pacientes,
          id_tipomuestra: id_tipomuestra,
          descripcion: descripcion,
          id_enfermeras: id_enfermeras,
          fecha: fecha,
        },
        () => {
          setFecha("");
          closeModal();
          setdooctoractual({});
          getApi();
        }
      );
    } else {
      postmuestras(id_pacientes,id_tipomuestra,descripcion,id_enfermeras,fecha, () => {
        setFecha("");
        getApi();
        closeModal();
      });
    }
  };

  return(
    <Container>
    <div>
      <form>
       
        <Divinput>
              <Divinputlabel>
                <label>Pacientes</label>
                <Select onChange={(e) => setId_pacientes(e.target.value)}>
                  <option >seleccione a un paciente</option>
                  {pacientes.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
        </Divinput>
        <Divinput>
              <Divinputlabel>
                <label>Tipo muestra</label>
                <Select onChange={(e) => setId_tipomuestra(e.target.value)}>
                  <option >seleccione un tipo muestra</option>
                  {tipm.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
        </Divinput>
        <Divinput>
          <Divinputlabel>
            <label>descripcion </label>
            <Input
              name="descripcion"
              type="text"
           
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divinput>
              <Divinputlabel>
                <label>Enfermera</label>
                <Select onChange={(e) => setId_enfermeras(e.target.value)}>
                  <option >seleccione un Enfermera</option>
                  {enferm.map((v, i) => (
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
            {Object.keys(muestrasactual).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
};
export default MuestrasForm;