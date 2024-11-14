import { useNavigate } from 'react-router-dom';

import React from "react";


export default function LandingPage() {

  const navegate = useNavigate();

  const redirectLoin = () => {
    navegate('/auth/login');
  }
  const redirectRegister = () => {
    navegate('/auth/register');
  }


  return (
    <>
     eu sou a landing page
     <br />

     <button onClick={redirectLoin}>tela de login</button><br />
     <button onClick={redirectRegister}>tela de cadastro</button>


     
    
    </>
  );
}
