import { useGlobalContext } from '@/context/GlobalContext';
import { Card, Typography } from '@mui/material';
import React from 'react';

const CardResume: React.FC = () => {
    const { hourlyIncome,
        hoursNeededToPurchase,
        resumeSelected,
        workDaystoPurchase,
        percentageOfSalary,
        annualCostInReais,
        annualCostInTime,
        numRecorrence
    } = useGlobalContext();

    if (resumeSelected && hourlyIncome && hoursNeededToPurchase && workDaystoPurchase && percentageOfSalary) {
        return (
            <Card sx={{
                padding: 2,
                animation: 'fade-in-scale 0.7s',
                '@keyframes fade-in-scale': {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(0.9)'
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'scale(1)'
                    }
                }
            }}>
                <Typography fontSize={20} mb={1}> Resumo do Impacto Financeiro </Typography>
                <Typography fontSize={16}> Rendimento por hora: <strong className="strongColor">{hourlyIncome}</strong> </Typography>
                <Typography fontSize={16}> Custo em tempo de vida: <strong className="strongColor"> {hoursNeededToPurchase}</strong> </Typography>
                <Typography fontSize={16}> Custo em tempo de trabalho:<strong className="strongColor"> {workDaystoPurchase} </strong></Typography>
                <Typography fontSize={16}> Porcentagem do seu salário: <strong className="strongColor">{percentageOfSalary}%</strong></Typography>
                {annualCostInReais && annualCostInTime && (
                    <>
                        <Typography fontSize={16}> Gasto anual ({numRecorrence} vezes/mês): <strong className="strongColor">{annualCostInReais}</strong></Typography>
                        <Typography fontSize={16}> Gasto anual trabalhando: <strong className="strongColor">{annualCostInTime}</strong>  </Typography>
                    </>
                )
                }
            </Card>
        )
    }
}

export default CardResume