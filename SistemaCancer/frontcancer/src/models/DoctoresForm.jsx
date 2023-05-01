import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import {

  postDoctor,
  updateDoctores,
  getDoctores,
} from "../services/Doctor";
import { getEspecialidades} from "../services/Especialidad";

const DoctoresForm = ({
  getApi,
  dooctoractual,
  setDooctoractual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [ap_paterno, setAp_paterno] = useState("");
  const [ap_materno, setAp_materno] = useState("");
  const [ci, setCi] = useState("");
  const [id_especialidades, setId_especialidades] = useState("");
  const { data: especialidad } = UseFech(getEspecialidades);
  useEffect(() => {
    if (Object.keys(dooctoractual).length > 0) {
        setNombre(dooctoractual.nombre);
        setAp_paterno(dooctoractual.ap_paterno);
        setAp_materno(dooctoractual.ap_materno);
        setCi(dooctoractual.ci);
    }
    return () => {
        setDooctoractual({});
    };
  }, [dooctoractual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(dooctoractual).length > 0) {
        updateDoctores(
        {
        id: dooctoractual.id,
        nombre:nombre,
        ap_paterno:ap_paterno,
        ap_materno:ap_materno,
        ci:ci,
        id_especialidades:id_especialidades,
        },
        () => {
          setNombre("");
          setAp_paterno("");
          setAp_materno("");
          setCi("");
          closeModal();
          setdooctoractual({});
          getApi();
        }
      );
    } else {
        postDoctor(
            nombre,
        ap_paterno,
        ap_materno,
        ci,
        id_especialidades,
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
              <label>especialidades</label>
              <Select onChange={(e) => setId_especialidades(e.target.value)}>
                <option >seleccione las especialidades</option>
                {especialidad.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.especialidad}
                  </option>
                ))}
              </Select>
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

      <Divboton>
        <Botonagregar onClick={(e) => updatepost(e)}>
          {Object.keys(dooctoractual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
      </Divboton>
    </form>
  </div>
</Container>
  )
};
export default DoctoresForm;

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
