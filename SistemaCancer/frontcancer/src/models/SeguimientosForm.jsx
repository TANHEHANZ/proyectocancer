import React from "react";

import styled from "styled-components";
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
import { getDoctor } from "../services/Doctor";
import { getCentros } from "../services/Centros";
import { updateSeguimiento,postseguimiento } from "../services/Seguimentos";
import { getResultados } from "../services/Resultados";
const seguimientoactualForm = ({getApi,
  seguimientoactual,
  setSeguimientoactual,
  closeModal,}) => {

    const [id_pacientes, setId_pacientes] = useState("");
    const { data: pac } = UseFech(getPacientes);
  
  
    const [id_muestras, setId_muestras] = useState("");
    const { data: muestras } = UseFech(getMuestras);
  
    const [id_resultados, setId_resultados] = useState("");
    const { data: resul } = UseFech(getResultados);
     
    const [id_doctores, setid_doctores] = useState("");
    const { data: doc } = UseFech(getDoctor);

    const [id_centros, setid_centros] = useState("");
    const { data: cent } = UseFech(getCentros);
    const [fecha, setFecha] = useState("");

    useEffect(() => {
      if (Object.keys(seguimientoactual).length > 0) {
        setFecha(seguimientoactual.fecha);
      }
      return () => {
        setSeguimientoactual({});
      };
    }, [seguimientoactual]);
  
    const updatepost = (e) => {
      e.preventDefault();
      if (Object.keys(seguimientoactual).length > 0) {
        updateSeguimiento(
          {
            id: seguimientoactual.id,
            id_pacientes: id_pacientes,
            id_muestras: id_muestras,
            id_resultados: id_resultados,
            id_doctores: id_doctores,
            id_centros: id_centros,
            fecha: fecha,
          },
          () => {
         
            setFecha("");
            closeModal();
            setSeguimientoactual({});
            getApi();
          }
        );
      } else {
        postseguimiento(
          id_muestras,id_resultados,id_doctores,id_centros,fecha,id_pacientes,
          () => {
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
            <label>resultados</label>
            <Select onChange={(e) => setId_resultados(e.target.value)}>
              <option>seleccione el resultado</option>
              {resul.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.id}
                </option>
              ))}
            </Select>
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
  
    
         
        
            <label>Doctores</label>
            <Select onChange={(e) => setid_doctores(e.target.value)}>
              <option>seleccione doctor</option>
              {doc.map((v, i) => (
                <option key={i} value={v.id}>
                  {v.nombre}
                </option>
              ))}
            </Select>
          </Divinputlabel>
        </Divinput>
        <Divinput>
          <Divinputlabel>
            <label>seleccione el centros</label>
            <Select onChange={(e) => setid_centros(e.target.value)}>
              <option>seleccione el tipo</option>
              {cent.map((v, i) => (
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
            {Object.keys(seguimientoactual).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
}

export default seguimientoactualForm
