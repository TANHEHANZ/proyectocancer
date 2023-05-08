import React from "react";
import {
  Divinput,
  Botonagregar,
  Container,
  Divboton,
  Divinputlabel,
  Input,
  Select,
} from "./DoctoresForm";

import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { postCentros, updateCentros } from "../services/Centros";
import { getMunicipio } from "../services/Municipios";
const CentrosForm = ({
  getApi,
  centrosactual,
  setCentrosactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [id_municipios, setId_municipios] = useState("");
  const { data: mun } = UseFech(getMunicipio);

  useEffect(() => {
    if (Object.keys(centrosactual).length > 0) {
      setNombre(centrosactual.nombre);
      setAp_paterno(centrosactual.ubicacion);
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
          id_municipios: id_municipios,
        },
        () => {
          setNombre("");
          setUbicacion("");
          setCentrosactual({});
          getApi();
        }
      );
    } else {
      postCentros(nombre, ubicacion, id_municipios, () => {
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

        <Divinput>
              <Divinputlabel>
                <label>municipios</label>
                <Select onChange={(e) => setId_municipios(e.target.value)}>
                  <option >seleccione </option>
                  {mun.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
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
