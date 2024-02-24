import { Card, Typography } from '@mui/material';
import React from 'react';

const CardResults: React.FC = () => {
    return (
        <Card sx={{ padding: 2 }}>
            <Typography fontSize={22} mb={1}> Rendimento por hora </Typography>
            <Typography fontSize={16}> Seu rendimento por hora é de R$X. Cada hora de trabalho lhe proporciona esse valor para gastar ou economizar. Ao avaliar o custo do item, você está trocando Y horas de trabalho pelo valor que ele oferece. </Typography>
        </Card>
    )
}

export default CardResults