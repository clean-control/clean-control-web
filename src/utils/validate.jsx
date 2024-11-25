export const isValidCpf = (cpf) => {
    cpf = cpf.replace(/\D/g, ""); 
    
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;  
    }
  
    const calcularDigito = (base) => {
      const soma = base
        .split("")
        .map((num, i) => parseInt(num) * (base.length + 1 - i))
        .reduce((acc, val) => acc + val, 0);
      const resto = (soma * 10) % 11;
      return resto === 10 ? 0 : resto;
    };
  
    const base = cpf.slice(0, 9);  
    const digito1 = calcularDigito(base);
    const digito2 = calcularDigito(base + digito1);
  
    return digito1 === parseInt(cpf[9]) && digito2 === parseInt(cpf[10]);
  };
  