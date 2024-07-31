import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface EnderecoFormProps {
  logradouro: string;
  setLogradouro: (value: string) => void;
  bairro: string;
  setBairro: (value: string) => void;
  cep: string;
  setCep: (value: string) => void;
  cidade: string;
  setCidade: (value: string) => void;
  uf: string;
  setUf: (value: string) => void;
  numero: string;
  setNumero: (value: string) => void;
  complemento: string;
  setComplemento: (value: string) => void;
  error: string;
  handleCepSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const EnderecoForm: React.FC<EnderecoFormProps> = ({
  logradouro, setLogradouro, bairro, setBairro, cep, setCep, cidade, setCidade, uf, setUf,
  numero, setNumero, complemento, setComplemento, error, handleCepSubmit
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="CEP"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            inputProps={{ maxLength: 8, pattern: "\\d*" }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" onClick={handleCepSubmit} fullWidth>
            BUSCAR CEP
          </Button>
        </Grid>
        {error && <Grid item xs={12}><p style={{ color: 'red' }}>{error}</p></Grid>}
        <Grid item xs={12}>
          <TextField
            label="Logradouro"
            type="text"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            inputProps={{ maxLength: 100 }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Bairro"
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            inputProps={{ maxLength: 100 }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Cidade"
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            inputProps={{ maxLength: 100 }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="UF"
            type="text"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            inputProps={{ maxLength: 2 }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Número"
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            inputProps={{ maxLength: 10 }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Complemento"
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            inputProps={{ maxLength: 100 }}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default EnderecoForm;
