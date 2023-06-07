import React, { useEffect, useState } from "react";
import { updateTipoexamen, postTipoexamen } from "../services/Tipoexamen";
import { Container,Botonagregar,Divboton,Divinput,Divinputlabel,Input } from "./DoctoresForm";

const TipoexamenForm = ({
  getApi,
  examenactual,
  setExamenactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  useEffect(() => {
    if (Object.keys(examenactual).length > 0) {
      setNombre(examenactual.nombre);
    }
    return () => {
      setExamenactual({});
    };
  }, [examenactual]);
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(examenactual).length > 0) {
      updateTipoexamen(
        {
          id: examenactual.id,
          nombre: nombre,
        },
        () => {
          setNombre("");
          setExamenactual({});
          getApi();
        }
      );
    } else {
      postTipoexamen(nombre, () => {
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
            {Object.keys(examenactual).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
};

export default TipoexamenForm;
