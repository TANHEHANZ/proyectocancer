import React from "react";
import styled from "styled-components";
import img1 from "../img/img1.jpg";
import { useState } from "react";

import { useNavContext } from "../context/navcontext";
import { useuserContext } from "../context/userContext";
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setLogged } = useNavContext();
    const {user,setUser}=useuserContext();


//   const enviar = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://127.0.0.1:8000/api/login", {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     });
//     if (response.ok) {
//       const responsejson = await response?.json();
//       /*       console.log(responsejson.user) */
//       setUser(responsejson.user[0]);
//       /*  document.cookie = `token=${responsejson.access_token}; max-age=${60 * 60};
//             path=/; somesite=stric`; */
//       /*      document.cookie = `user=${JSON.stringify(responsejson.user[0])}; max-age=${60 * 60 * 24};
//             path=/; somesite=stric`; */
//       localStorage.setItem("user", JSON.stringify(responsejson.user[0]));
//       setLogged(true);
//       setUser((user) => ({ ...user, isLogged: true }));
//       navegate("/");
//     }
//   };

  return (
    <Abody>
      <Section>
        <Img src={img1} alt="" />
        <Div>
          <h1>Bienvenido</h1>
          <p>Sistema cancer</p>
          <Form>
          <Dinput>
              <Input
                type="text"
                placeholder=" "
                value={email}
                onChange={(e) => {
                  handleChange1();
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
                  handleChange();
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
  width: 80%;
  height: 60%;
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
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 0 50% 50% 0;
    box-shadow: 0px 0px 5px 0.1px;
    top: 50%;
  }
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  box-shadow: 0px 0px 5px 0.1px;
  background-color: blue;
`;

const Img = styled.img`
  width: 50%;
  height: auto;
`;

const Abody = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  
`;
const Dinput = styled.div`
  
`;

const Input = styled.input`
  
`;

const Label = styled.label`
  
`;
const Boton = styled.button`
  
`;