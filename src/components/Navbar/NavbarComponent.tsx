import { Box, ButtonBase, Card } from '@mui/material';
import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { useGlobalContext } from '@/context/GlobalContext';
import ModalInfoComponent from '../ModalInfo/ModalInfoComponent';

const Navbar: React.FC = () => {
    const { clearStates } = useGlobalContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Card sx={{ padding: 2 }}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <ButtonBase sx={{ width: '35px', padding: 0.7 }} onClick={() => setIsModalOpen(true)}>
                    <InfoIcon />
                </ButtonBase>
                <ButtonBase sx={{ width: '100px' }} onClick={() => clearStates()}> Novo </ButtonBase>
                <Box sx={{ width: '35px', padding: 0.7 }} />
            </Box>
            <ModalInfoComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Card>
    )
}

export default Navbar