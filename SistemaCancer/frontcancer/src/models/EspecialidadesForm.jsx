import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
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
