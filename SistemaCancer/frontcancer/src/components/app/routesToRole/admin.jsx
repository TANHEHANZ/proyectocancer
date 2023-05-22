import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminComponent = () => {
  const [expandir, setExpandir] = useState(false);
  const [expandir1, setExpandir1] = useState(false);
  const [expandir2, setExpandir2] = useState(false);

  return (
    <Master>
      <article>
        <h1>Cancer</h1>
        <img src="src\img\estetoscopio.png" alt="img" />
      </article>
  <section>
  <h2>Dashboard</h2>
      <Linkes to="/home">
        
        <img src="src\img\casa.png" alt="" /> Home
      </Linkes>
      <h2>Gestion de pacientes</h2>
      <Divbotton onClick={() => setExpandir(!expandir)}>
        <section>
          <img src="src\img\paciente.png" alt="" />
          Pacientes
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
            <Linkes to="/derivaciones">
              <img src="" alt="" />
            Derivaciones
            </Linkes>
            <Linkes to="/Examen">
              <img src="" alt="" />
            Examen
            </Linkes>
            <Linkes to="/Tratamiento">
              <img src="" alt="" />
            Tratamiento
            </Linkes>
            <Linkes to="/visitas">
              <img src="" alt="" />
            Visitas
            </Linkes>
          </article>
        )}
      </Divbotton>
      <h2>Registro de Personal</h2>
      
      <Divbotton onClick={() => setExpandir1(!expandir1)}>
        <section>
          <img src="src\img\paciente.png" alt="" />
          R - Doctores
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
            <Linkes to="/Enfermeras">
              <img src="" alt="" /> Enfermeras
            </Linkes>
          </article>
        )}
      </Divbotton>

      <h2>Registros </h2>
      <Divbotton onClick={() => setExpandir2(!expandir2)}>
        <section>
          <img src="src\img\paciente.png" alt="" />
          R - Generales
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
           
            <Linkes to="/tiposCancer">
              <img src="" alt="" />
              Tipos de cancer
            </Linkes>
            <Linkes to="/tiposexamen">
              <img src="" alt="" />
              Tipos de Examen
            </Linkes>
            <Linkes to="/tipomuestra">
              <img src="" alt="" />
              Tipos de muestra
            </Linkes>
            <Linkes to="/tipostratamiento">
              <img src="" alt="" />
              Tipos de tratamiento
            </Linkes>
           
          </article>
        )}
      </Divbotton>
     

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
  </section>
   <div>
   <h2>Registro  Usuario </h2>
      <Linkes to="/usuarios">
        <img src="src\img\user.png" alt="" />
        Usuarios
      </Linkes>
   </div>
    </Master>
  );
};

export default AdminComponent;

export const Master = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  background-color: rgb(59, 78, 87);
  & > div{
    display:flex;
    justify-content:center;
  background-color:#187b61;
  width:100%;
  height:100%;
  color: #fff;
  padding:3em 2em;
  & img {
    width:3em;
  }
  & h2{
    padding:0 0 0 4em;
  }
  }
  & > section{
width:100%;
height:60vh;
overflow-y:scroll;
  }
  & h2 {
    font-weight: 100;
    font-size: 0.7em;
    text-transform: uppercase;
    color: #fff;
    padding: 0 1.5em;
    background-color: transparent;
    margin: 1em 1.5em;
  }
  & > article {
    height: auto;
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
      padding:0.5em 0 1em 0em;

    }
    & img {
      width: 2em;
      padding:2em 0;

      filter: invert(100%);
      background-color: transparent;
    }
  }
`;
export const Linkes = styled(Link)`
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  color: #02d08f;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  padding:  0.8em 3.8em ;
  gap: 1em;

  &:hover {
    color: #fff;
    background-color: rgb(48, 65, 75);
    &::before{
      background-color: #fff;
    }
  }
  & img {
    width: 25px;
    filter: invert(100%);
  }
  &::before {
      position: absolute;
      content: "";
      background-color: #127369;
      width: 10px;
      height:10px;
      left: 1.80em;
      transform:rotate(45deg);
    }
`;

export const Divbotton = styled.div`
  color: #02d08f;
  font-size: 0.9em;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column; 
  padding-left:3.6em;
  & article {
    width: 100%;
    position: relative;
    margin-top:1em;
    &::before {
      position: absolute;
      content: "";
      background-color: #127369;
      width: 2px;
      height: 95%;
      left: 2em;
    }
  }
  & section {
    display: flex;
    gap: 1em;
    
    & img {
      filter: invert(100%);
      width: 1.3em;
    }
  }
`;
