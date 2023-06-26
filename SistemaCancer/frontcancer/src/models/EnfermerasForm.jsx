import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { getCentros} from "../services/Centros";
import { postEnfermera,updateEnfermera } from "../services/Enfermera";

const EnfermerasForm = ({
  getApi,
  enfermeraactual,
  setEnfermeraactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [ap_paterno, setAp_paterno] = useState("");
  const [ap_materno, setAp_materno] = useState("");
  const [ci, setCi] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [id_centros, setId_centros] = useState("");
  const { data: centr } = UseFech(getCentros);
  useEffect(() => {
    if (Object.keys(enfermeraactual).length > 0) {

        setNombre(enfermeraactual.nombre);
        setAp_paterno(enfermeraactual.ap_paterno);
        setAp_materno(enfermeraactual.ap_materno);
        setCi(enfermeraactual.ci);
        setCorreo(enfermeraactual.correo);
        setDireccion(enfermeraactual.direccion);
        setExperiencia(enfermeraactual.experiencia);
        
    }
    return () => {
        setEnfermeraactual({});
    };
  }, [enfermeraactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(enfermeraactual).length > 0) {
      updateEnfermera(
        {
        id: enfermeraactual.id,
        nombre:nombre,
        ap_paterno:ap_paterno,
        ap_materno:ap_materno,
        ci:ci,
        correo:correo,
        direccion:direccion,
        experiencia:experiencia,
        id_centros:id_centros,
      
        },
        () => {
          setNombre("");
          setAp_paterno("");
          setAp_materno("");
          setCi("");
          setCorreo("");
          setDireccion("");
          setExperiencia("");
          closeModal();
          setEnfermeraactual({});
          getApi();
        }
      );
    } else {
        postEnfermera(
            nombre,
        ap_paterno,
        ap_materno,
        ci,
        correo,
        direccion,
        experiencia,
        id_centros,
        () => {
        setNombre("");
          setAp_paterno("");
          setAp_materno("");
          setCi("");
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
      <Divinput>
        <Divinputlabel>
          <label>apeliido paterno:</label>
          <Input
            name="app"
            placeholder="Ingrese apellido paterno"
            type="text"
            required
            value={ap_paterno}
            onChange={(e) => setAp_paterno(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
      <Divinputlabel>
          <label>apeliido materno:</label>
          <Input
            name="app m"
            placeholder="Ingrese apellido materno"
            type="text"
            required
            value={ap_materno}
            onChange={(e) => setAp_materno(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
      <Divinputlabel>
          <label>correo:</label>
          <Input
            name="Correo"
            placeholder="Ingrese correo"
            type="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
      <Divinputlabel>
          <label>Direccion:</label>
          <Input
            name="Direcccion"
            placeholder="Ingrese direccion"
            type="text"
            required
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
      <Divinputlabel>
          <label>Experiencia</label>
          <Input
            name="experiencia"
            placeholder="Ingrese Su experiencia"
            type="text"
            required
            value={experiencia}
            onChange={(e) => setExperiencia(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>

      <Divinput>
        <Divinputlabel>
          <label>Ci:</label>
          <Input
            name="ci"
            placeholder="Ingrese un ci"
            type="number"
            required
            value={ci}
            onChange={(e) => setCi(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
    
          <Divinput>
            <Divinputlabel>
              <label>centro</label>
              <Select onChange={(e) => setId_centros(e.target.value)}>
                <option >seleccione a que sentro pertenece</option>
                {centr.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.nombre}
                  </option>
                ))}
              </Select>
            </Divinputlabel>
          </Divinput>
   
     

      <Divboton>
        <Botonagregar onClick={(e) => updatepost(e)}>
          {Object.keys(enfermeraactual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
      </Divboton>
    </form>
  </div>
</Container>
  )
};
export default EnfermerasForm;

export const Container = styled.div``;
export const Divinputlabel = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Divinput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
  
`;
export const Input = styled.input`
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
export const Divboton = styled.div`
  display: flex;
  justify-content: center;
`;
export const Botonagregar = styled.button`
width:70%;
margin:0 auto;
padding:0.5em 0;
  cursor: pointer;
  background: #05bd79;
  color: #fff;
  border-radius: 7px;
  border:solid 1px #0002;

  &:hover {
    background: #ffffff;
    color:#05bd79;
  }
`;
export const Select = styled.select`
  width: 180px;
  outline: none;
  font-size: 16px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;
