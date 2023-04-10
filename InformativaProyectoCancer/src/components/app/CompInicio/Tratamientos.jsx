
import styled from "styled-components";
import doc from "../../img/doc.jpg";
import doc1 from "../../img/doc1.jpg";
function Tratamientos() {
  return (
<>

<Tratamientoss>
        <Sectio1>
          <Titulo>
            <H2>
              Esta plataforma te brinda infromacion de Tipos de cancer tratados
              en bolivia
            </H2>
            <Img src={doc} alt="" />
          </Titulo>
        </Sectio1>
        <Sectio2>
          <Dip>
            <H3>
              Esta plataforma te brinda infromacion de Tipos de cancer tratados
              en bolivia
            </H3>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptas voluptatum eligendi, blanditiis alias sint harum culpa maiores vel ducimus, iusto possimus ad, quo nisi ut? Odio, illo vitae. Modi?</P>
          </Dip>
        </Sectio2>
        <Sectio3>
          <Img src={doc1} alt="" />
        </Sectio3>
      </Tratamientoss>
</>
  )
}

export default Tratamientos

const Tratamientoss = styled.section`
  width: 100%;
  height: 70vh;
  background-color: #368dd9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin:8em 0;
`;
const P = styled.p`
background-color:transparent;
text-align:justify;padding:0.5em;
`;
const H2 = styled.h2`
  font-size: 1em;
  width: 80%;
  padding: 1em 0;
  border-bottom: solid 1px;
  font-weight: lighter;
  background-color: transparent;
  text-align:center;
  &::first-letter {
    color: blue;
    font-size: 1.5em;
    font-weight: bold;
  }
`;
const H3 = styled.h2`
  font-size: 1em;
  width: 80%;
  padding: 1em 0;
  font-weight: lighter;
  background-color: transparent;
  text-align:center;
  &::first-letter {
    color: #ffffff;
    font-size: 1.5em;
    font-weight: bold;
  }
`;
const Titulo = styled.div`
  display: flex;
  height: 100%;
  margin: 1em 0;
  flex-direction: column;
  justify-content: space-around;
  align-items:flex-end;
`;

const Sectio1 = styled.section`
  width: calc(100% / 3);
  height: 100%;
  display:flex;
  justify-content:end;
  align-items:center;
`;
const Sectio2 = styled.section`
  width: calc(100% / 3);
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Sectio3 = styled.section`
  width: calc(100% / 3);
  height: 100%;
  display:flex;
  justify-content:start;
  align-items:flex-start;
`;
const Dip = styled.div`
width:100%;
height:12em;
display:flex;
padding:1.5em;
flex-direction:column;
justify-content:center;
background-color:blue;
color:#fff;

`;
const Img = styled.img`
  width: 80%;
  height: 50%;
  border-radius: 0.5em;
object-fit:cover;
`;