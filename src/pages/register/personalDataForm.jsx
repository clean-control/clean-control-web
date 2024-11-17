import { useState } from "react";


export default function PersonalDataForm({ formPerson, setFormPerson }) {
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormPerson({ ...formPerson, [name]: value });
      };


  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfSenha, setMostrarConfSenha] = useState(false);

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
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite o seu primeiro nome!"
          value={formPerson.nome}
          onChange={handleChange}
        />
      </div>

      <div className="campo-form">
        <label htmlFor="sobrenome">Sobrenome</label>
        <input
          type="text"
          name="sobrenome"
          id="sobrenome"
          placeholder="Digite o seu sobrenome!"
          value={formPerson.sobrenome}
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
          <label htmlFor="senha">Senha</label>
          <div className="password-field">
            <input
              type={mostrarSenha ? "text" : "password"}
              name="senha"
              id="senha"
              placeholder="Digite a sua senha!"
              value={formPerson.senha}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              className="show-password-btn"
            >
              <ion-icon name={mostrarSenha ? "eye" : "eye-off"}></ion-icon>
            </button>
          </div>
        </div>

        <div className="campo-form">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <div className="password-field">
            <input
              type={mostrarConfSenha ? "text" : "password"}
              name="confirmarSenha"
              id="confirmarSenha"
              placeholder="Digite novamente a sua senha!"
              value={formPerson.confirmarSenha}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setMostrarConfSenha(!mostrarConfSenha)}
              className="show-password-btn"
            >
              <ion-icon name={mostrarConfSenha ? "eye" : "eye-off"}></ion-icon>
            </button>
          </div>
        </div>
      </div>

      <div className="group-form">
        <div className="campo-form mini">
          <label htmlFor="dataNasc">Data de Nascimento</label>
          <input type="date" name="dataNasc" id="dataNasc" value={formPerson.dataNasc} onChange={handleChange} />
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
        <label htmlFor="telefone">Telefone</label>
        <input
          type="tel"
          name="telefone"
          id="telefone"
          placeholder="(XX) XXXXX-XXXX"
          value={formPerson.telefone}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
