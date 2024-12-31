import { useState } from "react";
import style from "./Register.module.scss"; // Importando o CSS Module

export default function PersonalDataForm({ formPerson, setFormPerson }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormPerson({ ...formPerson, [name]: value });
  };

  const [mostrarpassword, setMostrarpassword] = useState(false);
  const [mostrarConfpassword, setMostrarConfpassword] = useState(false);

  const formatCpf = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{2})$/, "$1-$2");
  };

  const handleChangeCpf = (e) => {
    const { name, value } = e.target;
    setFormPerson({ ...formPerson, [name]: formatCpf(value) });
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, "") // Remove caracteres não numéricos
      .replace(/(\d{2})(\d)/, "($1) $2") // Adiciona parênteses no DDD
      .replace(/(\d{5})(\d)/, "$1-$2") // Adiciona o hífen no número
      .replace(/(-\d{4})\d+?$/, "$1"); // Limita o número de dígitos após o hífen
  };

  const handleChangePhone = (e) => {
    const { name, value } = e.target;
    setFormPerson({ ...formPerson, [name]: formatPhone(value) });
  };

  if (!formPerson) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento ou outro fallback
  }
  return (
    <div className={style.contentForms}>
      <div className={style.campoForm}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite o seu primeiro nome!"
          value={formPerson.name}
          onChange={handleChange}
        />
      </div>

      <div className={style.campoForm}>
        <label htmlFor="lastname">Sobrenome</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Digite o seu sobrenome!"
          value={formPerson.lastname}
          onChange={handleChange}
        />
      </div>

      <div className={style.campoForm}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu E-mail!"
          value={formPerson.email}
          onChange={handleChange}
        />
      </div>

      <div className={`${style.groupForm} ${style.mini}`}>
        <div className={style.campoForm}>
          <label htmlFor="password">Senha</label>
          <div className={style.passwordField}>
            <input
              type={mostrarpassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Digite a sua senha!"
              value={formPerson.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setMostrarpassword(!mostrarpassword)}
              className={style.showPasswordBtn}
            >
              <ion-icon name={mostrarpassword ? "eye" : "eye-off"}></ion-icon>
            </button>
          </div>
        </div>

        <div className={style.campoForm}>
          <label htmlFor="confirmarpassword">Confirmar Senha</label>
          <div className={style.passwordField}>
            <input
              type={mostrarConfpassword ? "text" : "password"}
              name="confirmarpassword"
              id="confirmarpassword"
              placeholder="Digite novamente a sua senha!"
              value={formPerson.confirmarpassword}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setMostrarConfpassword(!mostrarConfpassword)}
              className={style.showPasswordBtn}
            >
              <ion-icon name={mostrarConfpassword ? "eye" : "eye-off"}></ion-icon>
            </button>
          </div>
        </div>
      </div>

      <div className={style.groupForm}>
        <div className={`${style.campoForm} ${style.mini}`}>
          <label htmlFor="dateBirth">Data de Nascimento</label>
          <input type="date" name="dateBirth" id="dateBirth" value={formPerson.dateBirth} onChange={handleChange} />
        </div>

        <div className={`${style.campoForm} ${style.mini}`}>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            maxLength={14}
            value={formPerson.cpf}
            onChange={handleChangeCpf}
            placeholder="Digite o seu CPF"
          />
        </div>
      </div>

      <div className={`${style.campoForm} ${style.mini}`}>
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="(XX) XXXXX-XXXX"
          value={formPerson.phone}
          onChange={handleChangePhone}
        />
      </div>
    </div>
  );
}
