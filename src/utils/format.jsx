
export default function formatCpf(value) {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{2})$/, "$1-$2");
    }

export function formatPhone(value) {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }

export function formatCep(value) {
    return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
    }

export function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    }

export function formatPercentage(value) {
    return value.toLocaleString("pt-BR", {
        style: "percent",
        minimumFractionDigits: 2,
    });
    }

export function formatCnpj(value) {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }

export function formatCpfCnpj(value) {
    if (value.length > 11) {
        return formatCnpj(value);
    }
    return formatCpf(value);
    }

    