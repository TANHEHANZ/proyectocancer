import React from 'react'
import styled from 'styled-components'
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            dolorum porro accusamus, perferendis voluptate quisquam aperiam
            eveniet
          </p>
        </section>
        <section>
          <img src={salud} alt="icono" />
          <h1>Centros de Salud</h1> 
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            dolorum porro accusamus, perferendis voluptate quisquam aperiam
            eveniet
          </p>
        </section>
        <section>
          <img src={lab} alt="icono" />
          <h1>Laboratorio</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            dolorum porro accusamus, perferendis voluptate quisquam aperiam
            eveniet
          </p>
        </section>
        <section>
          <img src={age} alt="icono" />
          <h1>Programa</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            dolorum porro accusamus, perferendis voluptate quisquam aperiam
            eveniet
          </p>
        </section>     
      </Cars1>
    </>
  )
}

export default Cars
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
    width: calc(70% / 4);
    height: auto;
    backdrop-filter: blur(12px) saturate(29%);
    -webkit-backdrop-filter: blur(12px) saturate(29%);
    background-color: rgba(255, 255, 255, 0.26);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    margin: 1em 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    &:hover{
      transform:scale(1.02);
    }
    & h1 {
      width:100%;
      background-color:transparent;
      font-size:1.2em;
      font-weight:300;
      text-transform:uppercase;
      text-align:center;
    border-top: 1px solid rgba(209, 213, 219, 0.3);
    }
    & p{
    border-top: 1px solid rgba(209, 213, 219, 0.3);
    font-size:0.8em;
    font-weight:100;
      background-color:transparent;
      text-align:justify;
      padding:1em;
      &::first-letter{
    color:#fff;

      }
    }
    & img{
      width:60px;
      height:auto;
      background-color:transparent;
      filter:invert(100%);
    }
  }
`;