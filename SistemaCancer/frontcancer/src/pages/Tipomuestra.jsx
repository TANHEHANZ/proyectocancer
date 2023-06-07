import React, { useEffect, useState } from 'react'
import { UseFech } from '../hooks/useFech'
import { useModal } from '../hooks/useModal'

import { Info,Div,Infohijo,Section } from './Centros';
import TiposMuestrasForm from '../models/TiposMuestrasForm'
import { getTipomuestras ,deleteTipomuestras} from '../services/Tipomuestras'


const Tipomuestra = () => {
  const [muestraactual, setMuestraactual] = useState("");
  const{getApi, data:tip}=UseFech(getTipomuestras);
  const { openModal, closeModal } = useModal(
    Object.keys(muestraactual).length > 0
      ? "Editar Tipo Muestras"
      : "Agregar Tipo Muestras",
    <TiposMuestrasForm
      getApi={getApi}
      muestraactual={muestraactual}
      setMuestraactual={setMuestraactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(muestraactual).length > 0) {
      openModal();
    }
  }, [muestraactual]);
  return (
    <Section>
    <Info>
 <Infohijo>
 <div>
  <article>
    <h2>{tip.length}</h2>
  <p>Tipos Muestra</p>
  </article>
   <img src="src\img\paciente.png" alt="" />
 </div>
 <p>Lorem ipsum dolor sit amet.</p>
 </Infohijo>
   </Info>
     <Div>
     <section>
           <h1>Registro Tipos muestra</h1>
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
               <tr   onClick={() => {
                         setMuestraactual(v);
                       }}>
                 <td>{i + 1}</td>
                 <td>{v.nombre}</td>
                 <td>
                   <div>
                     <button
                       onClick={() => {
                        deleteTipomuestras(v.id, getApi);
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

export default Tipomuestra