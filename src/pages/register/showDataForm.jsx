import { useState } from "react";
import style from "./Register.module.scss"; // Importando o CSS Module

export default function ShowDataForm({ formPerson, setFormPerson }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormPerson({ ...formPerson, [name]: value });
  };

  const [showPersonData, setShowPersonData] = useState(false);
  const [showAddressData, setShowAddressData] = useState(false);

  const formatCpf = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{2})$/, "$1-$2");
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  };

  const formatCep = (value) => {
    return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
  };

  if (!formPerson) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento ou outro fallback
  }
  return (
    <div className={style.contentForms}>
      <div className={style.boxShowInfo}>
        <label>Informações Pessoais</label>
        <div className={style.title}>
          <div>Informações Pessoais</div>
          <div className={style.seta}>
            <ion-icon
              name={
                showPersonData ? "chevron-up-outline" : "chevron-down-outline"
              }
              onClick={() => setShowPersonData(!showPersonData)}
            ></ion-icon>
          </div>
        </div>
        <div className={`${style.itens} ${showPersonData ? style.close : ""}`}>
          <div className={style.item}>
            <strong>Nome:</strong> {formPerson.name}
          </div>
          <div className={style.item}>
            <strong>Sobrenome:</strong> {formPerson.lastname}
          </div>
          <div className={style.item}>
            <strong>E-mail:</strong> {formPerson.email}
          </div>
          <div className={style.item}>
            <strong>CPF:</strong> {formatCpf(formPerson.cpf)}
          </div>
          <div className={style.item}>
            <strong>Data de Nascimento:</strong> {formPerson.dateBirth}
          </div>
          <div className={style.item}>
            <strong>Telefone:</strong> {formatPhone(formPerson.phone)}
          </div>
        </div>
      </div>
      <div className={style.boxShowInfo}>
        <label>Endereço</label>
        <div className={style.title}>
          <div>Endereço</div>
          <div className={style.seta}>
            <ion-icon
              name={
                showAddressData ? "chevron-up-outline" : "chevron-down-outline"
              }
              onClick={() => setShowAddressData(!showAddressData)}
            ></ion-icon>
          </div>
        </div>
        <div className={`${style.itens} ${showAddressData ? style.close : ""}`}>
          <div className={style.item}>
            <strong>CEP:</strong> {formatCep(formPerson.address.cep)}
          </div>
          <div className={style.item}>
            <strong>Rua:</strong> {formPerson.address.street}
          </div>
          <div className={style.item}>
            <strong>Estado:</strong> {formPerson.address.state}
          </div>
          <div className={style.item}>
            <strong>Cidade:</strong> {formPerson.address.city}
          </div>
          <div className={style.item}>
            <strong>Número:</strong> {formPerson.address.number}
          </div>
          <div className={style.item}>
            <strong>Bairro:</strong> {formPerson.address.neighborhood}
          </div>
          <div className={style.item}>
            <strong>Complemento:</strong> {formPerson.address.complement}
          </div>
        </div>
      </div>

      <div className={style.campoForm}>
        <label htmlFor="nickname">Nickname</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="Digite o seu nickname!"
          value={formPerson.nickname}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
