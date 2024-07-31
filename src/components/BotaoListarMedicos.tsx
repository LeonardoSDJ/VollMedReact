import React from 'react';
import Button from '@mui/material/Button';

interface ListarMedicosProps {
  onClick: () => void;
}

const ListarMedicos: React.FC<ListarMedicosProps> = ({ onClick }) => {
  return (
    <div style={{ textAlign: 'start' }}>
      <Button variant="contained" color="success" size="small" onClick={onClick}>
        LISTAR MÉDICOS
      </Button>
    </div>
  );
};

export default ListarMedicos;
