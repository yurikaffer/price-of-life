export function generatePrompt(
    salary: string,
    workHours: string,
    cost: string,
    numRecorrence: number,
    hourlyIncome: string,
    hoursNeededToPurchase: string,
    workDaystoPurchase: string,
    percentageOfSalary: string,
    annualCostInReais: string,
    annualCostInTime: string,
) {
    let promptRecurrence = ''
    let prompt = `Meu salário mensal é de ${salary}, o item que quero comprar custa ${cost}, 
                    minha carga horária diária é de ${workHours}, meu rendimento por hora é de ${hourlyIncome}, 
                    o custo desse item em tempo de vida é de ${hoursNeededToPurchase}, o custo em tempo de trabalho é de ${workDaystoPurchase}, 
                    esse item custa ${percentageOfSalary}% do meu salário mensal. `;

    if (annualCostInReais && annualCostInTime) {
        prompt = prompt + `meu gasto anual (${numRecorrence} vezes/mês) 
                        é de ${annualCostInReais}, meu gasto anual trabalhando é de ${annualCostInTime}. `

        promptRecurrence = prompt + `Com base nesses dados, me retorne um insight significativo 
                                        a respeito da recorrencia dessa despesa. Seja criativo, traga um dado relevante e gere um impacto.`
    }

    const promptTimeLife = prompt + `Com base nesses dados, me retorne um insight significativo 
                                    a respeito do tempo de vida gasto. Seja criativo, traga um dado relevante e gere um impacto.`

    const promptHourlyIncome = prompt + `Com base nesses dados, me retorne um insight significativo 
                                    a respeito do meu rendimento por hora e horas de trabalho. Seja criativo, traga um dado relevante e gere um impacto.`

    return { promptTimeLife, promptRecurrence, promptHourlyIncome }
};