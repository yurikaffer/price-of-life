import { useGlobalContext } from '@/context/GlobalContext';
import { Card, Typography } from '@mui/material';
import React from 'react';

const CardResume: React.FC = () => {
    const { hourlyIncome, hoursNeededToPurchase, resumeSelected, workDaystoPurchase } = useGlobalContext();
    if (resumeSelected && hourlyIncome && hoursNeededToPurchase && workDaystoPurchase) {
        return (
            <Card sx={{ padding: 2 }}>
                <Typography fontSize={20} mb={1}> Resumo do Impacto Financeiro </Typography>
                <Typography fontSize={16}> Rendimento por hora: {hourlyIncome} </Typography>
                <Typography fontSize={16}> Custo em tempo de vida: {hoursNeededToPurchase} </Typography>
                <Typography fontSize={16}> Custo em tempo de trabalho: {workDaystoPurchase} </Typography>
    
    
                
            </Card>
        )
    }
}

export default CardResume