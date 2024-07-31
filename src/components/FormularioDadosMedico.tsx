import React from 'react';
import { TextField } from '@mui/material';
import SelecionarEspecialidade from './SelecionarEspecialidade';
import { SelectChangeEvent } from '@mui/material';

interface DadosMedicoFormProps {
  nome: string;
  setNome: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  telefone: string;
  setTelefone: (value: string) => void;
  crm: string;
  setCrm: (value: string) => void;
  especialidade: string;
  setEspecialidade: (value: string) => void;
}

const DadosMedicoForm: React.FC<DadosMedicoFormProps> = ({
  nome, setNome, email, setEmail, telefone, setTelefone, crm, setCrm, especialidade, setEspecialidade
}) => {
  const handleEspecialidadeChange = (event: SelectChangeEvent<string>) => {
    setEspecialidade(event.target.value);
  };

  return (
    <>
      <TextField
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        inputProps={{ maxLength: 100 }}
        required
      />

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        inputProps={{ maxLength: 100 }}
        required
      />

      <TextField
        label="Telefone"
        variant="outlined"
        fullWidth
        margin="normal"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        inputProps={{ maxLength: 11 }}
        required
      />

      <TextField
        label="CRM"
        variant="outlined"
        fullWidth
        margin="normal"
        value={crm}
        onChange={(e) => setCrm(e.target.value)}
        inputProps={{ maxLength: 6 }}
        required
      />

      <SelecionarEspecialidade value={especialidade} onChange={handleEspecialidadeChange} />
    </>
  );
};

export default DadosMedicoForm;
