import React, { useEffect, useState } from 'react';
import { CircularProgress, List, ListItem, ListItemText, IconButton, Typography, Container, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import MedicoService, { Medico } from '../services/MedicoService';
// import ListarMedicos from './BotaoListarMedicos';

const MedicoLista: React.FC = () => {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMedicos();
  }, []);

  const fetchMedicos = async () => {
    setLoading(true);
    try {
      const response = await MedicoService.getMedicos();
      setMedicos(response.data.content);
    } catch (error) {
      console.error('Erro ao buscar médicos', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await MedicoService.deleteMedico(id);
      fetchMedicos();
    } catch (error) {
      console.error('Erro ao excluir médico', error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Médicos
      </Typography>
      <Button variant="contained" color="primary" onClick={fetchMedicos}>
        Atualizar Lista
      </Button>
      <List>
        {medicos.map((medico) => (
          <ListItem key={medico.id} divider>
            <ListItemText
              primary={medico.nome}
              secondary={medico.especialidade}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(medico.id!)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MedicoLista;
