import React from "react";
import styled from "styled-components";
import { Link , Outlet } from "react-router-dom";
import estetoscopio from "../img/estetoscopio.png"
const Nav = () => {
  return (
    <>
    <Bodydiv>
        <Nava>
            <Logo>Cancer
              <img src={estetoscopio} alt="" />
            </Logo>
          <Divnav>
            <li><Links to="/">Inicio</Links></li>
            <li><Links to="/Tipos_de_cancer">Tipos de Cancer</Links></li>
            <li><Links to="/Tratamientos">Tratamientos</Links></li>
            <li><Links to="/Efectos_Secundarios">Efectos Secundarios</Links></li>
            <li><Links to="/Contactanos">Contactanos</Links></li>
            <li><Linkss to="http://127.0.0.1:5174/login">Ingresar</Linkss></li>
          </Divnav>
        </Nava>
    </Bodydiv>
    <Outlet/>
</>
  );
};

export default Nav;

const Bodydiv = styled.div`
width:100%;
height:100%;
overflow:hidden;
`;
const Nava=styled.div`
width:100%;
height:12vh;
display:flex;
justify-content: space-around;
margin: 0 ;
align-items:center;
position:fixed;
z-index:200;
top:0;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
const Logo  = styled.div`
 font-size:1.2em;
 display:flex;
 justify-content:center;
 align-items:center;
 & img{
  height:35px;
  width:auto;
  margin :0;
  
 }

 &::first-letter{
    color:blue;
 font-size:1.5em;
 font-weight:bold;
 }
`;

const Divnav = styled.div`
 display:flex;
 flex-direction:row;
 list-style:none;
 gap:1em;

`;

const Links = styled(Link)`
     text-decoration:none;
    color:#000000;
    padding:0.5em 0 ;
    font-size:0.9em;
    transition: all; 
&:hover{
    border-bottom:solid 2px #127369;
}
`;
const Linkss = styled(Link)`
     text-decoration:none;
    color:#ffffff;
    padding:0.4em 1.5em ;
    background-color:#127369;
border-radius:1em;
transition: all 0.5s ease-in-out; 
&:hover{
    background-color:transparent; 
    color:#000000;

}
`;



