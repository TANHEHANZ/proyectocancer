
import React from 'react'
import styled from "styled-components";
import { useModalContext } from './context/modalContext';
const Modal = () => {
  const { openModal, setOpenModal, titulo, contenido } = useModalContext();
  if(openModal) return (
    <DivModalContainer>
      <DivAtras onClick={() => setOpenModal(false)}></DivAtras>
      <DivChildContainer>
        <DivCabecera>
          <PTitulo>{titulo}</PTitulo>
          <Botoncerrar onClick={() => setOpenModal(false)}>X</Botoncerrar>
        </DivCabecera>
        <DivBody>{contenido}</DivBody>
      </DivChildContainer>
    </DivModalContainer>
  );
};

export default Modal;
const Botoncerrar=styled.button`
  height: 35px;
  width: 35px;
  font-size: 15px;
  border: none;
  border-radius: 50%;
  color:black;
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    background: rgba(0,0,0,.1);
    transition: 0.5s;
  }
`;
const DivModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  
  
`;

const DivAtras = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
animation:transitionBackground 1s ease ;

  @keyframes transitionBackground {
    0% {
      background-color: rgba(0, 0, 0, 0.1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const DivChildContainer = styled.div`
  z-index: 1;
  border-radius: 10px;
  min-width: 400px;
  background-color: rgba(59, 78, 87, 0.927);
  animation: move 1s;
  transform: translateY(50px);
  margin-bottom: 100px;
  border:solid 1px #fff2;
`;

const PTitulo = styled.p`
  width: 100%;
  font-weight: 200;
  font-size: 1em;
  display:flex;
  justify-content: center;
  color: #fff;

`;
const DivCabecera = styled.div`
  width: 100%;
  padding: 10px 26px;
  display: flex ;
  justify-content: space-between;
  align-items: center;
  background: #069266;
  border-radius:10px 10px 0 0;
`;
const DivBody = styled.div`
  padding: 26px;
`;