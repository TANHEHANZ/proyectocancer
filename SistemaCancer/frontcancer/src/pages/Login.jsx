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
  const { user, setUser } = useuserContext();
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
      setUser(responsejson.user[0]); 
      localStorage.setItem("user", JSON.stringify(responsejson.user[0]));
      setLogged(true);
      setUser((user) => ({ ...user, isLogged: true }));
      navegate("/");
    }
  };

  return (
    <Abody>
      <section>
        <div>
          <h2>Empieza</h2>
          <p> Salvando vidasr</p>
        </div>
        <article>
        <img src={doctors} alt="" />
          <h1>Hola! Bienvenido</h1>

          <form>
          <label>Email</label>
            <input
              type="text"
              placeholder=" "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
             <label>Password</label>
            <input
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
           
            <button onClick={enviar}>Ingresar</button>
          </form>
        </article>
      </section>
    </Abody>
  );
}

export default Login;

const Abody = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, rgb(90, 122, 239) 50%, #dce2ee 50%);
  background-color: #fff; 
  position:relative;
  overflow:hidden;
  &::before{
position:absolute;
content:"";
background-color: rgb(99, 131, 250);
width:20em;
height:20em;
top:-10em;
right:-5em;
z-index:1;
border-radius:50%;
  }
  &::after{
position:absolute;
content:"";
width:20em;
height:20em;
  border-radius: 50%;
  border: 3em solid rgb(90, 122, 239);
  background-color: transparent;
bottom:-5em;
right:-5em;
    }
  & > section {
    box-shadow:0 0 6px 1px #0002;
    z-index:2;

    & > div {
      width: 50%;
      background-color: rgb(99, 131, 250);
      height: 100%;
      border-radius: 2em 0 0 2em;
      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    color:#fff;
    position:relative;
    overflow:hidden;
    &::before{
position:absolute;
content:"";
width:4em;
height:4em;
border-radius:50%;
background-color: #fff; 
top:-2em;
left:2em;
    }
    &::after{
position:absolute;
content:"";
width:8em;
height:8em;
border-radius:50%;
background-color: #fff; 
bottom:-3.5em;
right:2em;

    }


    & h2{
      color:#fff;
      font-size:3em;
    }
    
    }
    width: 68%;
    height: 80%;
    border-radius: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    & article {
      width: 50%;
      background-color: rgb(245, 246, 250);
      height: 100%;
      border-radius: 0 2em 2em 0;
      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    & img{
      width:5em;
      height:5em;
      background-color:transparent;
      box-shadow:0 0 5px 1px #0002;
      border-radius:0.7em;
    }
    & h1{
      font-size:1.2em;
      font-weight:100;
    }
& form{
  width:60%;
  height:60%;
  display: flex;
    justify-content: center;
  
    flex-direction:column;
    & label{
font-size:0.8em;
&::first-letter{
  color:blue;
font-size:1.2em;

}
    }
   & input{
    width:100%;
    background-color:transparent;
    border:solid 1px #0002;
    padding:0.5em 0;
   }
   & button{
  margin-top:1em;
    width:100%;
    background-color:rgb(99, 131, 250);
    border:solid 1px #0002;
    padding:0.5em 0;
    color: #fff;
   }
   gap:0.8em;
}

    }
  }
`;
