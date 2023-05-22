import React, { useEffect, useState } from 'react'
import { UseFech } from '../hooks/useFech'
import { getTiposcancer, deleteTiposcancer } from '../services/Tiposcancer'
import { useModal } from '../hooks/useModal'
import TiposcancerForm from '../models/TiposcancerForm'
import { Info,Div,Infohijo,Section } from './Centros';

const Tipostratamiento = () => {
  const [tiposcancersactual, setTiposcancersactual]=useState("");
  const{getApi, data:tip}=UseFech(getTiposcancer);
  const { openModal, closeModal } = useModal(
    Object.keys(tiposcancersactual).lengTh > 0
      ? "Editar Municipios"
      : "Agregar Municipios",
    <TiposcancerForm
      getApi={getApi}
      tiposcancersactual={tiposcancersactual}
      setTiposcancersactual={setTiposcancersactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(tiposcancersactual).lengTh > 0) {
      openModal();
    }
  }, [tiposcancersactual]);
  return (
    <Section>
    <Info>
 <Infohijo>
 <div>
  <article>
    <h2>{tip.length}</h2>
  <p>Tipos Cancer</p>
  </article>
   <img src="src\img\paciente.png" alt="" />
 </div>
 <p>Lorem ipsum dolor sit amet.</p>
 </Infohijo>
   </Info>
     <Div>
     <section>
           <h1>Registro Tipos Cancer</h1>
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
         {tip
           .filter((v) =>
             v.nombre.toLowerCase().includes(filtro.toLowerCase())
           )
           .map((v, i) => (
             <tbody key={i}>
               <tr>
             
                 <td>{i + 1}</td>
                 <td>{v.nombre}</td>
                
                 <td>
                   <div>
                     <button
                       onClick={() => {
                         setTiposcancersactual(v);
                       }}
                     >
                       Editar
                     </button>
                     <button
                       onClick={() => {
                         deleteTiposcancer(v.id, getApi);
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