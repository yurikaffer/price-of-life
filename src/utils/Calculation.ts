import {
  convertCurrencyStringToNumber,
  convertTimeStringToMilliseconds,
  formatDaysHoursMinutes,
  formatTime
} from "./FormatUtils";

export function calculateData(salaryStr: string, workHoursStr: string, itemCostStr: string, itemQuantityPerMonth: number) {
  const salaryInCents = convertCurrencyStringToNumber(salaryStr);
  const dailyWorkHoursInMs = convertTimeStringToMilliseconds(workHoursStr);
  const itemCostInCents = convertCurrencyStringToNumber(itemCostStr);

  const salaryInReais = salaryInCents / 100;
  const dailyWorkHours = dailyWorkHoursInMs / (1000 * 60 * 60);
  const monthlyWorkHours = dailyWorkHours * 22;

  const hourlyWage = salaryInReais / monthlyWorkHours;
  // Calcula o custo total mensal em Reais, multiplicando o custo unitário (convertido para Reais) pela quantidade mensal
  const totalMonthlyCostInReais = (itemCostInCents * itemQuantityPerMonth) / 100;
  // Calcula quantas horas são necessárias para cobrir o custo total mensal do item
  const hoursToEarnForTotalMonthlyCost = totalMonthlyCostInReais / hourlyWage;
  // Calcula quantos dias de trabalho são necessários para comprar o item mensalmente
  const workDaysToPurchase = hoursToEarnForTotalMonthlyCost / dailyWorkHours;
  // Calcula o gasto anual com o item em Reais
  const annualCostInReais = totalMonthlyCostInReais * 12;

  return {
    hourlyEarnings: hourlyWage.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    hoursNeededToPurchase: formatTime(hoursToEarnForTotalMonthlyCost),
    workDaystoPurchase: formatDaysHoursMinutes(workDaysToPurchase, dailyWorkHours),
    percentageOfSalary: calculateItemCostAsPercentageOfSalary(salaryInCents, itemCostInCents * itemQuantityPerMonth),
    annualCostInReais: annualCostInReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    annualCostInTime: formatDaysHoursMinutes(workDaysToPurchase * 12, dailyWorkHours),
  };
}

function calculateItemCostAsPercentageOfSalary(salaryInCents: number, itemCostInCents: number) {
  const percentageOfSalary = (itemCostInCents / salaryInCents) * 100;
  return percentageOfSalary.toFixed(2);
}