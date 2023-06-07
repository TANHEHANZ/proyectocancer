import React, { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import {
  Divinput,
  Botonagregar,
  Container,
  Divboton,
  Divinputlabel,
  Input,
  Select,
} from "./DoctoresForm";

import { getPacientes } from "../services/Paciente";

import { postvisitas,updatevisitas} from "../services/Visitas";

const VisistasForm = ({
    getApi,
    visit,
    setVisit,
    closeModal,
}) => {
    const [id_pacientes, setId_pacientes] = useState("");
    const { data: pac } = UseFech(getPacientes);
 
   
    const [detalle, setDetalle] = useState("");
    const [fecha, setFecha] = useState("");

    useEffect(() => {
        if(Object.keys(visit).length > 0){
        setFecha(visit.fecha);
        setDetalle(visit.detalle);
        }
        return () => {
          setVisit({});
        }
      }, [visit])
      
      const updatepost = (e) => {
        e.preventDefault();
        if (Object.keys(visit).length > 0) {
          updatevisitas(
            {
            id: visit.id,
            id_pacientes:id_pacientes,
            fecha:fecha,
            detalle:detalle,
                   },
            () => {
              setFecha("");
              setDetalle("");
            
              closeModal();
              setVisit({});
              getApi();
            }
          );
        } else {
            postvisitas(
                id_pacientes,fecha,detalle,
            () => {
                setFecha("");
                setDetalle("");
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
                <label>Fecha </label>
                <Input
                  name="fecha"
                  placeholder="fecha"
                  type="date"
                  required
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </Divinputlabel>
            </Divinput>
          
            <Divinput>
                  <Divinputlabel>
                    <label>Paciente</label>
                    <Select onChange={(e) => setId_pacientes(e.target.value)}>
                      <option >seleccione el paciente</option>
                      {pac.map((v, i) => (
                        <option key={i} value={v.id}>
                          {v.nombre}
                        </option>
                      ))}
                    </Select>
                  </Divinputlabel>
                </Divinput>
          
    ,
                
    
       
            <Divinput>
              <Divinputlabel>
                <label>Detalle:</label>
                <Input
                  name="detalle"
                  placeholder="detalle"
                  type="text"
                  required
                  value={detalle}
                  onChange={(e) => setDetalle(e.target.value)}
                />
              </Divinputlabel>
            </Divinput>
            <Divboton>
              <Botonagregar onClick={(e) => updatepost(e)}>
                {Object.keys(visit).length > 0 ? "Editar" : "Agregar"}
              </Botonagregar>
            </Divboton>
          </form>
        </div>
      </Container>
      )
}

export default VisistasForm