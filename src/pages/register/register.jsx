import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import celular from "../../assets/imgs/Device--inject-1.svg";
import usuario from "../../assets/imgs/bro.svg";
import "./style.css";
import PersonalDataForm from "./personalDataForm";
import AddressDataForm from "./addressDataForm";
import ShowDataForm from "./showDataForm";
import Alert from "../../utils/alert/alert";
import axios from "axios";
import { isValidCpf } from "../../utils/validate";
import BaseLoader from "../../utils/loader/loader";

export default function Register() {
  const navigate = useNavigate();
  const check = <ion-icon name="checkmark-outline"></ion-icon>;

  const [stage, setStage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [formAddress, setFormAddress] = useState({
    cep: "",
    street: "",
    state: "",
    number: "",
    city: "",
    neighborhood: "",
    complement: "",
  });

  // Estado inicial do formulário
  const [formPerson, setFormPerson] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmarpassword: "",
    dateBirth: "",
    cpf: "",
    phone: "",
    nickname: "",
    address: {
      cep: "",
      street: "",
      state: "",
      number: "",
      city: "",
      neighborhood: "",
      complement: "",
    },
  });

  // Função para cadastrar o usuário
  const cadastrar = () => {
    console.log("Dados enviados para o servidor:", JSON.stringify(formPerson));
    setIsLoading(true);
    axios
      .post("http://localhost:8080/api/clients/register", formPerson)
      .then((response) => {
        setIsLoading(false);
        console.log("Cadastro realizado com sucesso:", response);
        window.addAlert("Cadastro realizado com sucesso!", "success", 5000);
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      })
      .catch((error) => {
        setIsLoading(false);

        console.error("Erro ao cadastrar:", error);
        window.addAlert("Erro ao cadastrar. Tente novamente.", "error", 5000);
      });
  };

  // Navegação entre etapas
  const backStage = () => {
    if (stage > 1) {
      setStage(stage - 1);
    }
  };

  const nextStage = () => {
    if (validate()) {
      if (stage === 3) {
        cadastrar();
      } else {
        formPerson.address = formAddress;

        setStage(stage + 1);
      }
    }
  };

  const validate = () => {
    switch (stage) {
      case 1:
        return validFormPerson();
      case 2:
        return validFormAddress();

      case 3:
        return validNickname();
    }

    return true;
  };

  const validNickname = () => {
    if (!formPerson.nickname?.trim()) {
      window.addAlert("O campo nickname é obrigatório.", "error", 5000);
      return false;
    }

    return true;
  };

  const validFormPerson = () => {
    const requiredFields = [
      "name",
      "lastname",
      "email",
      "password",
      "confirmarpassword",
      "dateBirth",
      "cpf",
      "phone",
    ];

    for (const field of requiredFields) {
      if (!formPerson[field]?.trim()) {
        window.addAlert(`O campo ${field} é obrigatório.`, "error", 5000);
        return false;
      }
    }

    if (formPerson.password !== formPerson.confirmarpassword) {
      window.addAlert("As senhas não coincidem.", "error", 5000);
      return false;
    }

    if (!formPerson.email.includes("@")) {
      window.addAlert("E-mail inválido.", "error", 5000);
      return false;
    }

    if (formPerson.password.length < 8) {
      window.addAlert(
        "A senha deve ter pelo menos 8 caracteres.",
        "error",
        5000
      );
      return false;
    }

    if (formPerson.phone.length < 11 || formPerson.phone.length > 15) {
      window.addAlert("Telefone inválido.", "error", 5000);
      return false;
    }

    if (!isValidCpf(formPerson.cpf)) {
      window.addAlert("CPF inválido.", "error", 5000);
      return false;
    }

    return true;
  };

  const validFormAddress = () => {
    if (stage === 2) {
      const addressFields = [
        "cep",
        "street",
        "state",
        "number",
        "city",
        "neighborhood",
      ];
      for (const field of addressFields) {
        if (!formAddress[field]?.trim()) {
          window.addAlert(
            `O campo ${field} do endereço é obrigatório.`,
            "error",
            5000
          );
          return false;
        }
      }
    }

    return true;
  };

  return (
    <div className="box-geral">
      <div className="box-header">
        <div className="redirect" onClick={() => navigate("/")}>
          <ion-icon name="arrow-back-outline"></ion-icon> Return
        </div>
        <div className="redirect login" onClick={() => navigate("/auth/login")}>
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
          {/* Etapas do formulário */}
          {stage === 1 && (
            <PersonalDataForm
              formPerson={formPerson}
              setFormPerson={setFormPerson}
            />
          )}
          {stage === 2 && (
            <AddressDataForm
              formPerson={formAddress}
              setFormPerson={setFormAddress}
            />
          )}
          {stage === 3 && (
            <ShowDataForm
              formPerson={formPerson}
              setFormPerson={setFormPerson}
            />
          )}

          <div className="content-img">
            <img src={celular} alt="Celular" />
            <img src={usuario} alt="Usuário" />
          </div>
        </div>

        <div className="bottom">
          <button
            className={`btn back ${stage > 1 ? "active" : "disabled"}`}
            onClick={backStage}
          >
            <ion-icon name="arrow-back-outline"></ion-icon>
            Voltar
          </button>
          <div className="progress-bar">
            <div className={`stage ${stage === 1 ? "atual" : "finish"}`}>
              {stage === 1 ? "1" : check}
            </div>
            <div
              className={`stage ${
                stage === 2 ? "atual" : stage >= 2 ? "finish" : ""
              }`}
            >
              {stage < 2 ? "2" : check}
            </div>
            <div
              className={`stage ${
                stage === 3 ? "atual" : stage >= 3 ? "finish" : ""
              }`}
            >
              <ion-icon name="flag"></ion-icon>
            </div>
          </div>
          <button
            className="btn next active"
            onClick={nextStage}
            disabled={stage > 3}
          >
            Continuar
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
      <Alert />

      {isLoading && <BaseLoader />}
    </div>
  );
}
