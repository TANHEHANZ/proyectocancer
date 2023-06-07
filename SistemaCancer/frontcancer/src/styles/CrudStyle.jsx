import styled from "styled-components";


export const Container = styled.div`
width:40em;
  display: flex;
  flex-direction: row;
  & form{
    width:100%;
    display:flex;
    flex-wrap:wrap;
  }
  `;
export const Divinput = styled.div`
width:calc(90% / 3);
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
  & input{
    margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  border:none;
  border-bottom: 1px solid #05bd79;
  outline: none;
  background-color:transparent;
  &:focus {
    border: 1px solid #05bd79;
  }
  }
  & label{
    color:#fff9;
    font-size:0.8em;
  }
`;
export const Divboton = styled.div`
  display: flex;
  justify-content: center;
  width:80%;
  margin:1.5em auto 0 auto;
`;
export const Botonagregar = styled.button`
width:70%;
margin:0 auto;
padding:0.5em 0;
  cursor: pointer;
  background: #05bd79;
  color: #fff;
  border-radius: 7px;
  border:solid 1px #0002;

  &:hover {
    background: #ffffff;
    color:#05bd79;
  }
`;
export const Select = styled.select`
  width: 10em;
  outline: none;
  font-size: 16px;
  padding: 5px;
  background-color:transparent;
  border: 2px solid #05bd79;
  border-radius: 8px;
  & option{
  background-color:transparent;
  }
`;