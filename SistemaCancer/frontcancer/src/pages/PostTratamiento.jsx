import React, { useEffect, useState } from 'react'
import { setPosttratamientos,deletePosttratamiento } from "../services/PostTratamientos";
import { UseFech } from "../hooks/useFech";
import { Info,Div,Infohijo,Section } from './Centros';
import { useModal } from '../hooks/useModal';
import PostFormTratamiento from '../models/informativa/PostFormTratamiento';
const PostTratamiento = () => {
    const [postactual, setPostactual] = useState({});
  const { getApi, data: postear } = UseFech(setPosttratamientos);
  const { openModal, closeModal } = useModal(
    "Agregar un nuevo post",
    <PostFormTratamiento
      getApi={getApi}
      postactual={postactual}
      setPostactual={setPostactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(postactual).length > 0) {
      openModal();
    }
  }, [postactual]);


  return (
    <Section>

     <Div>
     <section>
           <h1>Registro de cada post</h1>
           <button onClick={openModal}> nuevo</button>
     
         </section>
       <table>
         <thead>
           <tr>
             <th>Nº</th>
             <th>Tutulo</th>
             <th>Descripcion</th>

             <th>Contenido</th>
             <th>fecha a Publicar</th>
             <th>fecha cracion de post</th>
             <th>fecha actualizado post</th>
             <th>acciones</th>
           </tr>
         </thead>
        
         {postear
           .filter((v) =>
             v.titulo.toLowerCase().includes(filtro.toLowerCase())
           )
           .map((v, i) => (
             <tbody key={i}>
               <tr   onClick={() => {
                         setPostactual(v);
                       }}>
                 <td>{i + 1}</td>
                 <td>{v.titulo}</td>
                 <td>{v.descripcion}</td>
                 <td>{v.contenido}</td>
                 <td>{v.fecha_publicar}</td>
                 <td>{v.created_at}</td>
                 <td>{v.updated_at}</td>
                
                 <td>
                   <div>
                   
                     <button
                       onClick={() => {
                        deletePosttratamiento(v.id, getApi);
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

export default PostTratamiento