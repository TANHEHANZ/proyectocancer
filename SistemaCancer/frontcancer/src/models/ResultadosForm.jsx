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

const Container = styled.div``;
const Divinputlabel = styled.div`
  display: flex;
  flex-direction: column;
`;
const Divinput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
  
`;
const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  &:focus {
    border: 1.5px solid #034078;
  }
`;
const Divboton = styled.div`
  display: flex;
  justify-content: center;
`;
const Botonagregar = styled.button`
  padding: 10px;
  cursor: pointer;
  background: #034078;
  color: #fff;
  border-radius: 7px;
  &:hover {
    background: #0077b6;
  }
`;
const Select = styled.select`
  width: 180px;
  outline: none;
  font-size: 16px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;
