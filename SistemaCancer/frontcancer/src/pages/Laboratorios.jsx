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
    Object.keys(laboratorioactual).lengTh > 0
      ? "Editar pacientes"
      : "Agregar Pacientes",
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
    if (Object.keys(laboratorioactual).lengTh > 0) {
      openModal();
    }
  }, [laboratorioactual]);
  const [notificaciones, setNotificaciones] = useState([]);
  useEffect(() => {
    obtenerNotificaciones();
  }, []);
  const obtenerNotificaciones = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/laboratorio/pacientes-no-notificados');
      const data = await response.json();
      setNotificaciones(data);
    } catch (error) {
      console.error('Error al obtener las notificaciones:', error);
    }
  };
  return (
    <Section>
       <div>
      <h2>Notificaciones del Laboratorio</h2>
      <ul>
        {notificaciones.map((paciente) => (
          <li key={paciente.id}>{paciente.nombre}</li>
        ))}
      </ul>
    </div>
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
             <th>id_doctores</th>
            
           </tr>
         </thead>
         {lab
           .filter((v) =>
             v.nombre.toLowerCase().includes(filtro.toLowerCase())
           )
           .map((v, i) => (
             <tbody key={i}>
               <tr>
                 <td>{i + 1}</td>
                 <td>{v.nombre}</td>
                 <td>{v.ubicacion}</td>
                 <td>{v.id_doctores}</td>
                 <td>
                   <div>
                     <button
                       onClick={() => {
                         setLaboratorioactual(v);
                       }}
                     >
                       Editar
                     </button>
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
