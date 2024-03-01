'use client'
import { Box } from '@mui/material';
import Navbar from '@/components/Navbar/NavbarComponent';
import CardForm from '@/components/CardForm/CardFormComponent';
import ResultButtons from '@/components/ResultButtons/ResultButtonsComponent';
import CardResume from '@/components/CardResume/CardResumeComponent';
import CardResultList from '@/components/CardResultList/CardResultList';
import CardAiResultList from '@/components/CardResultList/CardAiResultList';

export default function Home() {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={2}>
      <Box width={'95%'} display={'flex'} flexDirection={'column'} gap={1.5} maxWidth={'700px'}>
        <Navbar />
        <CardForm />
        <ResultButtons />
        <CardResume />
        <CardResultList />
        <CardAiResultList />
      </Box>
    </Box>
  );
}
