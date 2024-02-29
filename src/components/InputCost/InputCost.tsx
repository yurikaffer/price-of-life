'use client'
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { InputBase, Typography } from '@mui/material';
import { z } from 'zod';
import { formatToCurrency } from '@/utils/FormatUtils';

const currencySchema = z.string().nonempty({
    message: "O campo não pode estar vazio",
});

const InputCost = forwardRef((props, ref) => {
    const { cost, setCost } = useGlobalContext();
    const [msgErrorCost, setMsgErrorCost] = useState('')

    useImperativeHandle(ref, () => ({
        validateCost() {
            // Validação do custo
            const costResult = currencySchema.safeParse(cost);
            if (!costResult.success) {
                setMsgErrorCost(costResult.error.issues[0].message || '');
                return false;
            }
            return true;
        }
    }));

    const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsgErrorCost('')
        const formattedValue = formatToCurrency(e.target.value);
        if (formattedValue === 'R$ 0,00') {
            setCost('')
        } else {
            setCost(formattedValue);
        }
    };

    return (
        <>
            <Typography ml={1} fontSize={16}>Custo do item:</Typography>
            <InputBase
                value={cost}
                onChange={handleCostChange}
                inputMode='numeric'
                type="text" 
            />
            {msgErrorCost && (<Typography ml={1} fontSize={14} color={'red'}>{msgErrorCost}</Typography>)}
        </>

    );
});

InputCost.displayName = 'InputCost';
export default InputCost;