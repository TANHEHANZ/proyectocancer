import React ,{ useState, useEffect } from "react";
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
import { getCentros} from "../services/Centros";
import { postDerivaciones, updateDerivaciones } from "../services/Derivaciones";
import { getPacientedos } from "../services/pacientes2";
import { getDoctor } from "../services/Doctor";
import { getTratamiento } from "../services/Tratamiento";
import { getResultados } from "../services/Resultados";

const DerivacionesForm = ({
  getApi,
  derivaciones,
  setDerivaciones,
  closeModal,
}
)=> {
  const [fecha_inicio, setFecha_inicio] = useState("");
  const [fecha_fin, setFecha_fin] = useState("");
  const [id_pacientes, setId_pacientes] = useState("");
  const { data: paci } = UseFech(getPacientedos);
  const [id_doctores, setId_doctores] = useState("");
  const { data: doc } = UseFech(getDoctor);
  const [id_tratamientos, setId_tratamientos] = useState("");
  const { data: tra } = UseFech(getTratamiento);
  const [id_centros, setId_centros] = useState("");
  const { data: cen } = UseFech(getCentros);
  const [id_resultados, setId_resultados] = useState("");
  const { data: res } = UseFech(getResultados);
  useEffect(() => {
    if(Object.keys(derivaciones).length > 0){
    setFecha_fin(derivaciones.fecha_fin);
    setFecha_inicio(derivaciones.fecha_inicio);
    }
    return () => {
      setDerivaciones({});
    }
  }, [derivaciones])
  
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(derivaciones).length > 0) {
      updateDerivaciones(
        {
        id: derivaciones.id,
        id_centros:id_centros,
        fecha_inicio:fecha_inicio,
        fecha_fin:fecha_fin,
        id_pacientes:id_pacientes,
        id_doctores:id_doctores,
        id_tratamientos:id_tratamientos,
        id_resultados:id_resultados,
        },
        () => {
          setFecha_fin("");
          setFecha_inicio("");
          closeModal();
          setDerivaciones({});
          getApi();
        }
      );
    } else {
        postDerivaciones(
          id_pacientes,id_doctores,id_tratamientos,id_centros,id_resultados,fecha_inicio,fecha_fin,
        () => {
          setFecha_fin("");
          setFecha_inicio("");
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
            <label>FeCha inicio:</label>
            <Input
              name="fecha"
              placeholder="fecha"
              type="date"
              required
              value={fecha_inicio}
              onChange={(e) => setFecha_inicio(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divinput>
          <Divinputlabel>
            <label>Fecha Fin:</label>
            <Input
              name="fecha"
              placeholder="fecha"
              type="date"
              required
              value={fecha_fin}
              onChange={(e) => setFecha_fin(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>

        <Divinput>
              <Divinputlabel>
                <label>Paciente</label>
                <Select onChange={(e) => setId_pacientes(e.target.value)}>
                  <option >seleccione el paciente</option>
                  {paci.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Doctores</label>
                <Select onChange={(e) => setId_doctores(e.target.value)}>
                  <option >seleccione doctores</option>
                  {doc.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
    
            <Divinput>
              <Divinputlabel>
                <label>Tratamientos del paciente</label>
                <Select onChange={(e) => setId_tratamientos(e.target.value)}>
                  <option >seleccione el tratameinto ref del paciente</option>
                  {tra.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.	estadotratamiento}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>

            <Divinput>
              <Divinputlabel>
                <label>Centro Referido</label>
                <Select onChange={(e) => setId_centros(e.target.value)}>
                  <option >seleccione el centro refe</option>
                  {cen.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
            <Divinput>
              <Divinputlabel>
                <label>Resultados del paciente</label>
                <Select onChange={(e) => setId_resultados(e.target.value)}>
                  <option >seleccione el resultado refdel paciente</option>
                  {res.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.resultados}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(derivaciones).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
}

export default DerivacionesForm
