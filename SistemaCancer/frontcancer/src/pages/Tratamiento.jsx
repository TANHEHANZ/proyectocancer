import React, { useEffect, useState } from 'react'
import { UseFech } from '../hooks/useFech'
import { useModal } from '../hooks/useModal'
import { Info,Div,Infohijo,Section } from './Centros';
import TratamientoForm from '../models/TratamientoForm'
import { getTratamiento , deleteTratamiento} from '../services/Tratamiento';

function Tratamiento() {
  const [tratamiento,setTratamiento]=useState("");
  const{getApi, data:trata}=UseFech(getTratamiento);
  const { openModal, closeModal } = useModal(
    Object.keys(tratamiento).length > 0
      ? "Editar Tipo tratamiento"
      : "Agregar tipo tratamiento",
    <TratamientoForm
      getApi={getApi}
      tratamiento={tratamiento}
    setTratamiento={setTratamiento}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(tratamiento).length > 0) {
      openModal();
    }
  }, [tratamiento]);
  return (
    <Section>
    <Info>
 <Infohijo>
 <div>
  <article>
    <h2>{tratamiento.length}</h2>
  <p>registro Tratamiento</p>
  </article>
   <img src="src\img\paciente.png" alt="" />
 </div>
 <p>Lorem ipsum dolor sit amet.</p>
 </Infohijo>
   </Info>
     <Div>
     <section>
           <h1>Registro  tratamiento por paciente</h1>
           <button onClick={openModal}> nuevo</button>
           <button onClick={openModal}> Excel</button>
           <button onClick={openModal}> Pdf</button>
         </section>
       <table>
         <thead>
           <tr>
             <th>Nº</th>
             <th>Nombre Paciente</th>
             <th>Nombre Doctor</th>
             <th>Tipotratamiento</th>
             <th>fecha inicio</th>
             <th>fecha fin</th>
             <th>fecha observaciones</th>
             <th>fecha estadotratamiento</th>
           </tr>
         </thead>
        
         {trata
           .filter((v) =>
             v.nombre_paciente.toLowerCase().includes(filtro.toLowerCase())
           )
           .map((v, i) => (
             <tbody key={i}>
               <tr>
                 <td>{i + 1}</td>
                 <td>{v.nombre_paciente}</td>
                 <td>{v.nombre_doctor}</td>
                 <td>{v.nombre_tipo_tratamiento}</td>
                 <td>{v.fecha_inicio}</td>
                 <td>{v.fecha_fin}</td>
                 <td>{v.observaciones}</td>
                 <td>{v.estadotratamiento}</td>
                 <td>
                   <div>
                     <button
                       onClick={() => {
                         setTratamiento(v);
                       }}
                     >
                       Editar
                     </button>
                     <button
                       onClick={() => {
                        deleteTratamiento(v.id, getApi);
                       }}
                     >
                      Eliminar
                     </button>
                   </div>
                 </td>
               </tr>
             </tbody>
           ))}
       </table>
     </Div>
   </Section>
  )
}

export default Tratamiento
