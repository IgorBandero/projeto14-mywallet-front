import styled from "styled-components"
import {Link} from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react';

export default function SignInPage() {

  const [formData, setFormData] = useState({email: "", password: ""});

  function handleChangeForm(event) {
    const {name, value} = event.target;
    setFormData((prevState) => ({...prevState, [name]: value}));
  } 

  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
/*
    if (formData.password !== formData.passConfirm) {
      return alert("As senhas são diferentes!");
    }
    const {passConfirm, ...data} = formData;
*/
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, data);
      navigate("/home");
    } catch (error) {
      alert(error.response.data);
    }

  };
  

  return (
    <SingInContainer>
      <form onSubmit={login}>
        <MyWalletLogo />
        <input data-test="email" placeholder="E-mail" type="email" required name="email" value={formData.email} onChange={handleChangeForm}/>
        <input data-test="password" placeholder="Senha" type="password" autoComplete="new-password" required minLength={3} name="password" value={formData.password}  onChange={handleChangeForm}/>
        <button data-test="sign-in-submit" type="submit" >Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

