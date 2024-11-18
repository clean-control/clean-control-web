import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import celular from "../../assets/imgs/Device--inject-1.svg";
import usuario from "../../assets/imgs/bro.svg";
import "./style.css";
import PersonalDataForm from "./personalDataForm";
import AddressDataForm from "./addressDataForm";
import ShowDataForm from "./showDataForm";
import axios  from "axios";

export default function Register() {
  const navegate = useNavigate();
  const check = <ion-icon name="checkmark-outline"></ion-icon>;

  const [stage, setStage] = useState(1);

  const [formPerson, setFormPerson] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmarpassword: "",
    dateBirth: "",
    cpf: "",
    phone: "",
    cep: "",
    street: "",
    state: "",
    number: "",
    city: "",
    neighborhood: "",
    complement: "",
    nickname: "",
    address:{
     cep: "",
      street: "",
      state: "",
      number: "",
      city: "",
      neighborhood: "",
      complement: "",

    }
  });

  const cadastrar = () => {

    formPerson.address = {
      cep: formPerson.cep,
      street: formPerson.street,
      state: formPerson.state,
      number: formPerson.number,
      city: formPerson.city,
      neighborhood: formPerson.neighborhood,
      complement: formPerson.complement,
    };

    console.log(JSON.stringify(formPerson));
    
    axios.post("http://localhost:8080/api/clients/register", formPerson).
    then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });

  };

  const back = () => {
    navegate("/");
  };

  const redirectLogin = () => {
    navegate("/auth/login");
  };

  const backStage = () => {
    if (stage > 1) {
      setStage(stage - 1);
    }
  };

  const nextStage = () => {
    if (validate()) {
      if (stage == 3 ||stage ==4) {
        cadastrar();
      } else {
        setStage(stage + 1);
      }
    }
    console.log(formPerson);
  };

  const validate = () => {
    if (stage >= 1) {
      if (
        formPerson.name === "" ||
        formPerson.lastname === "" ||
        formPerson.email === "" ||
        formPerson.password === "" ||
        formPerson.confirmarpassword === "" ||
        formPerson.dateBirth === "" ||
        formPerson.cpf === "" ||
        formPerson.phone === ""
      ) {
        alert("Preencha todos os campos");
        return false;
      }

      if (formPerson.password != formPerson.confirmarpassword) {
        alert("passwords não conferem");
        return false;
      }

      if (formPerson.password.length < 8) {
        alert("password deve ter no mínimo 8 caracteres");
        return false;
      }
    }

    if (stage >= 2) {
      if (
        formPerson.cep === "" ||
        formPerson.street === "" ||
        formPerson.state === "" ||
        formPerson.number === "" ||
        formPerson.city === "" ||
        formPerson.neighborhood === ""
      ) {
        alert("Preencha todos os campos");
        return false;
      }
    }

    if (stage >= 3) {
      if (formPerson.nickname === "") {
        alert("Preencha todos os campos");
        return false;
      }
    }

    return true;
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
          {stage === 1 && <h1>Personal Data</h1>}
          {stage === 2 && <h1>Address Data</h1>}
          {stage === 3 && <h1>Finish</h1>}
        </div>
        <div className="content">
          {/* inicio do form */}

          {stage === 1 && (
            <PersonalDataForm
              formPerson={formPerson}
              setFormPerson={setFormPerson}
            />
          )}
          {stage === 2 && (
            <AddressDataForm
              formPerson={formPerson}
              setFormPerson={setFormPerson}
            />
          )}
          {stage === 3 && (
            <ShowDataForm
              formPerson={formPerson}
              setFormPerson={setFormPerson}
            />
          )}

          {/* fim do form */}

          <div className="content-img">
            <img src={celular} alt="" />
            <img src={usuario} alt="" />
          </div>
        </div>
        <div className="bottom">
          <button
            className={"btn back " + (stage > 1 ? "active" : "disabled")}
            onClick={backStage}
          >
            <ion-icon name="arrow-back-outline"></ion-icon>
            Voltar
          </button>
          <div className="progress-bar">
            <div className={"stage " + (stage == 1 ? "atual" : "finish")}>
              {stage == 1 ? "1" : check}
            </div>
            <div
              className={
                "stage " + (stage == 2 ? "atual" : stage >= 2 ? "finish" : "")
              }
            >
              {stage <= 2 ? "2" : check}
            </div>
            <div
              className={
                "stage " + (stage == 3 ? "atual" : stage >= 3 ? "finish" : "")
              }
            >
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
