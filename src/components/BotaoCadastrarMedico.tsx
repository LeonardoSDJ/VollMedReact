import React from 'react';
import Button from '@mui/material/Button';

interface CadastrarMedicoProps {
  onClick: () => void;
}

const CadastrarMedico: React.FC<CadastrarMedicoProps> = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      CADASTRAR MEDICO
    </Button>
  );
};

export default CadastrarMedico;
