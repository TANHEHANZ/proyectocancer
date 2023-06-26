import React from "react";
import styled from "styled-components";
import lab from "../../img/lab.png";
import salud from "../../img/salud.png";
import medicina from "../../img/medicina.png";
import age from "../../img/agenda.png";
const Cars = () => {
  return (
    <>
      <Cars1>
        <section>
          <img src={medicina} alt="icono" />
          <h1>Medicina</h1>
          <p>
            En Bolivia, existen clínicas privadas que ofrecen servicios médicos
            especializados y atención de alta calidad a aquellos que pueden
            costearlo. Estas clínicas privadas suelen contar con instalaciones
            modernas, equipos médicos avanzados y profesionales de la salud
            altamente capacitados.
          </p>
        </section>
        <section>
          <img src={salud} alt="icono" />
          <h1>Centros de Salud</h1>
          <p>
            Bolivia cuenta con una red de centros de salud que brindan atención
            médica primaria a la población en diferentes localidades del país.
            Estos centros pueden variar en términos de infraestructura y
            servicios ofrecidos, desde puestos de salud en áreas rurales hasta
            centros de salud más completos en zonas urbanas.
          </p>
        </section>
        <section>
          <img src={lab} alt="icono" />
          <h1>Laboratorio</h1>
          <p>
            En Bolivia, existen laboratorios médicos y clínicos que desempeñan
            un papel importante en el diagnóstico y seguimiento de enfermedades.
            Estos laboratorios realizan pruebas y análisis clínicos, como
            análisis de sangre, orina, cultivos bacterianos, pruebas de
            imagenología y otros estudios necesarios .
          </p>
        </section>
        <section>
          <img src={age} alt="icono" />
          <h1>Programa</h1>
          <p>
            En el ámbito de la salud, se implementan programas en Bolivia para
            abordar diversas problemáticas y promover el bienestar de la
            población. Estos programas pueden incluir campañas de vacunación,
            prevención de enfermedades, promoción de estilos de vida saludables,
            atención materno-infantil, control de enfermedades crónicas, entre
            otros.
          </p>
        </section>
      </Cars1>
    </>
  );
};

export default Cars;
const Cars1 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #127369;
  gap: 1em;
  margin: 1em 0;
  & section {
    width: calc(65% / 4);
    height: 40vh;
    backdrop-filter: blur(12px) saturate(29%);
    -webkit-backdrop-filter: blur(12px) saturate(29%);
    background-color: #16877cd5;
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.605);
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      transform: scale(1.02);
    }
    & h1 {
      width: 100%;
      background-color: transparent;
      font-size: 1.2em;
      font-weight: 300;
      text-transform: uppercase;
      text-align: center;
      border-top: 1px solid rgba(209, 213, 219, 0.3);
    }
    & p {
      border-top: 1px solid rgba(209, 213, 219, 0.3);
      font-size: 0.8em;
      font-weight: 100;
      background-color: transparent;
      text-align: justify;
      padding: 1em;
      &::first-letter {
        color: #fff;
        font-size: 1.2em;
      }
    }
    & img {
      width: 60px;
      height: auto;
      background-color: transparent;
      filter: invert(100%);
    }
  }
`;
