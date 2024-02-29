'use client'
import { useGlobalContext } from '@/context/GlobalContext';
import { Box, ButtonBase, useTheme  } from '@mui/material';
import React from 'react';

const ResultButtons: React.FC = () => {
    const { resumeSelected, 
            setResumeSelected, 
            hourlyIncome, 
            hoursNeededToPurchase, 
            setResumeAISelected,
            resumeAISelected,
            overviewSelected, 
            setOverviewSelected
        } = useGlobalContext();
    const theme = useTheme();
    
    const handleClickOverview = () => {
        setOverviewSelected(true)
        setResumeSelected(false)
        setResumeAISelected(false)
    }

    const handleClickResume = () => {
        setResumeSelected(true)
        setResumeAISelected(false)
        setOverviewSelected(false)
    }

    const handleClickResumeAI = () => {
        setResumeAISelected(true)
        setOverviewSelected(false)
        setResumeSelected(false)
    }

    const mainStyle = {
        backgroundColor: overviewSelected ? '#EEE8D9' : theme.palette.primary.dark,
        color: overviewSelected ? theme.palette.primary.dark : '#EEE8D9',
    }

    const ResumeStyle = {
        backgroundColor: resumeSelected ? '#EEE8D9' : theme.palette.primary.dark,
        color: resumeSelected ? theme.palette.primary.dark : '#EEE8D9',
    }

    const AIStyle = {
        backgroundColor: resumeAISelected ? '#EEE8D9' : theme.palette.primary.dark,
        color: resumeAISelected ? theme.palette.primary.dark : '#EEE8D9',
    }

    if (hourlyIncome && hoursNeededToPurchase) {
        return (
            <Box display={'flex'} gap={1} minWidth={'250px'} justifyContent={'center'} margin={'auto'} >
                <ButtonBase sx={mainStyle} onClick={handleClickOverview}> Visão Geral </ButtonBase>
                <ButtonBase sx={ResumeStyle} onClick={handleClickResume}> Resumo </ButtonBase>
                {process.env.NEXT_PUBLIC_USE_OPENAI_API && (
                    <ButtonBase sx={AIStyle} onClick={handleClickResumeAI}> AI Insight </ButtonBase>
                )}
            </Box>
        )
    }
}

export default ResultButtons