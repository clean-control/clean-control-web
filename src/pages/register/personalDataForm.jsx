import { useState } from "react";


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

  

//   const validateCpf = (value) => {
//     const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
//     return cpfRegex.test(value);
//   };

//   const validPassword = (password, confPassword) => {
//     if(password.length() < 8 || confPassword.length() < 8) return false;
//     return password == confPassword;
//   };

if (!formPerson) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento ou outro fallback
  }
  return (
    <div className="content-forms">
      <div className="campo-form">
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite o seu primeiro name!"
          value={formPerson.name}
          onChange={handleChange}
        />
      </div>

      <div className="campo-form">
        <label htmlFor="lastname">lastname</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Digite o seu lastname!"
          value={formPerson.lastname}
          onChange={handleChange}
        />
      </div>

      <div className="campo-form">
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

      <div className="group-form mini">
        <div className="campo-form">
          <label htmlFor="password">password</label>
          <div className="password-field">
            <input
              type={mostrarpassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Digite a sua password!"
              value={formPerson.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setMostrarpassword(!mostrarpassword)}
              className="show-password-btn"
            >
              <ion-icon name={mostrarpassword ? "eye" : "eye-off"}></ion-icon>
            </button>
          </div>
        </div>

        <div className="campo-form">
          <label htmlFor="confirmarpassword">Confirmar password</label>
          <div className="password-field">
            <input
              type={mostrarConfpassword ? "text" : "password"}
              name="confirmarpassword"
              id="confirmarpassword"
              placeholder="Digite novamente a sua password!"
              value={formPerson.confirmarpassword}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setMostrarConfpassword(!mostrarConfpassword)}
              className="show-password-btn"
            >
              <ion-icon name={mostrarConfpassword ? "eye" : "eye-off"}></ion-icon>
            </button>
          </div>
        </div>
      </div>

      <div className="group-form">
        <div className="campo-form mini">
          <label htmlFor="dateBirth">Data de Nascimento</label>
          <input type="date" name="dateBirth" id="dateBirth" value={formPerson.dateBirth} onChange={handleChange} />
        </div>

        <div className="campo-form mini">
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

      <div className="campo-form mini">
        <label htmlFor="phone">phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="(XX) XXXXX-XXXX"
          value={formPerson.phone}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
