import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { postmuestras, updateMuestras } from "../services/Muestras";
import { getPacientes } from "../services/Paciente";
import { getEnfermera } from "../services/Enfermera";
import { getCentros } from "../services/Centros";
import { getTiposcancer } from "../services/Tiposcancer";

const MuestrasForm = ({
  getApi,
  muestrasactual,
  setMuestrasactual,
  closeModal,
}) => {
  // <td>{i + 1}</td>
  // <td>{v.id_pacientes}</td>
  // <td>{v.id_centros}</td>
  // <td>{v.id_tiposcancers}</td>
  // <td>{v.id_enfermeras}</td>
  // <td>{v.fecha}</td>
  const [fecha, setFecha] = useState("");

  const [id_pacientes, setId_pacientes] = useState("");
  const { data: pacientes } = UseFech(getPacientes);

  const [id_centros, setI_centros] = useState("");
  const { data: centro } = UseFech(getCentros);

  const [id_tiposcancers, setId_tiposcancers] = useState("");
  const { data: tipos } = UseFech(getTiposcancer);

  const [id_enfermeras, setId_enfermeras] = useState("");
  const { data: enferm } = UseFech(getEnfermera);

  useEffect(() => {
    if (Object.keys(muestrasactual).length > 0) {
      setNombre(muestrasactual.fecha);
    }
    return () => {
      setMuestrasactual({});
    };
  }, [muestrasactual]);
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(muestrasactual).length > 0) {
      updateMuestras(
        {
          id: muestrasactual.id,
          id_pacientes: id_pacientes,
          id_centros: id_centros,
          id_tiposcancers: id_tiposcancers,
          id_enfermeras: id_enfermeras,
          fecha: fecha,
        },
        () => {
          setFecha("");
          closeModal();
          setdooctoractual({});
          getApi();
        }
      );
    } else {
      postmuestras(id_pacientes, id_centros, id_tiposcancers, id_enfermeras,fecha, () => {
        setFecha("");
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
                <label>Pacientes</label>
                <Select onChange={(e) => setId_pacientes(e.target.value)}>
                  <option >seleccione a un paciente</option>
                  {pacientes.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
        </Divinput>
        <Divinput>
              <Divinputlabel>
                <label>Centros</label>
                <Select onChange={(e) => setI_centros(e.target.value)}>
                  <option >seleccione un centro</option>
                  {centro.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
        </Divinput>
        <Divinput>
              <Divinputlabel>
                <label>Tipos de Cancer</label>
                <Select onChange={(e) => setId_tiposcancers(e.target.value)}>
                  <option >seleccione un tipo</option>
                  {tipos.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
        </Divinput>
        <Divinput>
              <Divinputlabel>
                <label>Enfermera</label>
                <Select onChange={(e) => setId_enfermeras(e.target.value)}>
                  <option >seleccione un Enfermera</option>
                  {enferm.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
        </Divinput>
        <Divinput>
          <Divinputlabel>
            <label>Fecha: </label>
            <Input
              name="fecha"
              type="date"
              required
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
  
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(muestrasactual).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
};

export default MuestrasForm;
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

