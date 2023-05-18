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
        <Divpadre>
          <Header>
            {user.rol == "administrador" && <AdminComponent />}
            {user.rol == "laboratorio" && <LaboratorioComponent />}
          </Header>
          <Navuser>
          <Topnav>
          <Logout onClick={Cerrasesion}>Salir</Logout>
          <User>
            <Topnavimg src="src\img\user.png" alt="" />
            <Nameuser>{user.nombre}</Nameuser>
          </User>
        </Topnav>
            <Outlet />
          </Navuser>
        </Divpadre>
      </Divheader>
    </>
  );
};
export default Navbar;

const Divpadre = styled.div`
  display: flex;
  flex-direction: row;
`;

const Divheader = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  min-width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Navuser = styled.div`
  min-width: calc(100% - 310px);
  height: 100%;
  display: flex;
  flex-direction: column;

`;
const Topnav = styled.div`
  max-width: 98%;
  background-color: rgb(48, 65, 75);
  display: flex;
  gap: 1em;
  justify-content: flex-end;
  align-items: center;
  border-bottom: solid 1px #fff2;
  height:10vh;
`;
const Topnavimg = styled.img`
  width: 33px;
  height: 33px;
  margin: 3px;
  background-color: transparent;
  filter:invert(100%);
`;
const Logout = styled.button`
  cursor: pointer;
  border: solid 1px #02d08f;
  color: #02d08f;
  font-size: 1em;
  width: 5em;
  height: 2em;
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  background-color:transparent;
  &:hover {
    color: #fff;
    
  }
`;
const User = styled.div`
  display: flex;
  color: #fff;
  flex-direction: row;
  align-items: center;
  margin-right: 35px;
`;
const Nameuser = styled.label`
  cursor: pointer;
  margin: 2px;
  border-left:solid 1px #02d08f;
padding: 0 0.5em ;
  &:hover {
    color: #02d08f;
  }
`;
