import { useNavigate } from 'react-router-dom';

import React from "react";
// import Alert from '../../utils/alert/alert';


export default function LandingPage() {

  const navegate = useNavigate();


  const redirectLoin = () => {
    navegate('/auth/login');
  }
  const redirectRegister = () => {
navegate('/auth/register'); // descomentar para testar a tela de cadastro
 
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
