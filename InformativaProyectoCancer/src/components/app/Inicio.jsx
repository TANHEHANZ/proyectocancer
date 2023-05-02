import React from "react";
import styled from "styled-components";
import Tratamientos from "../app/CompInicio/Tratamientos";
import HeaderInicio from "../app/CompInicio/HeaderInicio";
import Footer from "./Footer";
import cam from "../img/camilla.jpg";
import Cars from "./CompInicio/Cars";

const Inicio = () => {
  return (
    <>
      <HeaderInicio />
      <Cars/>
      <Section>
        <Div1>
          <article>
            <h3>Tituo</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              dolorum porro accusamus, perferendis voluptate quisquam aperiam
              eveniet
            </p>
          </article>
          <article>
            <h3>Titulo</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              dolorum porro accusamus, perferendis voluptate quisquam aperiam
              eveniet{" "}
            </p>
          </article>
          <article>
            <h3>Titulo</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              dolorum porro accusamus, perferendis voluptate quisquam aperiam
              eveniet{" "}
            </p>
          </article>
          <article>
            <h3>Titulo</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              dolorum porro accusamus, perferendis voluptate quisquam aperiam
              eveniet{" "}
            </p>
          </article>
        </Div1>
          <img src={cam} alt="" />
      </Section>
      <Tratamientos />
      <Footer />
    </>
  );
};

export default Inicio;

const Section = styled.section`
  width: 90%;
  height: 50vh;
  display: flex;
  margin: 7em auto;
  gap: 1em;
  flex-direction: row;
  justify-content:center;
  align-items:center;
& img{
  width:40%;
  height:100%;
  object-fit:cover;
  position:relative;
}
`;
const Div1 = styled.div`
width:60%;
height:100%;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
gap:1em;
& article{
width: calc(90% / 2);
height:11.5em;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color:#127369;
& h3{
  padding:0.8em;
  color:#127369;
  text-transform:uppercase;
  font-weight:200;
}
& p{
  padding:0 1em;
}
}

`;
