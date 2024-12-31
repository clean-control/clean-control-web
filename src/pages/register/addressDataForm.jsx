import { useState } from "react";
import { formatCep } from "../../utils/format";
import BaseLoader from "../../utils/loader/loader";
import Alert from "../../utils/alert/alert";
import style from "./Register.module.scss"; // Importando o CSS Module

export default function AddressDataForm({ formPerson, setFormPerson }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormPerson({ ...formPerson, [name]: value });
  };

  const setCep = (e) => {
    setFormPerson({ ...formPerson, cep: formatCep(e.target.value) });
  };

  const options = [
    { value: "", label: "Selecione uma opção" },
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];

  const [integrationCEP, setIntegrationCEP] = useState(false);

  const handleCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");

    if (cep.length !== 8) {
      return;
    }

    setIsLoading(true);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setIntegrationCEP(true);
        window.addAlert("CEP encontrado com sucesso!", "success", 5000);

        setIsLoading(false);
        setFormPerson({
          ...formPerson,
          street: data.logradouro,
          state: data.uf,
          city: data.localidade,
          neighborhood: data.bairro,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Erro ao buscar CEP:", error);
        window.addAlert("Erro ao buscar CEP. Tente novamente.", "error", 5000);
      });
  };

  if (!formPerson) {
    return <div>Carregando...</div>; // Exibe uma mensagem de carregamento ou outro fallback
  }
  return (
    <div className={style.contentForms}>
      <div className={style.groupForm}>
        <div className={style.campoForm}>
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="Digite o seu CEP!"
            value={formPerson.cep}
            onChange={setCep}
            onBlur={handleCep}
            maxLength={9}
          />
        </div>
      </div>

      <div className={style.campoForm}>
        <label htmlFor="street">Rua</label>
        <input
          type="text"
          name="street"
          id="street"
          placeholder="Digite o seu endereço!"
          value={formPerson.street}
          onChange={handleChange}
          disabled={integrationCEP}
        />
      </div>

      <div className={`${style.groupForm} ${style.mini}`}>
        <div className={`${style.campoForm} ${style.mini}`}>
          <label htmlFor="state">Estado</label>
          <select
            id="state"
            name="state"
            value={formPerson.state}
            onChange={handleChange}
            disabled={integrationCEP}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={`${style.campoForm} ${style.mini}`}>
          <label htmlFor="number">Número</label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Digite o seu número!"
            value={formPerson.number}
            disabled={false}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={style.campoForm}>
        <label htmlFor="city">Cidade</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Digite a sua cidade!"
          value={formPerson.city}
          onChange={handleChange}
          disabled={integrationCEP}
        />
      </div>

      <div className={style.campoForm}>
        <label htmlFor="neighborhood">Bairro</label>
        <input
          type="text"
          name="neighborhood"
          id="neighborhood"
          placeholder="Digite o seu bairro!"
          value={formPerson.neighborhood}
          disabled={integrationCEP}
          onChange={handleChange}
        />
      </div>

      <div className={style.campoForm}>
        <label htmlFor="complement">Complemento</label>
        <input
          type="text"
          name="complement"
          id="complement"
          placeholder="Digite o seu complemento! (opcional)"
          value={formPerson.complement}
          onChange={handleChange}
        />
      </div>

      <Alert />
      {isLoading && <BaseLoader />}

    </div>
  );
}
