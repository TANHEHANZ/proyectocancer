import React, { useEffect, useState } from 'react'
import { UseFech } from '../hooks/useFech'
import { useModal } from '../hooks/useModal'
import { Info,Div,Infohijo,Section } from './Centros';
import VisistasForm from '../models/VisistasForm'
import { getVisitas , deletevisitas} from '../services/Visitas';

const Visitas = () => {
  const [visit,setVisit]=useState("");
  const{getApi, data:vis}=UseFech(getVisitas);
  const { openModal, closeModal } = useModal(
    Object.keys(visit).length > 0
      ? "Editar Registro Visitas"
      : "Agregar Registro Visitas",
    <VisistasForm
      getApi={getApi}
      visit={visit}
    setVisit={setVisit}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(visit).length > 0) {
      openModal();
    }
  }, [visit]);
  const [showTable, setShowTable] = useState(false); // Estado para controlar la visibilidad de la tabla
  const [toggleButtonText, setToggleButtonText] = useState("Ver Registros"); // Estado para el texto del botón

  const handleVerRegistros = () => {
     if (showTable) {
      setShowTable(false);
      setToggleButtonText("Ver Registros");
    } else {
      setShowTable(true);
      setToggleButtonText("Ocultar");
    }
  };

  return (
    <Section>
  
     <Div>
     <section>
           <h1> visitas por paciente</h1>
           <button onClick={openModal}> nuevo</button>
           <button onClick={handleVerRegistros}>{toggleButtonText}</button>

         </section>
         {showTable && (
       <table>
         <thead>
           <tr>
             <th>Nº</th>
             <th>Nombre Paciente</th>
             <th>Descripcion</th>
             <th>Concepto de Visita</th>
             <th>Acciones</th>
         
           </tr>
         </thead>
         {vis
           .filter((v) =>
             v.nombre_paciente.toLowerCase().includes(filtro.toLowerCase())
           )
           .map((v, i) => (
             <tbody key={i}>
               <tr>
                 <td>{i + 1}</td>
                 <td>{v.nombre_paciente}</td>
               
                 <td>{v.fecha}</td>
                 <td>{v.detalle}</td>
              
                 <td>
                   <div>
                     <button
                       onClick={() => {
                         setVisit(v);
                       }}
                     >
                       Editar
                     </button>
                     <button
                       onClick={() => {
                        deletevisitas(v.id, getApi);
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
           )}
     </Div>
   </Section>
  )
}

export default Visitas
