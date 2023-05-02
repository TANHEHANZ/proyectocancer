import styled, { keyframes } from "styled-components";
import "../../../../index.css";
import { Link, Outlet } from "react-router-dom";
import persona_a from "../../img/doctore.jpg";
import Typewriter from "typewriter-effect";

import doctoresun from "../../img/doctoresun.png";
const HeaderInicio = () => {
  return (
    <Header>
      <Img>
        <img src={persona_a} alt="" />
      </Img>

      <Datos>
        {" "}
        <H1>
          <Typewriter
            options={{
              strings: [
                " Cáncer en Bolivia Plataforma informativa para pacientes y médicos",
                "Una plataforma de información confiable",
                "Informate!!!",
              ],
              autoStart: true,
              loop: true,
            }}
            className="typewriter"
          />
        </H1>
        <P>
          {" "}
          Atención médica inteligente para el cáncer en Bolivia:Una plataforma
          de información confiable
        </P>
        <Div>
          <li>
            <Linkss to="/Contactanos">Comunicate con nosotros</Linkss>
          </li>
          <li>
            <Linkss to="/Tratamientos">Tratamientos</Linkss>
          </li>
        </Div>
      </Datos>
    </Header>
  );
};

export default HeaderInicio;

// animacion blur
const animation = keyframes`
0% {
  Top:50%;
  width:0;
   height:0;
   z-index:1;
  }
 50% {
  Top:-1.5em;
  width:24em;
   height:24em;
  }
  60%{
    width:25em;
    height:24em;
    
  }
  70%{
    opacity:50%;
    width:25.5em;
    height:25em;
  }
  100%{
    opacity:0%;
    width:26em;
    height:25.5em;
   
  }
`;

const Header = styled.header`
margin:12vh 0 2em 8em;
  width: 100;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
 
`;
const Img = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  
  &::before {
    position: absolute;
    content: "";
    width: 22em;
    height: 22em;
    border-radius: 50%;
    transform: translateX(2.2em);
    box-shadow: 0 3px 10px #444444, inset 0 3px 8px #c3c3c3,
      inset 0 3px 8px #444444, inset 0 3px 10px #444444;
      z-index:-1;
  animation: ${animation} 5s ease-out infinite;
     
  }
  & img{
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    filter: drop-shadow(0px 2px 5px #505050);
    border-radius: 50%;
    margin: 1em 0 0 5em;
   z-index:100;
  }
`;
const P = styled.div`
  width: 100%;
  height: 3em;
`;
const Datos = styled.div`
  font-size: 1em;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  margin: 0 1em;
`;
const H1 = styled.div`
  width: 100%;
  height: 5em;
  font-size: 2em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
`;

export const Linkss = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1em;
  padding: 0.5em 1.5em;
  background-color: #127369;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color:#4C5958;
    color: #000000;
  }
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 2em;
  margin: 1em 0;
`;
