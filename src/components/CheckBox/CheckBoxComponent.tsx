'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import './CheckBoxStyles.css'
import { useGlobalContext } from '../../context/GlobalContext';

const CheckBoxComponent: React.FC = () => {
  const { isChecked, handleCheckboxChange } = useGlobalContext();

  return (
    <Box display={'flex'} gap={1} alignItems={'center'}>
      <label className="container">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
        <div className="checkmark"></div>
      </label>
      <Typography > Despesa recorrente? </Typography>
    </Box>
  );
};

export default CheckBoxComponent;