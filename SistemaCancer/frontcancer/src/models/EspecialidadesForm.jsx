import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input,Select } from './DoctoresForm';

import {
  postEspecialidades,
  updateEspecialidades,
  
} from "../services/Especialidad";

const PacientesForm = ({
  getApi,
  especialidadactual,
  setEspecialidadactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
 
  useEffect(() => {
    if (Object.keys(especialidadactual).length > 0) {
        setNombre(especialidadactual.nombre);
  
    }
    return () => {
        setEspecialidadactual({});
    };
  }, [especialidadactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(especialidadactual).length > 0) {
        updateEspecialidades(
        {
        id: especialidadactual.id,
        nombre:especialidadactual.nombre,
        
        },
        () => {
          setNombre("");
          closeModal();
          setEspecialidadactual({});
          getApi();
        }
      );
    } else {
        postEspecialidades(
            nombre, () => {
        setNombre("");
         
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
    

      <Divboton>
        <Botonagregar onClick={(e) => updatepost(e)}>
          {Object.keys(especialidadactual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
      </Divboton>
    </form>
  </div>
</Container>
  )
};
export default PacientesForm;
