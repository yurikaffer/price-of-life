'use client'
import { Box, ButtonBase, Card } from '@mui/material';
import React, { useRef } from 'react';
import CheckBoxComponent from './CheckBox/CheckBoxComponent';
import InputNumberComponent from './InputNumber/InputNumberComponent';
import InputSalary from './InputSalary/InputSalary';
import InputCost from './InputCost/InputCost';
import InputWorkHours from './InputWorkHours/InputWorkHours';
import { useGlobalContext } from '@/context/GlobalContext';
import { calculatePurchaseTime } from '@/utils/Calculation';

const CardForm: React.FC = () => {
    const { isChecked, numRecorrence, salary, cost, workHours, setHourlyIncome, setHoursNeededToPurchase, setWorkDaystoPurchase } = useGlobalContext();

    const inputSalaryRef = useRef<{ validateSalary: () => boolean } | null>(null);
    const inputCostRef = useRef<{ validateCost: () => boolean } | null>(null);
    const inputWorkHoursRef = useRef<{ validateWorkHours: () => boolean } | null>(null);
    
    const validateForm = () => {
        // Cria um array com todas as refs
        const validations = [
            inputSalaryRef.current?.validateSalary(),
            inputCostRef.current?.validateCost(),
            inputWorkHoursRef.current?.validateWorkHours(),
        ];
        // Verifica se todas as validações são verdadeiras
        const isValid = validations.every(validation => validation === true);
        return isValid;
    };

    const onClick = () => {
        if (validateForm()) {
            //console.log('isChecked ',isChecked)
            //console.log('numRecorrence ', numRecorrence)
            //console.log('salary ',convertCurrencyStringToNumber(salary))
            //console.log('cost ',convertCurrencyStringToNumber(cost))
            //console.log('workHours ',convertTimeStringToMilliseconds(workHours))

            const calcData = calculatePurchaseTime(salary, workHours, cost)
            setHourlyIncome(calcData.hourlyEarnings)
            setHoursNeededToPurchase(calcData.hoursNeededToPurchase)
            setWorkDaystoPurchase(calcData.workDaystoPurchase)


        }
    };

    return (
        <Card>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
                <InputSalary ref={inputSalaryRef}/>
                <InputCost ref={inputCostRef}/>
                <InputWorkHours ref={inputWorkHoursRef}/>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mb={1}>
                    <CheckBoxComponent />
                    <InputNumberComponent />
                </Box>
                <ButtonBase onClick={onClick}> Confirmar </ButtonBase>
            </Box>
        </Card>
    );
};

export default CardForm;



