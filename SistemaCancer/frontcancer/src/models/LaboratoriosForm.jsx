import React from 'react'
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import {
  postlaboratorio,
  updateLaboratorio,
  
} from "../services/Laboratorios";
import { getDoctores } from '../services/Doctor';
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input,Select } from './DoctoresForm';
const LaboratoriosForm = ({ getApi,
    laboratorioactual,
    setLaboratorioactual,
    closeModal,}) => {

  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [id_doctores, setId_doctores] = useState("");
  const { data: doc } = UseFech(getDoctores);


        useEffect(() => {
            if (Object.keys(laboratorioactual).length > 0) {
                setNombre(laboratorioactual.nombre);
                setUbicacion(laboratorioactual.ubicacion);          
            }
            return () => {
                setLaboratorioactual({});
            };
          }, [laboratorioactual]);
        
          const updatepost = (e) => {
            e.preventDefault();
            if (Object.keys(laboratorioactual).length > 0) {
                updateLaboratorio(
                {
                id: laboratorioactual.id,
                nombre:laboratorioactual.nombre,
                ubicacion:laboratorioactual.ubicacion,
                id_doctores:laboratorioactual.id_doctores,
                },
                () => {
                  setNombre("");
                  setUbicacion("");
                  closeModal();
                  setLaboratorioactual({});
                  getApi();
                }
              );
            } else {
                postlaboratorio(
                    nombre,ubicacion,id_doctores,() => {
                setNombre("");
                setUbicacion("");
                getApi();
                closeModal();
              });
            }
          };


  return (
    <div>
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
          <label>Ubicacion</label>
          <Input
            name="ubicacion"
            placeholder="Ingrese la Ubciacion"
            type="text"
            required
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      
      <Divinput>
            <Divinputlabel>
              <label>doctores</label>
              <Select onChange={(e) => setId_doctores(e.target.value)}>
                <option >seleccione </option>
                {doc.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.nombre}
                  </option>
                ))}
              </Select>
            </Divinputlabel>
          </Divinput>
     
   
      <Divboton>
        <Botonagregar onClick={(e) => updatepost(e)}>
          {Object.keys(laboratorioactual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
      </Divboton>
    </form>
  </div>
</Container>
    </div>
  )
}

export default LaboratoriosForm
