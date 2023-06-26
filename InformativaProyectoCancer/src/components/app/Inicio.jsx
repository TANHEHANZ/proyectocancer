import React from "react";
import styled from "styled-components";
import Tratamientos from "../app/CompInicio/Tratamientos";
import HeaderInicio from "../app/CompInicio/HeaderInicio";
import Footer from "./Footer";
import cam from "../img/camilla.jpg";
import Cars from "./CompInicio/Cars";

const Inicio = () => {
  return (
    <Contenido>
      <HeaderInicio />
      <Cars />
      <h3>Tratamiento </h3>

      <Section>
        <Div1>
          <article>
            <h3>Cirugía </h3>
            <p>
              La cirugía es uno de los tratamientos más comunes para el cáncer
              en Bolivia. Consiste en la extirpación del tumor y, en algunos
              casos, de tejidos circundantes afectados. Los cirujanos
              oncológicos llevan a cabo diferentes procedimientos.
            </p>
          </article>
          <article>
            <h3>Radioterapia</h3>
            <p>
              La radioterapia utiliza radiación de alta energía para destruir
              las células cancerosas y reducir el tamaño de los tumores. En
              Bolivia, se encuentran disponibles instalaciones de radioterapia.
            </p>
          </article>
          <article>
            <h3>Quimioterapia</h3>
            <p>
              La quimioterapia utiliza medicamentos para destruir o frenar el
              crecimiento de las células cancerosas en el cuerpo. Estos
              medicamentos se administran por vía oral o a través de una vena
              (intravenosa).
            </p>
          </article>
          <article>
            <h3>Terapias dirigidas y terapia hormonal</h3>
            <p>
              Estas terapias se utilizan para tratar ciertos tipos de cáncer que
              dependen de ciertas moléculas o hormonas para crecer. Las terapias
              dirigidas bloquean las señales de el crecimiento
            </p>
          </article>
        </Div1>
        <img src={cam} alt="" />
      </Section>
      <Tratamientos />
      <Footer />
    </Contenido>
  );
};

export default Inicio;

const Contenido = styled.article`
  & > h3 {
    margin: 0 4em;
    color: #127369;
    text-transform: uppercase;
    font-weight: 200;
    border-left: solid 2px #127369;
    padding: 0 1em;
  }
`;

const Section = styled.section`
  width: 90%;
  height: 50vh;
  display: flex;
  margin: 3em auto;
  gap: 1em;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & img {
    width: 40%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }
`;
const Div1 = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1em;
  & article {
    width: calc(90% / 2);
    height: 12em;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: #127369;
    & h3 {
      padding: 0.8em;
      color: #127369;
      text-transform: uppercase;
      font-weight: 200;
    }
    & p {
      padding: 0 1em;
    }
  }
`;
