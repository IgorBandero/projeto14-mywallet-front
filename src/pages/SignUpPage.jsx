import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, {useEffect} from 'react';

export default function SignUpPage() {

  return (
    <SingUpContainer>
      <form> 
        <MyWalletLogo />
        <input placeholder="Nome" type="text" required onChange={formUpdate}/>
        <input placeholder="E-mail" type="email" autoComplete="new-password" required/>
        <input placeholder="Senha" type="password" autoComplete="new-password" required minLength={3}/>
        <input placeholder="Confirme a senha" type="password" autoComplete="new-password" required minLength={3}/>
        <button type="submit" >Cadastrar</button>
      </form>

      <Link to="/">
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
