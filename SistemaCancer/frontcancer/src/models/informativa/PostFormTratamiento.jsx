import React from 'react'
import {
    Divinput,
    Botonagregar,
    Container,
    Divboton,
    Divinputlabel,
    Input,
  } from "../DoctoresForm";

  import { useState, useEffect } from "react";
  import { posttratamietopost, updateposttratamiento } from "../../services/PostTratamientos";

const PostFormTratamiento = ({
    getApi,
    postactual,
    setPostactual,
    closeModal,
}) => {
    const [titulo, setTitulo] = useState("");
    const [descripcion,setDescripcion] = useState("");
    const [contenido, setContenido] = useState("");
    const [fecha_publicar, setFecha_publicar] = useState("");

    useEffect(() => {
      if(Object.keys(postactual).length > 0){
        setTitulo(postactual.titulo);
        setDescripcion(postactual.descripcion);
        setContenido(postactual.contenido);
        setFecha_publicar(postactual.fecha_publicar);
      }
      return () => {
        setPostactual({});
      }
    }, [postactual])
    
    const updatepost = (e) => {
      e.preventDefault();
      if (Object.keys(postactual).length > 0) {
        updateposttratamiento(
          {
          id: postactual.id,
          titulo:titulo,
          descripcion:descripcion,
          contenido:contenido,
          fecha_publicar:fecha_publicar,
      
          },
          () => {
            setTitulo("");
            setDescripcion("");
            setContenido("");
            setFecha_publicar("");
            closeModal();
            setPostactual({});
            getApi();
          }
        );
      } else {
        posttratamietopost(
            titulo,descripcion,contenido,fecha_publicar,
          () => {
            setTitulo("");
            setDescripcion("");
            setContenido("");
            setFecha_publicar("");
          getApi();
          closeModal();
          setPostactual({});

        });
      }
    };



  return (
    <Container>
    <div>
      <form>
        <Divinput>
          <Divinputlabel>
            <label>titulo del post:</label>
            <Input
              name="titulo"
              placeholder="titulo"
              type="text"
              required
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divinput>
          <Divinputlabel>
            <label>descripcion:</label>
            <Input
              name="descripcion"
              placeholder="descripcion"
              type="text"
              required
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
      
       
   
        <Divinput>
          <Divinputlabel>
            <label>contenido</label>
            <Input
              name="contenido"
              placeholder="contenido"
              type="text"
              required
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divinput>
          <Divinputlabel>
            <label>fecha_publicar:</label>
            <Input
              name="fecha_publicar"
              placeholder="fecha_publicar"
              type="date"
              required
              value={fecha_publicar}
              onChange={(e) => setFecha_publicar(e.target.value)}
            />
          </Divinputlabel>
        </Divinput>
        <Divboton>
          <Botonagregar onClick={(e) => updatepost(e)}>
            {Object.keys(postactual).length > 0 ? "Editar" : "Agregar"}
          </Botonagregar>
        </Divboton>
      </form>
    </div>
  </Container>
  )
}

export default PostFormTratamiento