'use client'
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { Box, InputBase, Typography } from '@mui/material';
import { z } from 'zod';

// Esquema Zod para validar a carga horária diária como HH:mm
const workHoursSchema = z.string().nonempty({
    message: "O campo não pode estar vazio",
}).regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "Formato ou hora inválida.",
});

const InputWorkHours = forwardRef((props, ref) => {
    const { workHours, setWorkHours } = useGlobalContext();
    const [msgErrorWorkHours, setMsgErrorWorkHours] = useState('')

    useImperativeHandle(ref, () => ({
        validateWorkHours() {
            // Validação da carga horária diária
            const workHoursResult = workHoursSchema.safeParse(workHours);
            if (!workHoursResult.success) {
                setMsgErrorWorkHours(workHoursResult.error.issues[0].message || '');
                return false;
            }
            return true;
        }
    }));

    const handleWorkHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMsgErrorWorkHours('')
        const { value } = event.target;
        let cleanValue = value.replace(/\D/g, ''); // Remove tudo que não é dígito
        // Se tiver mais de 2 dígitos, insere ":" entre os dois primeiros e os dois últimos dígitos
        if (cleanValue.length > 2) {
            cleanValue = cleanValue.substring(0, 2) + ':' + cleanValue.substring(2, 4);
        }
        cleanValue === '00:00' ? setWorkHours('') : setWorkHours(cleanValue);
    };

    return (
        <Box mb={1}>
            <Typography ml={1} fontSize={16}>Carga horária diária (hh:mm):</Typography>
            <InputBase
                    value={workHours}
                    onChange={handleWorkHoursChange}
                    inputProps={{ maxLength: 5 }}
                    type="text"
                />
                {msgErrorWorkHours && (<Typography ml={1} fontSize={14} color={'red'}>{msgErrorWorkHours}</Typography>)}
        </Box>
    );
});

export default InputWorkHours;