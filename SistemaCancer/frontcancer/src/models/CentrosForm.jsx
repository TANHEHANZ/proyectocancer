import React from "react";
import {
  Divinput,
  Botonagregar,
  Container,
  Divboton,
  Divinputlabel,
  Input,
} from "./DoctoresForm";

import { useState, useEffect } from "react";
import { postCentros, updateCentros } from "../services/Centros";
const CentrosForm = ({
  getApi,
  centrosactual,
  setCentrosactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  useEffect(() => {
    if (Object.keys(centrosactual).length > 0) {
      setNombre(centrosactual.nombre);
      setUbicacion(centrosactual.ubicacion);
    }
    return () => {
      setCentrosactual({});
    };
  }, [centrosactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(centrosactual).length > 0) {
      updateCentros(
        {
          id: centrosactual.id,
          nombre: nombre,
          ubicacion: ubicacion,
        },
        () => {
          setNombre("");
          setUbicacion("");
          setCentrosactual({});
          closeModal();
          getApi();
        }
      );
    } else {
      postCentros(nombre, ubicacion, () => {
        setNombre("");
        setUbicacion("");
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
            <label>Ubicacion</label>
            <Input
              name="ub"
              placeholder="Ingrese la "
              type="text"
              required
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(centrosactual).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>

  );
};

export default CentrosForm;
