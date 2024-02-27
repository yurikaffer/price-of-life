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

// Converter horas em formato '00d00h00m'
export function formatTime(hours: number) {
    const totalHours = Math.floor(hours);
    const minutesPart = Math.round((hours - totalHours) * 60);

    return `${totalHours}h ${minutesPart}m `;
}

// Função ajustada para formatar workDaystoPurchase em '00d00h00m'
export function formatDaysHoursMinutes(days: number, hoursPerDay: number) {
    const fullDays = Math.floor(days);
    const remainderDays = days - fullDays;
    const hours = Math.floor(remainderDays * hoursPerDay);
    const minutes = Math.round(((remainderDays * hoursPerDay) - hours) * 60);

    if (fullDays > 0) {
        return `${fullDays}d ${hours}h ${minutes}m `;
    } else {
        return `${hours}h ${minutes}m `;
    }
}