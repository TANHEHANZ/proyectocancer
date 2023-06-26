import React, { useEffect, useState } from 'react'
import { UseFech } from '../hooks/useFech'
import { useModal } from '../hooks/useModal'
import { Info,Div,Infohijo,Section } from './Centros';

import { setUsuarios , deleteusuarios} from '../services/Users';

import UsersForm from '../models/UsersForm';

const Ususarios = () => {

  const [usersactual,setUsersactual]=useState("");
  const{getApi, data:userr}=UseFech(setUsuarios);
  const { openModal, closeModal } = useModal(
    Object.keys(usersactual).length > 0
      ? "Editar Tipo usuarios"
      : "Agregar tipo usuarios",
    <UsersForm
      getApi={getApi}
      usersactual={usersactual}
       setUsersactual={setUsersactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
 
  useEffect(() => {
    if (Object.keys(usersactual).length > 0) {
      openModal();
    }
  }, [usersactual]);


  return (
    <Section>
     <Div>
     <section>
           <h1>Usuarios del sistema</h1>
           <button onClick={openModal}> nuevo</button>
         </section>
       <table>
         <thead>
           <tr>
             <th>Nº</th>
             <th>Nombre </th>
             <th>Email </th>
             <th>telefono</th>
             <th>Rol</th>
             <th> password</th>
           </tr>
         </thead>
        
         {userr
         
           .map((v, i) => (
             <tbody key={i}>
               <tr   onClick={() => {
                         setTratamiento(v);
                       }}>
                 <td>{i + 1}</td>
                 <td>{v.nombre}</td>
                 <td>{v.email}</td>
                 <td>{v.telefono}</td>
                 <td>{v.rol}</td>
                 <td>{v.password}</td>
                 <td>
                   <div>
                   
                     <button
                       onClick={() => {
                        deleteusuarios(v.id, getApi);
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

export default Ususarios
