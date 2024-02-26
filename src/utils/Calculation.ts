import { convertCurrencyStringToNumber, convertTimeStringToMilliseconds } from "./FormatUtils";

export function calculatePurchaseTime(salary: string, workHours: string, cost: string) {
  // Converte string de salário em centavos para número
  const salaryCents = convertCurrencyStringToNumber(salary);
  console.log('salaryCents: ', salaryCents)

  // Converte carga horária diária de string para milissegundos
  const workHoursMs = convertTimeStringToMilliseconds(workHours);
  console.log('workHoursMs: ', workHoursMs)
  
  // Converte string de custo do item em centavos para número
  const costCents = convertCurrencyStringToNumber(cost);
  console.log('costCents: ', costCents)

  // Converte salário de centavos para reais
  const salaryReais = salaryCents / 100;
  console.log('salaryReais: ', salaryReais)

  // Converte horas trabalhadas de milissegundos para horas
  const hoursWorkedPerDay = workHoursMs / (1000 * 60 * 60);
  console.log('hoursWorkedPerDay: ', hoursWorkedPerDay)

  // Calcula o total de horas trabalhadas no mês
  const totalHoursWorkedPerMonth = hoursWorkedPerDay * 22;
  console.log('totalHoursWorkedPerMonth: ', totalHoursWorkedPerMonth)

  // Calcula o rendimento por hora
  const hourlyEarnings = salaryReais / totalHoursWorkedPerMonth;
  console.log('hourlyEarnings: ', hourlyEarnings)

  // Calcula quantas horas são necessárias para comprar o item, ajustando para reais
  const hoursNeededToPurchase = (costCents / 100) / hourlyEarnings;
  console.log('hoursNeededToPurchase: ', hoursNeededToPurchase);

  const workDaystoPurchase = hoursNeededToPurchase / hoursWorkedPerDay;

  return {
    hourlyEarnings: hourlyEarnings.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    hoursNeededToPurchase: formatTime(hoursNeededToPurchase),
    workDaystoPurchase: formatDaysHoursMinutes(workDaystoPurchase, hoursWorkedPerDay)
  };
}

// Converter horas em formato '00d00h00m'
function formatTime(hours: number) {
  const totalHours = Math.floor(hours);
  const minutesPart = Math.round((hours - totalHours) * 60);

  return `${totalHours}h${minutesPart}m`;
}

// Função ajustada para formatar workDaystoPurchase em '00d00h00m'
function formatDaysHoursMinutes(days: number, hoursPerDay: number) {
  const fullDays = Math.floor(days);
  const remainderDays = days - fullDays;
  const hours = Math.floor(remainderDays * hoursPerDay);
  const minutes = Math.round(((remainderDays * hoursPerDay) - hours) * 60);

  return `${fullDays}d${hours}h${minutes}m`;
}