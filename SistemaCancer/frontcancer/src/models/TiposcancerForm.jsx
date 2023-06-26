import React from 'react'
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input,Select } from './DoctoresForm';

import { useState, useEffect } from "react";
import { postTiposcancer, updateTiposcancer } from "../services/Tiposcancer";

const TiposcancerForm = ({getApi,
    tiposcancersactual,
    setTiposcancersactual,
    closeModal,}) => {
        const [nombre, setNombre] = useState("");
       
        useEffect(() => {
            if (Object.keys(tiposcancersactual).length > 0) {
              setNombre(tiposcancersactual.nombre);
            }
            return () => {
              setTiposcancersactual({});
            };
          }, [tiposcancersactual]);
        
          const updatepost = (e) => {
            e.preventDefault();
            if (Object.keys(tiposcancersactual).length > 0) {
              updateTiposcancer(
                {
                  id: tiposcancersactual.id,
                  nombre: nombre,
                
                },
                () => {
                  setNombre("");
                  getApi();
                  closeModal();
                  setTiposcancersactual({});

                }
              );
            } else {
              postTiposcancer(nombre, () => {
                setNombre("");
                getApi();
                closeModal();
                setTiposcancersactual({});

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
      
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(tiposcancersactual).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
}

export default TiposcancerForm