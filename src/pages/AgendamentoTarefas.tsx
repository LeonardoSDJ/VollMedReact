import React from 'react';
import { Container, Typography } from '@mui/material';

const AgendamentoTarefas: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="div" sx={{ mt: 5 }}>
        Agendamento de Tarefas
      </Typography>
    </Container>
  );
};

export default AgendamentoTarefas;
