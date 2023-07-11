import {Link} from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, {useState} from 'react';

export default function SignUpPage() {

  const [formData, setFormData] = useState({name: "", email: "", password: "", passConfirm: ""});
  
  function handleChangeForm(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({...prevState, [name]: value}));
  } 

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.passConfirm) {
      return alert("As senhas são diferentes!");
    }
    const {passConfirm, ...data} = formData;
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/newuser`, data);
      navigate("/");
    } catch (error) {
      alert(error.response.data);
    }
  };
  

  return (
    <SingUpContainer>
      <form onSubmit={handleSignUp}> 
        <MyWalletLogo />
        <input data-test="name" value={formData.name} placeholder="Nome" type="text" name="name" required onChange={handleChangeForm}/>
        <input data-test="email"  value={formData.email} placeholder="E-mail" type="email" autoComplete="new-password" name="email" required onChange={handleChangeForm}/>
        <input data-test="password" value={formData.password}  placeholder="Senha" type="password" autoComplete="new-password" name="password" required minLength={3} onChange={handleChangeForm}/>
        <input data-test="conf-password" value={formData.passConfirm}  placeholder="Confirme a senha" type="password" autoComplete="new-password" name="passConfirm" required minLength={3} onChange={handleChangeForm}/>
        <button data-test="sign-up-submit" type="submit"> Cadastrar</button>
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
