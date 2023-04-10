import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useNavContext } from "../../context/navcontext";
import { useuserContext } from "../../context/userContext";
import Login from "../../pages/Login";
import AdminComponent from "./routesToRole/admin";
import LaboratorioComponent from "./routesToRole/laboratorio";

const Navbar = () => {
  const { logged } = useNavContext;
  const navegation = useNavigate();
  const { user, setUser } = useuserContext();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const Cerrasesion = async () => {

    localStorage.removeItem("user");
    navegation("/login");
  };
 
  return (
    <>
        <Divheader>
        <Header>
          <Logo>
            <Imge src="" alt="" />
          </Logo>
       {user.rol == "administrador" && (
       <AdminComponent/>
       )}

       {user.rol == "laboratorio" && (
             <LaboratorioComponent />
       )}


        </Header>
        <Navuser>
          <Topnav>
            <Logout onClick={Cerrasesion}>Salir</Logout>
            <User>
              <Topnavimg src="" alt="" />
              <Nameuser>{user.nombre}</Nameuser>
            </User>
          </Topnav>
          <Outlet />
        </Navuser>
      </Divheader>
    </>
  );
};
export default Navbar;

const Divheader = styled.div`
  display: flex;
 
`;


const Header = styled.header`
  background: blue;
  min-width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);

`;
const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px;
  filter: invert(99%) sepia(6%) saturate(2%) hue-rotate(92deg) brightness(112%)
    contrast(100%);
`;
const Linkes = styled(Link)`
  padding: 10px 10px 10px 30px;
  cursor: pointer;
  text-decoration: none;
  color: #aeaeae;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  &:hover {
    background: #fff;
    color: #0066ff;
    border-radius: 0px -20px 10px 0px;
  }
  &:hover Img {
    filter: invert(25%) sepia(42%) saturate(5518%) hue-rotate(211deg)
      brightness(100%) contrast(102%);
  }
`;
const Imge = styled.img``;
const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px 10px 0px;
`;
const Navuser = styled.div`
  min-width: calc(100% - 250px);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Topnav = styled.div`
  max-width: 100%;
  background: #ffffff;
 box-shadow:0 0 10px 0.8px ;
  display: flex;
gap:1em;
  justify-content:flex-end;
  align-items:center;
`;
const Topnavimg = styled.img`
  width: 33px;
  height: 33px;
  margin: 3px;
  background-color:transparent;
  
`;
const Logout = styled.button`
  background: blue;
  cursor: pointer;
  border:none;
  color:#fff;
  font-size:1em;
width:5em;
height:2em;
transition:all 0.5s ease-in-out;
border-radius:0.5em;
  &:hover {
    color: #000000;
  background: #ffffff;

  }
`;
const User = styled.div`
  display: flex;
  color:#fff;
  flex-direction: column;
  align-items: center;
  margin-right: 35px;
`;
const Nameuser = styled.label`
  cursor: pointer;
  margin: 2px;
  &:hover {
    color: #0066ff;
  }
`;
