// import { useState } from 'react'
import React from "react";

import NavBar from "./navBar";
import "./style.css";

import imgCellPhone from "../../assets/imgs/cellPhone_v1-removebg-preview.png";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="landing_page">
        <section className="section_start">
          <div className="left_content">
            <h1>Clean Control</h1>
            <p>
              Aqui na Clean Control, o nosso propósito é simplificar a vida das
              pessoas e empresas, conectando-as de forma prática e eficiente.
              Criamos uma plataforma onde as pessoas podem facilmente encontrar
              os melhores lugares para se divertir, explorar novos destinos e
              fazer compras. Ao mesmo tempo, oferecemos às empresas, um espaço
              para se destacar e se conectar com seus clientes. Além disso,
              integramos ferramentas de gestão que ajudam a manter o controle de
              estoque, finanças e outros aspectos essenciais do negócio.
            </p>
            <br />

            <div className="content_botoes">
              <h4>Como voce deseja conhecer os servicos?</h4> 

              <div className="botoes">

                <div className="botao botao_user">
                  <span>Usuario</span>
                    <span className="text">
                     Tenha um visão exclusiva dos nossos serviços voltados expecificamente para você.
                    </span>
                </div>

                <div className="botao botao_enterprise">
                  <span>Empresa</span>
                  <span className="text">
                     Tenha um visão exclusiva dos nossos serviços e funcionalidades exclusivas  voltados expecificamente para sua empresa.
                    </span>  
                </div>

              </div>
            </div>
          </div>

          <div className="right_content">
            <img src={imgCellPhone} alt="Cell Phone" />
          </div>
        </section>
      </div>
    </>
  );
}
