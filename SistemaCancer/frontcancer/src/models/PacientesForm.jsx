import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input,Select } from './DoctoresForm';

import {
  postPacientes,
  updatePacientes,
  getPacientes,
} from "../services/Paciente";

const PacientesForm = ({
  getApi,
  pacienteactual,
  setPacienteactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [ap_paterno, setAp_paterno] = useState("");
  const [ap_materno, setAp_materno] = useState("");
  const [sexo, setSexo] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ci, setCi] = useState("");
  useEffect(() => {
    if (Object.keys(pacienteactual).length > 0) {
        setNombre(pacienteactual.nombre);
        setAp_paterno(pacienteactual.ap_paterno);
        setAp_materno(pacienteactual.ap_materno);
        setSexo(pacienteactual.sexo);
        setFecha_nacimiento(pacienteactual.fecha_nacimiento);
        setTelefono(pacienteactual.telefono);
        setCi(pacienteactual.ci);
    }
    return () => {
        setPacienteactual({});
    };
  }, [pacienteactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(pacienteactual).length > 0) {
        updatePacientes(
        {
        id: pacienteactual.id,
        nombre:pacienteactual.nombre,
        ap_paterno:pacienteactual.ap_paterno,
        ap_materno:pacienteactual.ap_materno,
        sexo:pacienteactual.sexo,
        fecha_nacimiento:pacienteactual.fecha_nacimiento,
        telefono:pacienteactual.telefono,
        ci:pacienteactual.ci,
        },
        () => {
          setNombre("");
          setAp_paterno("");
          setAp_materno("");
          setSexo("");
          setFecha_nacimiento("");
          setTelefono("");
          setCi("");


          closeModal();
          setPacienteactual({});
          getApi();
        }
      );
    } else {
        postPacientes(
            nombre,
        ap_paterno,
        ap_materno,
        sexo,
        fecha_nacimiento,
        telefono,
        ci, () => {
        setNombre("");
          setAp_paterno("");
          setAp_materno("");
          setSexo("");
          setFecha_nacimiento("");
          setTelefono("");
          setCi("");
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
          <label>Nombre:</label>
          <Input
            name="Nombre"
            placeholder="Ingrese un Nombre"
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
        <Divinputlabel>
          <label>apeliido paterno:</label>
          <Input
            name="app"
            placeholder="Ingrese apellido paterno"
            type="text"
            required
            value={ap_paterno}
            onChange={(e) => setAp_paterno(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
      <Divinputlabel>
          <label>apeliido materno:</label>
          <Input
            name="app m"
            placeholder="Ingrese apellido materno"
            type="text"
            required
            value={ap_materno}
            onChange={(e) => setAp_materno(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
        <Divinputlabel>
          <label>sexo:</label>
          <Input
            name="sexo"
            placeholder="seleccione un sexo"
            type="text"
            required
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
        <Divinputlabel>
        <label>Fecha:</label>
                <Input type="date" placeholder='Ingrese Fecha' value={fecha_nacimiento} onChange={(e) => setFecha_nacimiento(e.target.value)}/>
            </Divinputlabel>
      </Divinput>
      <Divinput>
        <Divinputlabel>
          <label>telefono</label>
          <Input
            name="Telefono"
            placeholder="Seguimiento de telefono"
            type="number"
            value={telefono}
            required
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
        <Divinputlabel>
          <label>Ci:</label>
          <Input
            name="ci"
            placeholder="Ingrese un ci"
            type="number"
            required
            value={ci}
            onChange={(e) => setCi(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>

      <Divboton>
        <Botonagregar onClick={(e) => updatepost(e)}>
          {Object.keys(pacienteactual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
      </Divboton>
    </form>
  </div>
</Container>
  )
};
export default PacientesForm;
