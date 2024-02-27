'use client'
import { Box } from '@mui/material';
import Navbar from '@/components/NavbarComponent';
import CardForm from '@/components/CardFormComponent';
import ResultButtons from '@/components/ResultButtonsComponent';
import CardResume from '@/components/CardResumeComponent';
import CardResultList from '@/components/CardResultList/CardResultList';

export default function Home() {

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={2}>
      <Box width={'95%'} display={'flex'} flexDirection={'column'} gap={1.5}>

        <Navbar />
        <CardForm />
        <ResultButtons />
        <CardResume/>
        <CardResultList/>



      </Box>
    </Box>
  );
}
