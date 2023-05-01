
import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

const AdminComponent = () => {
  return (
    <Master>
    <Linkes to="/home">
    <img src="" alt="" /> Home
  </Linkes>
  <Linkes to="/pacientes">
    <img src="" alt="" /> Pacientes
  </Linkes>
  <Linkes to="/doctores">
    <img src="" alt="" /> Doctores
  </Linkes>
  <Linkes to="/especialidades">
    <img src="" alt="" />Especialidades
  </Linkes>
  <Linkes to="/laboratorios">
    <img src="" alt="" />Laboratorios
  </Linkes>
  <Linkes to="/centros">
    <img src="" alt="" />Centros
  </Linkes>
  <Linkes to="/municipios">
    <img src="" alt="" />Municipios
  </Linkes>
  <Linkes to="/Resultados">
    <img src="" alt="" />resultados
  </Linkes>
  <Linkes to="/muestras">
    <img src="" alt="" />Muestras
  </Linkes>
  <Linkes to="/tiposCancer">
    <img src="" alt="" />Tipos de cancer
  </Linkes>
  <Linkes to="/seguimientos">
    <img src="" alt="" />Seguimientos
  </Linkes>
  <Linkes to="/usuarios">
    <img src="" alt="" />Usuarios
  </Linkes>
 </Master>
  )
}

export default AdminComponent
export const Master = styled.nav`
  display: flex;
  flex-direction: column;
  gap:1em;
  height:100%;
  & h1{
    color:#fff;
    text-align:center;
  }

`;
export const Linkes = styled(Link)`
  background: #fff;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height:3em;
  justify-content:center;
  box-shadow:0 2px 6px 5px #0005;
  :first-child{
    margin:1em 0 0 0;
  }
  &:hover {
    background: #fff;
    color: rgb(0, 156, 255);
    border-radius: 0px -20px 10px 0px;
    border-left: solid 0.5em blue;
  
  }
`;