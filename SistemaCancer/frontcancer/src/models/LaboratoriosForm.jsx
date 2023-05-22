import React from 'react'
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import {
  postlaboratorio,
  updateLaboratorio,
  
} from "../services/Laboratorios";
import { getDoctor } from '../services/Doctor';
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input,Select } from './DoctoresForm';
const LaboratoriosForm = ({ getApi,
    laboratorioactual,
    setLaboratorioactual,
    closeModal,}) => {

  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [contacto, setContacto] = useState("");
  const [email, setEmail] = useState("");

console.log(anotificado);
        useEffect(() => {
            if (Object.keys(laboratorioactual).length > 0) {
                setNombre(laboratorioactual.nombre);
                setUbicacion(laboratorioactual.ubicacion);          
                setContacto(laboratorioactual.contacto);          
                setEmail(laboratorioactual.email);          
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
                contacto:laboratorioactual.contacto,
                email:laboratorioactual.email,
                },
                () => {
                  setNombre("");
                  setUbicacion("");
                  setContacto("");
                  setEmail("");
                  closeModal();
                  setLaboratorioactual({});
                  getApi();
                }
              );
            } else {
                postlaboratorio(
                    nombre,ubicacion,contacto,email,id_doctores,() => {
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
          <label>contacto</label>
          <Input
            name="contacto"
            placeholder="Ingrese la Ubciacion"
            type="text"
            required
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>

      <Divinput>
        <Divinputlabel>
          <label>email</label>
          <Input
            name="email"
            placeholder="Ingrese la Ubciacion"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
   
      <Divboton>
        <Botonagregar onClick={(e) => updatepost(e)} >
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
