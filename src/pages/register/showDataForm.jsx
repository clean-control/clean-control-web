import { useState } from "react";

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

  const formatCep = (value) => {
    return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
  };

  if (!formPerson) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento ou outro fallback
  }
  return (
    <div className="content-forms">
      <div className="box-show-info">
        <label > Informações Pessoais</label>
        <div className="title">
          <div>Informações Pessoais</div>
          <div className="seta">
            <ion-icon
              name={
                showPersonData ? "chevron-up-outline" : "chevron-down-outline"
              }
              onClick={() => setShowPersonData(!showPersonData)}
            ></ion-icon>
          </div>
        </div>
        <div className={"itens" + (showPersonData ? " close" : "")}>
          <div className="item">
            <strong>name:</strong> {formPerson.name}
          </div>
          <div className="item">
            <strong>lastname:</strong> {formPerson.lastname}
          </div>
          <div className="item">
            <strong>E-mail:</strong> {formPerson.email}
          </div>
          <div className="item">
            <strong>CPF:</strong> {formatCpf(formPerson.cpf)}
          </div>
          <div className="item">
            <strong>Data de Nascimento:</strong> {formPerson.dateBirth}
          </div>
          <div className="item">
            <strong>phone:</strong> {formPerson.phone}
          </div>
        </div>
      </div>
      <div className="box-show-info">
        <label > Endereço</label>
        <div className="title">
          <div>Endereço</div>
          <div className="seta">
            <ion-icon
              name={
                showAddressData ? "chevron-up-outline" : "chevron-down-outline"
              }
              onClick={() => setShowAddressData(!showAddressData)}
            ></ion-icon>
          </div>
        </div>
        <div className={"itens"+(showAddressData ? " close" : "")}>
          <div className="item">
            <strong>CEP:</strong> {formatCep(formPerson.cep)}
          </div>
          <div className="item">
            <strong>street:</strong> {formPerson.street}
          </div>
          <div className="item">
            <strong>state:</strong> {formPerson.state}
          </div>
          <div className="item">
            <strong>city:</strong> {formPerson.city}
          </div>
          <div className="item">
            <strong>Número:</strong> {formPerson.number}
          </div>
          <div className="item">
            <strong>neighborhood:</strong> {formPerson.neighborhood}
          </div>
          <div className="item">
            <strong>complement:</strong> {formPerson.complement}
          </div>
        </div>
      </div>

      <div className="campo-form">
        <label htmlFor="nickname">Nickname</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="Digite o seu primeiro nickname!"
          value={formPerson.nickname}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
