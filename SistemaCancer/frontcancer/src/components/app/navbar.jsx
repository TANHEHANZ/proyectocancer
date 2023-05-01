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
        <Topnav>
       
            <Logout onClick={Cerrasesion}>Salir</Logout>
            <User>
              <Topnavimg src="" alt="" />
              <Nameuser>{user.nombre}</Nameuser>
            </User>
           
          </Topnav>
       <Divpadre>
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
          <Outlet />
        </Navuser>
       </Divpadre>
      </Divheader>
    </>
  );
};
export default Navbar;

const Divpadre = styled.div`
display:flex;
flex-direction:row;
`;


const Divheader = styled.div`
  display: flex;
  flex-direction:column;
`;


const Header = styled.header`
  background: #8c8c8ce1;
  min-width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5px 1px rgb(0 0 0 / 10%);
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
  min-width: calc(100% - 258px);
  height: 100%;
  display: flex;
  flex-direction: column;
  background:#ffff;
`;
const Topnav = styled.div`
  max-width: 100%;
  background: #ffffff;
 box-shadow:0 0px 5px 1px #0005 ;
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
