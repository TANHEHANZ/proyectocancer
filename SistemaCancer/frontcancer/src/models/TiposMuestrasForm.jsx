import React from 'react'
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input } from './DoctoresForm';
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { postTipomuestras,updateTipomuestras} from '../services/Tipomuestras';

const TiposMuestrasForm = ({getApi,
    muestraactual,
    setMuestraactual,
    closeModal,}) => {

  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if (Object.keys(muestraactual).length > 0) {
        setNombre(muestraactual.nombre);       
    }
    return () => {
        setMuestraactual({});
    };
  }, [muestraactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(muestraactual).length > 0) {
        updateTipomuestras(
        {
        id: muestraactual.id,
        nombre:nombre,
        },
        () => {
          setNombre("");
          closeModal();
          setMuestraactual({});
          getApi();
        }
      );
    } else {
        postTipomuestras(
            nombre,() => {
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
      
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(muestraactual).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
}

export default TiposMuestrasForm
