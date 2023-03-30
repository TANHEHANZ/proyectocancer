import styled, { keyframes } from 'styled-components'

import { Link , Outlet } from "react-router-dom";
import persona_a from "../../img/persona_a.png";
import Typewriter from 'typewriter-effect';

const HeaderInicio=()=> {
  return (
    <Header>
   <Img src={persona_a} alt="" />
    <Datos> <H1>
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
/>
</H1>
<P> Atención médica inteligente para el cáncer en Bolivia:Una plataforma de información confiable</P>
   <Div>
   <li><Linkss to="/Contactanos">Comunicate con nosotros</Linkss></li>
    <li><Linkss to="/Tratamientos">Tratamientos</Linkss></li>

   </Div>
    </Datos>
 </Header>
  )
}

export default HeaderInicio

// animacion blur
const animation = keyframes`
0% {
    transform: translateY(5em);
    transform:rotate(90deg);
  }
 50% {
    transform:translateY(10em);
  }
  100%{
    transform:translateY(5em);
    transform:rotate(90deg);
  }
`

const Header = styled.header`
width:100%;
height:100%;
display:flex;
flex-direction:row;
justify-content:center;
&::before{
content:"";
position:absolute;
width:8em;
height:8em;
background-color:#000;
transform:rotate(45deg);
left:20vh;

filter: blur(1.5px);
animation: ${animation} 5s linear infinite;
z-index:0;
transform:rotate(45deg);
}
&::after{
content:"";
position:absolute;
width:10em;
height:10em;
background-color:blue;
transform:rotate(45deg);
left:11vh;
filter: blur(3px);
animation: ${animation} 5s linear infinite;

z-index:1;
transform:rotate(45deg);
}
`;
const Img = styled.img`
width:20%;
display:flex;
justify-content:center;
align-items:center;
background-color:transparent;
z-index:2;

`;
const P = styled.div`
width:100%;
height:3em;
`;
const Datos = styled.div`
font-size:1em;
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
list-style:none;
margin:0 1em;


`;
const H1 = styled.h2`
width:100%;
height:5em;
font-size:2em;
display:flex;
justify-content:center;
align-items:center;
&::first-letter{
    color:blue;
    font-size:1.5em;
}
`;
export const Linkss = styled (Link)`
  text-decoration:none;
  color:#ffffff;
  font-size:1em;
  padding:0.5em 2em;
  background-color:blue;
  border-radius:1em;
&:hover{
    background-color:#05082c;
    color:#ffffff;
}

`;
const Div = styled.div`
display:flex;
width:100%;
flex-direction:row-reverse;
justify-content:center;
align-items:center;
gap:2em;

`;
