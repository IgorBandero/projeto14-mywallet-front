import styled from "styled-components"
import {Link} from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react';

export default function SignInPage() {

  const navigate = useNavigate();

  function login(event){
    event.preventDefault();
    navigate("/home");
  }

  return (
    <SingInContainer>
      <form onSubmit={login}>
        <MyWalletLogo />
        <input placeholder="E-mail" type="email" />
        <input placeholder="Senha" type="password" autoComplete="new-password" />
        <button type="submit" >Entrar</button>
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

