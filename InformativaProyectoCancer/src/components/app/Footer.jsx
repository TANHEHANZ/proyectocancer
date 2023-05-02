import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import estetoscopio from "../img/estetoscopio.png"

function Footer() {
  return (
    <Footera>
      <section> <h2>cancer</h2>
      <img src={estetoscopio} alt="" />

        <p></p>
      </section>
      <article>
        <div>
          <li>
            <h4>Explora</h4>

            <Links to="/">Inicio</Links>
          </li>
          <li>
            <Links to="/Tipos_de_cancer">Tipos de Cancer</Links>
          </li>
          <li>
            <Links to="/Tratamientos">Tratamientos</Links>
          </li>
          <li>
            <Links to="/Efectos_Secundarios">Efectos Secundarios</Links>
          </li>
          <li>
            <Links to="/Contactanos">Contactanos</Links>
          </li>
        </div>
        <div>
          <h4>Servicios</h4>
          <p>Desarrollo de pruvas Especializadas</p>
          <p>Analisis en laboratorios</p>
          <p>Diagnostico </p>
          <p>Seguimiento de casos</p>
          <p>Equipo Expecializado</p>
        </div>
        <div>
          <h4>Eventos</h4>
          <Section>
            <h4>Conéctate con nosotros</h4>{" "}
            <div>
              <img src="" alt="iconos" />
              <img src="" alt="iconos" />
              <img src="" alt="iconos" />
              <img src="" alt="iconos" />
            </div>
          </Section>
        </div>
      </article>
    </Footera>
  );
}

export default Footer;

const Footera = styled.footer`
  width: 100%;
  height: 50vh;
  background-color: #10403b ;
  list-style:none;
  text-decoration:none;
  display:flex;
  flex-direction:row;
  overflow:hidden;
  & > section{
    width:25%;
    display:flex;
  flex-direction:row;
  overflow:hidden;
  justify-content:center;
  align-items:center;
  background-color:transparent;
 & h2{
  background-color:transparent;
  font-size:1.5em;
  text-transform:uppercase;
  color:#fff;
  transition:all 1s linear;
  &::first-letter{
  font-size:2em;
  }
  &:hover{
    color:#09935c;
  }
 }
& img{
  width: 50px;
  height:auto;
  background-color:transparent;
  filter:invert(100%)
}
  }
  & p{
  background-color:transparent;
  font-size:0.9em;
color:#fff;
margin:1em 0;
}
& article{
  width:70%;
  height:100%;
  background-color:transparent;
  display:flex;
  justify-content:space-around;
  align-items:center;
  & div{
    background-color:transparent;
& h4{
  background-color:transparent;
  font-size:1em;
  text-transform:uppercase;
  color:#fff;
  transition:all 1s linear;
  font-weight:100;
  &::first-letter{
  font-size:1.5em;
  }
  &:hover{
    color:#09935c;
  }

}

& li{
  background-color:transparent;
  padding:0.5em 0;
  
}
  }
}
`;
const Links = styled(Link)`
text-decoration:none;
background-color:transparent;
color:#fff;
font-size:0.9em;
text-transform:uppercase;
transition:all 1.5s ease;
&:hover{
    border-bottom:solid 2px #127369;
}

`;

const Section = styled.section`
background-color:transparent;
color:#fff;
font-size:0.9em;

& div{
  display:flex;
  flex-direction:row;
  gap:1em;
  & img{
  width:40px;
  height:40px;
  border-radius:50%;

}
}

`;