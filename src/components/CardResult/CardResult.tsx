import { Card, Typography } from '@mui/material';
import React from 'react';

interface CardResumeProps {
    title: string;
    children: React.ReactNode;
}

const CardResult: React.FC<CardResumeProps> = ({ title, children }) => {
    return (
        <Card sx={{ padding: 2 }}>
            <Typography fontSize={20} mb={1}>{title}</Typography>
            <Typography fontSize={16} component="div">
                {children}
            </Typography>
        </Card>
    );
}

export default CardResult;
