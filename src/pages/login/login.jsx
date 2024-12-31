
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../utils/alert/alert";
import './style.scss';
import BaseLoader from "../../utils/loader/loader";
import celular from "../../assets/imgs/Device--inject-1.svg";
import usuario from "../../assets/imgs/bro.svg";
export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const logar = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    return (
        <div className="box-geral">
        <div className="box-header">
          <div className="redirect" onClick={() => navigate("/")}>
            <ion-icon name="arrow-back-outline"></ion-icon> Return
          </div>
          <div className="redirect login" onClick={() => navigate("/auth/register")}>
            Register <ion-icon name="log-in-outline"></ion-icon>
          </div>
        </div>
  
        <div className="box">
          <div className="header">
            <h1>Login</h1>
           
          </div>
          <div className="content">
           

          <div className="content-img">
            <img src={celular} alt="Celular" />
            <img src={usuario} alt="Usuário" />
          </div>
          </div>
  
          <div className="bottom">
            
            <button
              className="btn next active"
              onClick={logar}
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