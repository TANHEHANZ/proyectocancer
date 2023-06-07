import React from 'react'
import ReporteForm from './Reportes';
import Porcentro from '../Report/ReportesPacientes';
import styled from 'styled-components';
import EstadoTratamiento from '../Report/EstadoTratamiento';
import CantidadTipoR from '../Report/CantidadTipoResultados';

 const Home = () => {
  return (
   <Divp>
    <Section>
    <section>
            <article>
              <h1>Cantidad de Doctores por Centros</h1>
              <button >Generar Export</button>
            </article>
            <Porcentro />
          </section>
          <section>
            <article>
              <h1>Pacientes por estado tratamiento</h1>
              <button >Generar Export</button>
            </article>
            <EstadoTratamiento />
          </section>
          <section>
            <article>
              <h1>Por tipo de resultados</h1>
              <button >Generar Export</button>
            </article>
            <CantidadTipoR />
          </section>
          <section>
            <article>
              <h1>Pacientes por estado tratamiento</h1>
              <button >Generar Export</button>
            </article>
            <EstadoTratamiento />
          </section>
    </Section>
    
    </Divp>
  )
}
export default Home;
const Divp = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap:wrap;
flex-direction:row;
margin-top:1em;
`;
const Section = styled.div`
  display: flex;
  width: 95%;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
  margin:0 auto;
  & section {
    color:#fff;
    display: flex;
    width: 38%;
    flex-direction: column;
    border: solid 1px #fff2;
    background-color: rgba(245, 245, 243, 0.298);
    padding-bottom: 1em;
    &:nth-child(2n) {
      width: 60%;
    }
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0 5px 2px #0002;
    }
    & article {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000000;
      border-bottom: solid 1px #0002;
      padding: 1em 0;
      & button {
        cursor: pointer;
        border: solid 1px #0002;
        margin: 0 1em;
        background-color: rgb(34, 152, 202);
        color: #fff;
      }
      & h1 {
        color: #ffffffe5;
        font-size: 0.9em;
        font-weight:100;

        &::first-letter {
          color: #fff;

          text-transform: uppercase;
          font-size: 1.1em;
        }
      }
    }
  }
`;
// const Section = styled.section`
// margin:1em auto;
// width:calc(100% / 2);
// height:20em;
// background-color:#fff8;
//   margin-top: 1em;
// `;

