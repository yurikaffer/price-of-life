import { useGlobalContext } from '@/context/GlobalContext';
import { Card, Typography } from '@mui/material';
import React from 'react';

const CardResume: React.FC = () => {
    const { hourlyIncome, hoursNeededToPurchase, resumeSelected, workDaystoPurchase, percentageOfSalary, annualCostInReais, annualCostInTime, numRecorrence, isChecked } = useGlobalContext();
    if (resumeSelected && hourlyIncome && hoursNeededToPurchase && workDaystoPurchase && percentageOfSalary) {
        return (
            <Card sx={{ padding: 2 }}>
                <Typography fontSize={20} mb={1}> Resumo do Impacto Financeiro </Typography>
                <Typography fontSize={16}> Rendimento por hora: <strong>{hourlyIncome}</strong> </Typography>
                <Typography fontSize={16}> Custo em tempo de vida: <strong> {hoursNeededToPurchase}</strong> </Typography>
                <Typography fontSize={16}> Custo em tempo de trabalho:<strong> {workDaystoPurchase} </strong></Typography>
                <Typography fontSize={16}> Porcentagem do seu salário: <strong>{percentageOfSalary}%</strong></Typography>
                {annualCostInReais && annualCostInTime && (
                    <>
                        <Typography fontSize={16}> Gasto anual ({numRecorrence} vezes/mês): <strong>{annualCostInReais}</strong></Typography>
                        <Typography fontSize={16}> Gasto anual trabalhando: <strong>{annualCostInTime}</strong>  </Typography>
                    </>
                    )
                }
            </Card>
        )
    }
}

export default CardResume