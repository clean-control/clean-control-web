import React from "react";

import "./style.scss";

export default function Menu({ data }) {
  const validRegister = () => {
    return data?.id != null && data?.token != null;
  };
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="/">Clean Control</a>
        </li>
        <li>
          <a href="/" className="menu-item">Home</a>
        </li>
        <li>
          <a href="/" className="menu-item">Serviços</a>
        </li>
        <li className="search-box">
          <div className="search">
            <label htmlFor="busca"><ion-icon name="search-outline" ></ion-icon></label>
            <input type="text" placeholder="Pesquisar"  name="busca" id="busca"/>
          </div>
        </li>
        <li>
          <a href="/" className="menu-item">Explorar</a>
        </li>
        <li>
          <a href="/" className="menu-item">newsletter</a>
        </li>
        <li className="user-info">
          {validRegister() ? (
            <div className="profile-info">
              <div className="notification">
                {/* 
                ^retirar o span e o comentario para adicionar notificações quando for desenvolvido^
                <span className="cont-notification">+9</span>
                 */}
                <ion-icon name="notifications-sharp"></ion-icon>
              </div>

              <div className="profile">
                <ion-icon name="person-sharp"></ion-icon>
              </div>
            </div>
          ) : (
            <div className="register-link">
              <a href="/auth/login">Login</a>
              <a href="/auth/register">Registrar</a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
