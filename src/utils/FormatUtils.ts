// Formatar como moeda em reais
export const formatToCurrency = (value: string) => {
    const numberValue = Number(value.replace(/\D/g, '')) / 100;
    return numberValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export function convertCurrencyStringToNumber(currencyString: string): number {
    // e substitui a vírgula decimal por ponto para conversão correta.
    const numericString = currencyString.replace('R$', '').trim().replace(/\./g, '').replace(',', '.');
    // Converte a string limpa para número, então multiplica por 100 para converter em centavos
    const numberInCents = Math.round(parseFloat(numericString) * 100);
    return numberInCents;
}

export function convertTimeStringToMilliseconds(timeString: string) {
    // Separa a string de tempo em horas e minutos
    const [hours, minutes] = timeString.split(':').map(Number);
    // Converte horas e minutos para milissegundos
    const hoursInMilliseconds = hours * 60 * 60 * 1000;
    const minutesInMilliseconds = minutes * 60 * 1000;
    // Soma os milissegundos das horas e minutos
    const totalMilliseconds = hoursInMilliseconds + minutesInMilliseconds;
    return totalMilliseconds;
}