import React from "react";
import styled from "styled-components";
import doctors from "../img/doctors.jpg";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useNavContext } from "../context/navcontext";
import { useuserContext } from "../context/userContext";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navegate = useNavigate();
    const { setLogged } = useNavContext();
    const {user,setUser}=useuserContext();
    const enviar = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        if (response.ok) {
          const responsejson = await response?.json();
    /*       console.log(responsejson.user) */
          setUser(responsejson.user[0])
         /*  document.cookie = `token=${responsejson.access_token}; max-age=${60 * 60};
            path=/; somesite=stric`; */
      /*      document.cookie = `user=${JSON.stringify(responsejson.user[0])}; max-age=${60 * 60 * 24};
            path=/; somesite=stric`; */
            localStorage.setItem("user", JSON.stringify(responsejson.user[0]));
        setLogged(true);
          setUser(user=>({...user,isLogged:true})); 
          navegate("/");
        }
        
      };


  return (
    <Abody>
      <Section>
        <Img src={doctors} alt="" />
        <Div>
          <H1>Bienvenido</H1>
          <p>Sistema cancer</p>
          <Form>
          <Dinput>
              <Input
               type="text"
               placeholder=" "
               value={email}
               onChange={(e) => {
                 setEmail(e.target.value);
                }}
              />
              <Label>Usuario</Label>
            </Dinput>
            <Dinput>
              <Input
               type="password"
               placeholder=" "
               value={password}
               onChange={(e) => {
                 setPassword(e.target.value);
                }}
              />
              <Label>Password</Label>
              </Dinput>
              <Boton onClick={enviar}>Ingresar</Boton>
          </Form>
        </Div>
      </Section>
    </Abody>
  );
}

export default Login;
const Section = styled.section`
  width: 60%;
  height: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: blue;
    border-radius: 0 0 50% 50%;
    box-shadow: 0px 0px 5px 0.1px;
    left: 0;
  }
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius:0 1em 1em 0;

  color: #fff;
  box-shadow: 0px 0px 5px 0.1px;
  background-color: blue;
 
`;

const Img = styled.img`
  width: 50%;
  height: auto;
  background-color:transparent;
`;

const Abody = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  &::before{
content:"";
position:absolute;
  width:10em;
  height:10em;
  background-color:#000;
  right:8em;
 top:8em;
filter: blur(2px);
border-radius:1em;

  transform:rotate(45deg);
  }
  &::after{
content:"";
position:absolute;
  width:10em;
  height:10em;
  background-color:#152374ce;
  right:8em;
 top:12em;
 filter: blur(0.8px);
border-radius:1em;
  transform:rotate(45deg);
  }
`;
const Form = styled.form`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap:1em;
  width:60%;
`;
const Dinput = styled.div`
  width:100%;
  display:flex;
  flex-direction:row-reverse;
  gap:1.2em;
  margin:1.5em 0 0 0 ;
`;

const Input = styled.input`
  width:85%;
  height:2.5em;

 border:none;
`;

const Label = styled.label`
  font-size:1em;
  width:15%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Boton = styled.button`
  padding:0.8em 3.9em ;
  border-radius:0.5em;
  border:none;
  position:relative;
  cursor: pointer;
  transition:all 1s;
  &::after{
    position:absolute;
    content:"";
    width:30px;
    height:25px;
    background-color:#000000;
left:0;
    bottom:15%;
    border-radius:0 50%  50% 0;
  
  }
  &:hover{
    background-color:#000;
    color:#fff;
  }
`;

const H1 = styled.h1`
  font-size:2.5em;
`;