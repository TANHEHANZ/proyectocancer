import React from 'react'
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input,Select } from './DoctoresForm';

import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { postmunicipios, updateMunicipios } from "../services/Municipios";
import { getProvincias } from '../services/Provincias';
const MunicipiosForm = ({
    getApi,
    municipiosactual,
    setMunicipiosactual,
    closeModal,
}) => {
    const [nombre, setNombre] = useState("");
    const [id_provincias, setId_provincias] = useState("");
    const { data: prob } = UseFech(getProvincias);
    useEffect(() => {
        if (Object.keys(municipiosactual).length > 0) {
          setNombre(municipiosactual.nombre);
        }
        return () => {
          setMunicipiosactual({});
        };
      }, [municipiosactual]);
    
      const updatepost = (e) => {
        e.preventDefault();
        if (Object.keys(municipiosactual).length > 0) {
          updateMunicipios(
            {
              id: municipiosactual.id,
              nombre: nombre,
              id_provincias: id_provincias,
            },
            () => {
              setNombre("");
            closeModal();
            setMunicipiosactual({});
              getApi();

            }
          );
        } else {
          postmunicipios(nombre,id_provincias , () => {
            setNombre("");
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
                <label>Provincia</label>
                <Select onChange={(e) => setId_provincias(e.target.value)}>
                  <option >seleccione </option>
                  {prob.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(municipiosactual).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
}

export default MunicipiosForm
