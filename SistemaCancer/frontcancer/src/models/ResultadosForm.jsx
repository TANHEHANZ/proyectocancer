import React from 'react'
import {
  postResultados,
  updateResultados,
  getResultados,
} from "../services/Resultados";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { getMuestras } from '../services/Muestras';
import { getLaboratotio } from '../services/Laboratorios';
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input,Select } from './DoctoresForm';

const ResultadosForm = ( {getApi,
  resultadoactual,
  setResultadoactual,
  closeModal}) => {

    const [resultados ,setResultados]= useState("");
    const [id_muestras ,setId_muestras]= useState("");
  const { data: muestras } = UseFech(getMuestras);

    const [id_laboratorios ,setId_laboratorios]= useState("");
  const { data: labora } = UseFech(getLaboratotio);

    const [fecha ,setFecha]= useState("");
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
        postResultados(resultados, id_muestras,id_laboratorios,fecha, () => {
          setResultados("");
          setFecha("");
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
                <option >seleccione la muestra</option>
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
                <option >seleccione El Laboratorio</option>
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
  )
}

export default ResultadosForm

