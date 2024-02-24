'use client'
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { InputBase, Typography } from '@mui/material';
import { z } from 'zod';
import { formatToCurrency } from '@/utils/FormatUtils';

// Esquema Zod para validar o salário e o custo como valores monetários
const currencySchema = z.string().nonempty({
    message: "O campo não pode estar vazio",
});

const InputSalary = forwardRef((props, ref) => {
    const { salary, setSalary } = useGlobalContext();
    const [msgErrorSalary, setMsgErrorSalary] = useState('')

    useImperativeHandle(ref, () => ({
        validateSalary() {
            const salaryResult = currencySchema.safeParse(salary);
            if (!salaryResult.success) {
                setMsgErrorSalary(salaryResult.error.issues[0].message || '');
                return false;
            }
            setMsgErrorSalary('');
            return true;
        }
    }));

    const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsgErrorSalary('')
        const formattedValue = formatToCurrency(e.target.value);
        if (formattedValue === 'R$ 0,00') {
            setSalary('')
        } else {
            setSalary(formattedValue);
        }
    };

    return (
        <>
            <InputBase
                placeholder='Salário líquido'
                value={salary}
                onChange={handleSalaryChange}
                inputMode='numeric'
                type="text" // Deve ser "text" para permitir a máscara de moeda
            />
            {msgErrorSalary && (<Typography ml={1} fontSize={14} color={'red'}>{msgErrorSalary}</Typography>)}
        </>

    );
});

export default InputSalary;