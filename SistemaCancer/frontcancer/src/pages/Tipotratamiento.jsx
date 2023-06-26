import React, { useEffect, useState } from 'react'
import { UseFech } from '../hooks/useFech'
import { useModal } from '../hooks/useModal'
import TipotratamientoFrom from '../models/TipotratamientoFrom'
import { Info,Div,Infohijo,Section } from './Centros';
import { getTipotratamiento ,deleteTipotratamiento} from '../services/Tipotratamiento'

const Tipostratamiento = () => {
  const [tipotratamiento, setTipotratamiento]=useState("");
  const{getApi, data:tiotratamiento}=UseFech(getTipotratamiento);
  const { openModal, closeModal } = useModal(
    Object.keys(tipotratamiento).length > 0
      ? "Editar Tipo tratamiento"
      : "Agregar tipo tratamiento",
    <TipotratamientoFrom
      getApi={getApi}
      tipotratamiento={tipotratamiento}
      setTipotratamiento={setTipotratamiento}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(tipotratamiento).length > 0) {
      openModal();
    }
  }, [tipotratamiento]);
  return (
    <Section>
    <Info>
 <Infohijo>
 <div>
  <article>
    <h2>{tiotratamiento.length}</h2>
  <p>Tipos Tratamiento</p>
  </article>
   <img src="src\img\paciente.png" alt="" />
 </div>
 <p>Lorem ipsum dolor sit amet.</p>
 </Infohijo>
   </Info>
     <Div>
     <section>
           <h1>Registro Tipos tratamiento</h1>
           <button onClick={openModal}> nuevo</button>
           <button onClick={openModal}> Excel</button>
           <button onClick={openModal}> Pdf</button>
         </section>
       <table>
         <thead>
           <tr>
             <th>Nº</th>
             <th>Nombre</th>
           </tr>
         </thead>
         {tiotratamiento
           .filter((v) =>
             v.nombre.toLowerCase().includes(filtro.toLowerCase())
           )
           .map((v, i) => (
             <tbody key={i}>
               <tr  onClick={() => {
                         setTipotratamiento(v);
                       }}>
                 <td>{i + 1}</td>
                 <td>{v.nombre}</td>
                 <td>
                   <div>
                     <button
                       onClick={() => {
                         deleteTipotratamiento(v.id, getApi);
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

export default Tipostratamiento