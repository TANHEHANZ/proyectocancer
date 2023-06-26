import styled from "styled-components";
import doc from "../../img/doc.jpg";
import doc1 from "../../img/doc1.jpg";
function Tratamientos() {
  return (
    <Tratamientoss>
      <article>
        <h2>Detección temprana y prevención:</h2>
      </article>
      <article>
        <h3>
          Esta plataforma te brinda infromacion de Tipos de cancer tratados en
          bolivia
        </h3>
        <p>
          Las campañas de concientización y educación sobre los signos y
          síntomas del cáncer también son importantes para fomentar la detección
          temprana y la búsqueda de atención médica.
          <img src={doc1} alt="" />
        </p>
      </article>
    </Tratamientoss>
  );
}

export default Tratamientos;

const Tratamientoss = styled.section`
  width: 100%;
  height: auto;
  background-color: #4c5958;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 5em auto;
  & article {
    background-color: transparent;
    width: calc(90% / 2);
    display: flex;
    flex-direction: column;
    gap: 1em;
    color: #fff;
    &:nth-child(1) {
      width: 40%;
    }

    & p {
      background-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      & img {
        width: 50%;
        height: 200px;
        object-fit: cover;
        border: solid 1.5px #127369;
        border-radius: 15px;
        margin-bottom: 1em;
      }
    }
    & h3 {
      background-color: transparent;
      font-weight: 100;
      padding: 3em 1em 0 0;
      text-align: center;
    }
    & h2 {
      background-color: transparent;
      width: 60%;
      height: auto;
      font-weight: 100;
    }
  }
`;
