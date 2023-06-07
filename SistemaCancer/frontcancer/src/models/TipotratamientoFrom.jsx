import React from 'react'
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input } from './DoctoresForm';
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { postTipotratamiento,updateTipotratamiento} from '../services/Tipotratamiento';

const TipotratamientoFrom = ({getApi,
    tipotratamiento,
    setTipotratamiento,
    closeModal,}) => {

        const [nombre, setNombre] = useState("");

        useEffect(() => {
          if (Object.keys(tipotratamiento).length > 0) {
              setNombre(tipotratamiento.nombre);       
          }
          return () => {
              setTipotratamiento({});
          };
        }, [tipotratamiento]);
      
        const updatepost = (e) => {
          e.preventDefault();
          if (Object.keys(tipotratamiento).length > 0) {
              updateTipotratamiento(
              {
              id: tipotratamiento.id,
              nombre:nombre,
              },
              () => {
                setNombre("");
                closeModal();
                setTipotratamiento({});
                getApi();
              }
            );
          } else {
              postTipotratamiento(
                  nombre,() => {
              setNombre("");
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
      
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(tipotratamiento).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
    </div>
  )
}

export default TipotratamientoFrom
