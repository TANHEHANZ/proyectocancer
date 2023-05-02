import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminComponent = () => {
  const [expandir, setExpandir] = useState(false);
  const [expandir1, setExpandir1] = useState(false);
  const [expandir2, setExpandir2] = useState(false);

  return (
    <Master>
      <section>
        <h1>Cancer</h1>
        <img src="src\img\estetoscopio.png" alt="img" />
      </section>
      <h2>Dashboard</h2>
      <Linkes to="/home">
        <img src="src\img\casa.png" alt="" /> Home
      </Linkes>
      <h2>Gestion de pacientes</h2>
      <Divbotton onClick={() => setExpandir(!expandir)}>
        <section>
          <img src="" alt="" /> Pacientes{" "}
          <img src="src\img\abajo.png" alt="img" />
        </section>
        {expandir && (
          <article>
            <Linkes to="/pacientes">
              <img src="" alt="" /> Pacientes
            </Linkes>
            <Linkes to="/Resultados">
              <img src="" alt="" />
              resultados
            </Linkes>
            <Linkes to="/seguimientos">
              <img src="" alt="" />
              Seguimientos
            </Linkes>
            <Linkes to="/muestras">
        <img src="" alt="" />
        Muestras
      </Linkes>
          </article>
        )}
      </Divbotton>
      <h2>Registro de Doctores</h2>
      <Divbotton onClick={() => setExpandir1(!expandir1)}>
        <section>
          <img src="" alt="" /> R - Doctores
          <img src="src\img\abajo.png" alt="img" />
        </section>
        {expandir1 && (
          <article>
             <Linkes to="/doctores">
        <img src="" alt="" /> Doctores
      </Linkes>
      <Linkes to="/especialidades">
        <img src="" alt="" />
        Especialidades
      </Linkes>
          </article>
          
        )}
      </Divbotton>
     
      <h2>Registros </h2>
      <Divbotton onClick={() => setExpandir2(!expandir2)}>
        <section>
          <img src="" alt="" /> R - Generales
          <img src="src\img\abajo.png" alt="img" />
        </section>
        {expandir2 && (
          <article>
      <Linkes to="/laboratorios">
        <img src="" alt="" />
        Laboratorios
      </Linkes>
      <Linkes to="/centros">
        <img src="" alt="" />
        Centros
      </Linkes>
      <Linkes to="/municipios">
        <img src="" alt="" />
        Municipios
      </Linkes>
      <Linkes to="/tiposCancer">
        <img src="" alt="" />
        Tipos de cancer
      </Linkes>
          </article>
          
        )}
      </Divbotton>
      <h2>Registro - Usuario </h2>
      <Linkes to="/usuarios">
        <img src="src\img\user.png" alt="" />
        Usuarios
      </Linkes>

      <h2>Gestionar Pagina</h2>
      <Divbotton onClick={() => setExpandir1(!expandir1)}>
        <section>
          <img src="" alt="" /> Pagina Informativa
          <img src="src\img\abajo.png" alt="img" />
        </section>
        {expandir1 && (
          <article>
             <Linkes to="/doctores">
        <img src="" alt="" /> Doctores
      </Linkes>
      <Linkes to="/especialidades">
        <img src="" alt="" />
        Especialidades
      </Linkes>
          </article>
          
        )}
      </Divbotton>
      <h2></h2>

    </Master>
  );
};

export default AdminComponent;

export const Master = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  margin-right: 5%;
  background-color: rgb(59, 78, 87);
  & h2 {
    font-weight: 100;
    font-size: 0.7em;
    text-transform: uppercase;
    color: #fff;
    padding: 0 1.5em;
    background-color: transparent;
    margin:1em 0;
  }
  & > section {
    height: 12vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    & h1 {
      color: #fff;
      text-align: center;
      font-weight: 100;
      background-color: transparent;
    }
    & img {
      width: 2em;
      filter: invert(100%);
      background-color: transparent;
    }
  }
`;
export const Linkes = styled(Link)`
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  color: #069266;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height: 3em;
  justify-content: flex-start;
  padding-left:2em;
gap:1em;
 
  &:hover {
    color: #fff;
    background-color: rgb(48, 65, 75);

  }
  & img{
    width:30px;
    filter:invert(100%) ;
  }
`;

export const Divbotton = styled.article`
   color: #069266;
  font-size:0.9em;
  & article {

    width: 100%;
    background-color: rgb(48, 65, 75);
    position: relative;
    &::before {
      position: absolute;
      content: "";
      background-color: #127369;
      width: 2px;
      height: 100%;
      left: 2em;
    }
  }
  & section {
    display: flex;
    gap: 1em;

    & img {
    filter:invert(100%) ;
      width: 1.3em;
    }
  }
`;
