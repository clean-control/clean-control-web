import React from "react";

import "./style.css";

export default function Menu({ data }) {
  const validRegister = () => {
    return data.id != null && data.token != null;
  };
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Serviços</a>
        </li>
        <li className="search-box">
          <div className="search">
            <ion-icon name="search-outline"></ion-icon>
            <input type="text" placeholder="Pesquisar" />
          </div>
        </li>
        <li>
          <a href="/">Explorar</a>
        </li>
        <li>
          <a href="/">newsletter</a>
        </li>
        <li className="user-info">
          {validRegister() ? (
            <div className="profile-info">
              <div className="notification">
                <span className="cont-notification">+9</span>
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
