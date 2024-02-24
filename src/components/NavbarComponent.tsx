import { Box, ButtonBase, Card } from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const Navbar: React.FC = () => {
    return (
        <Card sx={{ padding: 2 }}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <ButtonBase sx={{ width: '35px', padding: 0.7 }} >
                    <ColorLensIcon />
                </ButtonBase>
                <ButtonBase sx={{ width: '100px' }} > Novo </ButtonBase>
                <ButtonBase sx={{ width: '35px', padding: 0.7 }} >
                    <InfoIcon />
                </ButtonBase>
            </Box>
        </Card>
    )
}

export default Navbar