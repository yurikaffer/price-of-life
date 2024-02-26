'use client'
import { useGlobalContext } from '@/context/GlobalContext';
import { Box, ButtonBase, useTheme  } from '@mui/material';
import React from 'react';

const ResultButtons: React.FC = () => {
    const { resumeSelected, setResumeSelected } = useGlobalContext();
    const theme = useTheme();
    
    const handleClick = () => {
        setResumeSelected(false)
    }

    const handleClickResume = () => {
        setResumeSelected(true)
    }

    const ResumeStyle = {
        backgroundColor: resumeSelected ? '#EEE8D9' : theme.palette.primary.dark,
        color: resumeSelected ? theme.palette.primary.dark : '#EEE8D9',
    }

    const mainStyle = {
        backgroundColor: resumeSelected ? theme.palette.primary.dark : '#EEE8D9',
        color: resumeSelected ? '#EEE8D9' : theme.palette.primary.dark,
    }

    return (
        <Box display={'flex'} gap={2} minWidth={'250px'} justifyContent={'center'} margin={'auto'} >
            <ButtonBase sx={mainStyle} onClick={handleClick}> Visão Geral </ButtonBase>
            <ButtonBase sx={ResumeStyle} onClick={handleClickResume}> Resumo </ButtonBase>
        </Box>
    )
}

export default ResultButtons