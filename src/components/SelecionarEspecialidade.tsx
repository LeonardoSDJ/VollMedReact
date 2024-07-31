import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface SelecionarEspecialidadeProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

const SelecionarEspecialidade: React.FC<SelecionarEspecialidadeProps> = ({ value, onChange }) => {
  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel>Especialidade</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label="Especialidade"
      >
        <MenuItem value=""><em>SELECIONE A ESPECIALIDADE</em></MenuItem>
        <MenuItem value="ORTOPEDIA">ORTOPEDIA</MenuItem>
        <MenuItem value="CARDIOLOGIA">CARDIOLOGIA</MenuItem>
        <MenuItem value="DERMATOLOGIA">DERMATOLOGIA</MenuItem>
        <MenuItem value="GINECOLOGIA">GINECOLOGIA</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelecionarEspecialidade;
