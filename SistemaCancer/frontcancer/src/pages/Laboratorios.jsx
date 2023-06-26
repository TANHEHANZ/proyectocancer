import React from 'react'
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import LaboratoriosForm from "../models/LaboratoriosForm";
import { UseFech } from "../hooks/useFech";
import { deleteLaboratorio, getLaboratotio } from "../services/Laboratorios";
import { Info,Div,Infohijo,Section } from './Centros';
const Laboratorios = () => {
  const [laboratorioactual, setLaboratorioactual] = useState({});
  const { getApi, data: lab } = UseFech(getLaboratotio);
  const { openModal, closeModal } = useModal(
    Object.keys(laboratorioactual).length > 0
      ? "Editar registro de laboratorio"
      : "Agregar registro de laboratorio",
    <LaboratoriosForm
      getApi={getApi}
      laboratorioactual={laboratorioactual}
      setLaboratorioactual={setLaboratorioactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(laboratorioactual).length > 0) {
      openModal();
    }
  }, [laboratorioactual]);


  return (
    <Section>
       {/* <div>
      <h2>Notificaciones del Laboratorio</h2>
      <ul>
        {notificaciones.map((paciente) => (
          <li key={paciente.id}>{paciente.nombre}</li>
        ))}
      </ul>
    </div> */}
    <Info>
 <Infohijo>
 <div>
  <article>
    <h2>{lab.length}</h2>
  <p>Laboratorio</p>
  </article>
   <img src="src\img\paciente.png" alt="" />
 </div>
 <p>Lorem ipsum dolor sit amet.</p>
 </Infohijo>
   </Info>
     <Div>
     <section>
           <h1>Registro Laboratorio</h1>
           <button onClick={openModal}> nuevo</button>
           <button onClick={openModal}> Excel</button>
           <button onClick={openModal}> Pdf</button>
         </section>
       <table>
         <thead>
           <tr>
             <th>Nº</th>
             <th>Nombre</th>
             <th>ubicacion</th>
             <th>contacto</th>
             <th>email</th>
           </tr>
         </thead>
         {lab
           .filter((v) =>
             v.nombre.toLowerCase().includes(filtro.toLowerCase())
           )
           .map((v, i) => (
             <tbody key={i}>
               <tr   onClick={() => {
                         setLaboratorioactual(v);
                       }}>
                 <td>{i + 1}</td>
                 <td>{v.nombre}</td>
                 <td>{v.ubicacion}</td>
                 <td>{v.contacto}</td>
                 <td>{v.email}</td>
                 <td>
                   <div>
                     <button
                       onClick={() => {
                         deleteLaboratorio(v.id, getApi);
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

export default Laboratorios
