import React from 'react'
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import ResultadosForm from "../models/ResultadosForm";
import { UseFech } from "../hooks/useFech";
import { deleteResultados, getResultados } from "../services/Resultados";
import styled from "styled-components";
import CantidadTipoR from '../Report/CantidadTipoResultados';
const Resultados = () => {
  const [resultadoactual, setResultadoactual] = useState({});
  const { getApi, data: resul} = UseFech(getResultados);
  const { openModal, closeModal } = useModal(
    Object.keys(resultadoactual).length > 0
      ? "Editar Resultados"
      : "Agregar Resultado",
    <ResultadosForm
      getApi={getApi}
      resultadoactual={resultadoactual}
      setResultadoactual={setResultadoactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(resultadoactual).length > 0) {
      openModal();
    }
  }, [resultadoactual]);
  return (
    <Section>

<article>
<aside>
<CantidadTipoR/>
</aside>

  <Infohijo>
  <div>
   <article>
     <h2>{resul.length}</h2>
   <p>Resultados</p>
   </article>
    <img src="src\img\paciente.png" alt="" />
  </div>
  <p>Cantidad de registros</p>
  </Infohijo>
      
</article>

        <Div>
        
          <section>
            <h1>Registro Resultados</h1>
            <button onClick={openModal}> nuevo</button>
            <button onClick={openModal}> Excel</button>
            <button onClick={openModal}> Pdf</button>
          </section>
          <table>
            <thead>
              <tr>
         
                <th>Nº</th>
                <th>paciente</th>
                <th>resultados</th>
                <th>Tipo Cancer</th>
                <th>descripcion muestra</th>
                <th>laboratorio</th>
                <th>fecha</th>
            
              </tr>
            </thead>
            {resul
              .filter((v) =>
                v.resultados.toLowerCase().includes(filtro.toLowerCase())
              )
              .map((v, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{v.nombre_paciente}</td>
                    <td>{v.resultados}</td>
                    <td>{v.nombre_tipo_cancer}</td>
                    <td>{v.descripcion_muestra}</td>
                    <td>{v.nombre_laboratorio}</td>
                    <td>{v.fecha}</td>
                    <td>
                      <div>
                        <button
                          onClick={() => {
                            setResultadoactual(v);
                          }}
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => {
                            deleteResultados(v.id, getApi);
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

export default Resultados

const Info = styled.article`
width:100%;
height:8em;
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:2em;
margin: 1em auto;
justify-content:center;

`;
const Infohijo = styled.section`
width:calc(80% / 4);
height:90%;
backdrop-filter: blur(12px) saturate(29%);
    -webkit-backdrop-filter: blur(12px) saturate(29%);
    background-color: rgb(59, 78, 87);
    border-radius: 18px;
    border: 1px solid rgba(209, 213, 219, 0.176);
    padding:1em;
 
    &:hover{
     transform:scale(1.02);
 
    }
& h2{
  color:#06ad78;
  font-weight:100;
}
& p{
  color:#bebebe;

  font-weight:100;
  font-size:0.8em;
}
    & article {
      display:flex;
      flex-direction:column;

    }
    & div{
      display:flex;
      flex-direction:row;
      justify-content: space-around;
      margin:0.2em 0;
      & img{
        height:35px;
        background-color:#c7c7c7;
        object-fit:cover;
        border-radius:50%;
        filter:invert(100%);
      }
    }
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 1em;
  & > article{
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:row-reverse;
 & aside{
  width:50%;
}

  }
 
`;

const Div = styled.div`
  width: 90%;
  height: 60vh;
  display: flex;
  margin:0 auto;
  flex-direction: column;
  border-radius:15px;
  border:solid 1px #fff2;
  
  & section{
display:flex;
flex-direction:row;
gap :1em;
margin:0.5em 1em 0 1em;
& > h1{
  font-size:0.9em;
  font-weight:100;
  color:#fff;
  text-transform:uppercase;
}
& > button {
   padding:0.2em 1em;
   color:#069266;
   border:solid 1px #069266;
   background-color:transparent;
   cursor: pointer;
  }
  }
 
  & table {
    margin: 1em auto;
    /* background-color: transparent; */
    width: 90%;
    background-color:rgb(59, 78, 87);
    height: auto;
    border-collapse: collapse;
   
    & button{
background-color:transparent;
border:solid 1px #09216f;
color:#fff;
margin:0 5px;
cursor: pointer;
padding:0.2em 1em;
&:nth-child(2){
border:solid 1px #6f0909;

}
&:hover{
  background-color:#09216f;
  &:nth-child(2){
background-color: #6f0909;
}
}
    }
    & th {
      font-size:1em;
     font-weight:100;
 
    }
    & td{
      color:#fff;
      font-weight:lighter;
      font-size:0.8em;
      padding:0.5em 0;
      text-align:center;
      &:nth-child(1){
padding:0 1.5em;
   }
    }
  
    & tr {
   border-top:solid 1px #fff2;
   border-bottom:solid 1px #fff2;
   
  &:hover{
  
        background-color:#069266;
        color:#fff;
      
  }
    }
    & thead {
     color:#069266;
     padding:1em 0;
     & tr {
      &:hover{
        background-color:transparent;
        color:#069266;
        font-weight:100;
      }
     }
    }

   
  }
`;


