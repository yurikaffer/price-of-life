'use client'
import { Box, ButtonBase, Card } from '@mui/material';
import React, { useRef } from 'react';
import CheckBoxComponent from './CheckBox/CheckBoxComponent';
import InputNumberComponent from './InputNumber/InputNumberComponent';
import InputSalary from './InputSalary/InputSalary';
import InputCost from './InputCost/InputCost';
import InputWorkHours from './InputWorkHours/InputWorkHours';
import { useGlobalContext } from '@/context/GlobalContext';
import { calculateData } from '@/utils/Calculation';

const CardForm: React.FC = () => {
    const { numRecorrence, 
            salary, 
            cost, 
            workHours, 
            setHourlyIncome, 
            setHoursNeededToPurchase, 
            setWorkDaystoPurchase, 
            setPercentageOfSalary,
            setAnnualCostInReais,
            setAnnualCostInTime,
            isChecked
        } = useGlobalContext();

    const inputSalaryRef = useRef<{ validateSalary: () => boolean } | null>(null);
    const inputCostRef = useRef<{ validateCost: () => boolean } | null>(null);
    const inputWorkHoursRef = useRef<{ validateWorkHours: () => boolean } | null>(null);
    
    const validateForm = () => {
        const validations = [
            inputSalaryRef.current?.validateSalary(),
            inputCostRef.current?.validateCost(),
            inputWorkHoursRef.current?.validateWorkHours(),
        ];
        return validations.every(validation => validation === true);
    };

    const onClick = () => {
        if (validateForm()) {
            const calcData = calculateData(salary, workHours, cost, numRecorrence)
            setHourlyIncome(calcData.hourlyEarnings)
            setHoursNeededToPurchase(calcData.hoursNeededToPurchase)
            setWorkDaystoPurchase(calcData.workDaystoPurchase)
            setPercentageOfSalary(calcData.percentageOfSalary)
            if (isChecked) {
                setAnnualCostInReais(calcData.annualCostInReais)
                setAnnualCostInTime(calcData.annualCostInTime)
            }
        }
    };

    return (
        <Card>
            <Box display={'flex'} flexDirection={'column'}>
                <InputSalary ref={inputSalaryRef}/>
                <InputCost ref={inputCostRef}/>
                <InputWorkHours ref={inputWorkHoursRef}/>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={2}>
                    <CheckBoxComponent />
                    <InputNumberComponent />
                </Box>
                <ButtonBase onClick={onClick}> Confirmar </ButtonBase>
            </Box>
        </Card>
    );
};

export default CardForm;



