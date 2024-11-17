import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import celular from "../../assets/imgs/Device--inject-1.svg";
import usuario from "../../assets/imgs/bro.svg";
import "./style.css";
import PersonalDataForm from "./personalDataForm";


export default function Register() {
  const navegate = useNavigate();

      
const [formPerson, setFormPerson] = useState({
  nome :"",
  sobrenome :"",
  email :"",
  senha :"",
  confirmarSenha :"",
  dataNasc :"",
  cpf :"",
  telefone :"",
});


  const back = () => {
    navegate("/");
  };

  const redirectLogin = () => {
    navegate("/auth/login");
  };

  const nextStage = () => {
    if (formPerson.senha !== formPerson.confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    if (formPerson.senha.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return;
    }
    console.log(formPerson); // Aqui você pode seguir com a lógica para o próximo passo
  };
  

  return (
    <div className="box-geral">
      <div className="box-header">
        <div className="redirect" onClick={back}>
          <ion-icon name="arrow-back-outline"></ion-icon> Return
        </div>
        <div className="redirect login" onClick={redirectLogin}>
          Login <ion-icon name="log-in-outline"></ion-icon>
        </div>
      </div>

      <div className="box">
        <div className="header">
          <h1>Cadastro Dados Pessoais</h1>
        </div>
        <div className="content">
          {/* inicio do form */}

          <PersonalDataForm formPerson={formPerson} setFormPerson={setFormPerson} />


          {/* fim do form */}

          <div className="content-img">
            <img src={celular} alt="" />
            <img src={usuario} alt="" />
          </div>
        </div>
        <div className="bottom">
          <button className="btn back disabled">
            <ion-icon name="arrow-back-outline"></ion-icon>
            Voltar
          </button>
          <div className="progress-bar">
            <div className="stage atual">1</div>
            <div className="stage">2</div>
            <div className="stage">
              <ion-icon name="flag"></ion-icon>
            </div>
          </div>
          <button className="btn next active" onClick={nextStage}>
            Continuar
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
