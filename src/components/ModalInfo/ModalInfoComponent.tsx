import { Box, Card, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import InfoIcon from '@mui/icons-material/Info';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalInfoComponent: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const backgroundStyle = {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: '1000',
    };

    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        borderRadius: '10px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '650px',
        '@media (max-width: 650px)': {
            width: '90%',
        },
        '::-webkit-scrollbar': {
            width: '10px',
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: '#01936E',
            borderRadius: '15px',
        },
    };

    // Detectar cliques fora da modal para fechá-la
    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    // Adicionar e remover event listener quando a modal é montada e desmontada
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <>
            {isOpen && (
                <Box sx={backgroundStyle}>
                    <Box ref={modalRef} sx={modalStyle} >
                        <Card >
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2} >
                                <InfoIcon fontSize='large' color='secondary' />
                                <Typography fontSize={18}>
                                    Olá! Fico muito feliz em ter você aqui. <strong className="strongColor">:)</strong> <br /><br />

                                    Primeiramente, esse aplicativo nasceu em um combo de insights, perspectiva de tempo, necessidade de estudo
                                    e de criação de novos projetos. <br /><br />

                                    <strong className="strongColor">Price of Life</strong> é uma ideia de aplicativo que tem como propósito
                                    principal promover uma mudança de perspectiva em relação ao dinheiro, levando os usuários a
                                    considerarem o valor do tempo em suas decisões financeiras. <br /><br />

                                    Ao revelar insights sobre quanto tempo realmente levamos para ganhar o suficiente para adquirir
                                    bens e serviços, desafiamos você a olhar além dos números. Com cada insight fornecido, nosso aplicativo
                                    serve como um lembrete gentil de que o tempo é nosso ativo mais valioso. Não se trata apenas de gerenciar
                                    finanças, mas de cultivar uma vida rica em experiências autênticas, relações significativas e um senso de
                                    bem-estar que transcende o material. <br /><br />

                                    Lembre-se, o aplicativo vai além de uma interface bonitinha e dados valiosos, a experiência
                                    completa se contempla ao saber ler os dados e gerar os próprios insigths de acordo com o contexto
                                    da sua vida, portanto, use com moderação. <br /><br />

                                    Junte-se a nós nesta jornada transformadora, onde cada decisão financeira é uma escolha consciente
                                    para honrar seu tempo, alinhar suas ações com seus valores e abraçar a abundância
                                    de uma vida bem vivida. Porque, no final das contas, a verdadeira riqueza é medida pelos momentos
                                    inestimáveis que dinheiro algum pode comprar. <br /><br />

                                    <Typography fontSize={16} color={'gray'}>
                                        Nota: A funcionalidade de gerar insigths através da IA está desabilitada no momento por gerar custos
                                        ao desenvolvedor. <br /><br />
                                    </Typography>

                                    <Typography fontSize={18} color={'secondary'}>
                                        Developed by, Yuri Kaffer ;)
                                    </Typography>

                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default ModalInfoComponent;
