import React, { useEffect, useState } from 'react';
import { UseFech } from '../hooks/useFech';
import styled from 'styled-components';
import { getMunicipio ,deleteMunicipios} from '../services/Municipios';
import { Info,Div,Infohijo,Section } from './Centros';
import MunicipiosForm from '../models/MunicipiosForm';
import { useModal } from '../hooks/useModal';

const Municipios = () => {
  const [municipiosactual, setMunicipiosactual]=useState("");
  const{getApi, data:mun}=UseFech(getMunicipio);
  const { openModal, closeModal } = useModal(
    Object.keys(municipiosactual).lengTh > 0
      ? "Editar Municipios"
      : "Agregar Municipios",
    <MunicipiosForm
      getApi={getApi}
      municipiosactual={municipiosactual}
      setMunicipiosactual={setMunicipiosactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(municipiosactual).lengTh > 0) {
      openModal();
    }
  }, [municipiosactual]);

  return (
    <Section>
    <Info>
 <Infohijo>
 <div>
  <article>
    <h2>{mun.length}</h2>
  <p>muicipios</p>
  </article>
   <img src="src\img\paciente.png" alt="" />
 </div>
 <p>Lorem ipsum dolor sit amet.</p>
 </Infohijo>
   </Info>
     <Div>
     <section>
           <h1>Registro Municipios</h1>
           <button onClick={openModal}> nuevo</button>
           <button onClick={openModal}> Excel</button>
           <button onClick={openModal}> Pdf</button>
         </section>
       <table>
         <thead>
           <tr>
             <th>Nº</th>
             <th>Nombre</th>
             
             <th>id_provincias</th>
            
           </tr>
         </thead>
         {mun
           .filter((v) =>
             v.nombre.toLowerCase().includes(filtro.toLowerCase())
           )
           .map((v, i) => (
             <tbody key={i}>
               <tr>
             
                 <td>{i + 1}</td>
                 <td>{v.nombre}</td>
                 <td>{v.id_provincias}</td>
                 <td>
                   <div>
                     <button
                       onClick={() => {
                         setMunicipiosactual(v);
                       }}
                     >
                       Editar
                     </button>
                     <button
                       onClick={() => {
                         deleteMunicipios(v.id, getApi);
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

export default Municipios
