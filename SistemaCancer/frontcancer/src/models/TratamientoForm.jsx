import React, { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import {
  Divinput,
  Botonagregar,
  Container,
  Divboton,
  Divinputlabel,
  Input,
  Select,
} from "./DoctoresForm";
import { postTratamiento, updateTratamiento } from "../services/Tratamiento";
import { getPacientes } from "../services/Paciente";
import { getDoctor } from "../services/Doctor";
import { getTipotratamiento } from "../services/Tipotratamiento";

const TratamientoForm = ({
  getApi,
  tratamiento,
  setTratamiento,
  closeModal,
}) => {
  const [id_pacientes, setId_pacientes] = useState("");
  const { data: pac } = UseFech(getPacientes);

  const [id_doctores, setId_doctores] = useState("");
  const { data: doc } = UseFech(getDoctor);

  const [id_tipotratamientos, setId_tipotratamientos] = useState("");
  const { data: tipotrat } = UseFech(getTipotratamiento);
  const [fecha_inicio, setFecha_inicio] = useState("");
  const [fecha_fin, setFecha_fin] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [estadotratamiento, setEstadotratamiento] = useState("");

  useEffect(() => {
    if(Object.keys(tratamiento).length > 0){
    setFecha_fin(tratamiento.fecha_fin);
    setFecha_inicio(tratamiento.fecha_inicio);
    setObservaciones(tratamiento.observaciones);
    setEstadotratamiento(tratamiento.estadotratamiento);
    }
    return () => {
      setTratamiento({});
    }
  }, [tratamiento])
  
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(tratamiento).length > 0) {
      updateTratamiento(
        {
        id: tratamiento.id,
        id_pacientes:id_pacientes,
        id_doctores:id_doctores,
        id_tipotratamientos:id_tipotratamientos,
        fecha_inicio:fecha_inicio,
        fecha_fin:fecha_fin,
        observaciones:observaciones,
        estadotratamiento:estadotratamiento,
        },
        () => {
          setFecha_fin("");
          setFecha_inicio("");
          setObservaciones("");
          setEstadotratamiento("");
          closeModal();
          setObservaciones({});
          getApi();
        }
      );
    } else {
        postTratamiento(
            id_pacientes,id_tipotratamientos,id_doctores,fecha_inicio,fecha_fin,observaciones,estadotratamiento,
        () => {
            setFecha_fin("");
            setFecha_inicio("");
            setObservaciones("");
            setEstadotratamiento("");
          setFecha_fin("");
          setFecha_inicio("");
        getApi();
        closeModal();
      });
    }
  };
  return (
    <Container>
    <div>
      <form>
        <Divinput>
          <Divinputlabel>
            <label>FeCha inicio:</label>
            <Input
              name="fecha"
              placeholder="fecha"
              type="date"
              required
              value={fecha_inicio}
              onChange={(e) => setFecha_inicio(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divinput>
          <Divinputlabel>
            <label>Fecha Fin:</label>
            <Input
              name="fecha"
              placeholder="fecha"
              type="date"
              required
              value={fecha_fin}
              onChange={(e) => setFecha_fin(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
      
        <Divinput>
              <Divinputlabel>
                <label>Paciente</label>
                <Select onChange={(e) => setId_pacientes(e.target.value)}>
                  <option >seleccione el paciente</option>
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
                <label>Doctores</label>
                <Select onChange={(e) => setId_doctores(e.target.value)}>
                  <option >seleccione doctores</option>
                  {doc.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
,
            <Divinput>
              <Divinputlabel>
                <label>Tratamientos del paciente</label>
                <Select onChange={(e) => setId_tipotratamientos(e.target.value)}>
                  <option >seleccione el tratameinto ref del paciente</option>
                  {tipotrat.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
            

   
        <Divinput>
          <Divinputlabel>
            <label>observaciones:</label>
            <Input
              name="observaciones"
              placeholder="observaciones"
              type="text"
              required
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divinput>
          <Divinputlabel>
            <label>Estadotratamiento:</label>
            <Input
              name="estadotratamiento"
              placeholder="estadotratamiento"
              type="text"
              required
              value={estadotratamiento}
              onChange={(e) => setEstadotratamiento(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(tratamiento).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
};

export default TratamientoForm;
