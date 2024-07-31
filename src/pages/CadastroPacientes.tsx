import React from 'react';
import { Container, Typography } from '@mui/material';

const CadastroPacientes: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="div" sx={{ mt: 5 }}>
        Cadastro de Pacientes
      </Typography>
    </Container>
  );
};

export default CadastroPacientes;
