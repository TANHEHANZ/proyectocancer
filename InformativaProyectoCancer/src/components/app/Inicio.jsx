import React from "react";
import styled from "styled-components";
import Tratamientos from "../app/CompInicio/Tratamientos";
import HeaderInicio from "../app/CompInicio/HeaderInicio";
import Footer from "./Footer";
import doc1 from "../img/doctoresun.png";

const Inicio = () => {
  return (
    <>
      <HeaderInicio />
  
      <Section>
        <Div1>
          <Contenido>
            <H2>Tituo</H2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolorum porro accusamus, perferendis voluptate quisquam aperiam eveniet </p>
          </Contenido>
          <Contenido>
            <H2>Titulo</H2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolorum porro accusamus, perferendis voluptate quisquam aperiam eveniet </p>
          </Contenido>
          <Contenido>
            <H2>Titulo</H2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolorum porro accusamus, perferendis voluptate quisquam aperiam eveniet </p>
          </Contenido>
          <Contenido>
            <H2>Titulo</H2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolorum porro accusamus, perferendis voluptate quisquam aperiam eveniet </p>
          </Contenido>
        </Div1>
        <Div2><Img src={doc1} alt="" /></Div2>
      </Section>
      <Tratamientos/>
<Footer/>
    </>
  );
};

export default Inicio;



const Section = styled.section`
  width: 90%;
  height: 50vh;
  display: flex;
  margin: 2em auto;
  gap: 1em;
  flex-direction:row;
`;
const Div1 = styled.div`
  width: 130%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  gap:1em;
`;

const Contenido = styled.div`
  width: 45%;
  height: 45%;
  text-align:justify;
  padding:0.5em;
 display:flex;
 flex-direction:column;
 gap:0.5em;
 overflow:hidden;

`;
const H2 = styled.h2`
  font-size:1.5em;
  
::first-letter{
  color:blue;
  font-size:1.5em;
}
`;

const Div2 = styled.div`
  width: 70%;
  height: 100%;
  background-color: #051940;
`;
const Img = styled.img`
width:100%;
height:auto;
`;