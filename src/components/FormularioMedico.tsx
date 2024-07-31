import React, { useState, FormEvent } from 'react';
import MedicoService, { Medico } from '../services/MedicoService';
import { TextField, Button, InputAdornment, SelectChangeEvent } from '@mui/material';
import { FaSearch, FaSave } from 'react-icons/fa';
import SelecionarEspecialidade from './SelecionarEspecialidade';
// import { CiTextAlignRight } from 'react-icons/ci';
// import { alignProperty } from '@mui/material/styles/cssUtils';

interface FormularioMedicoProps {
  fetchMedicos: () => void;
}

const FormularioMedico: React.FC<FormularioMedicoProps> = ({ fetchMedicos }) => {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [crm, setCrm] = useState<string>('');
  const [especialidade, setEspecialidade] = useState<string>('');
  const [logradouro, setLogradouro] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [uf, setUf] = useState<string>('');
  const [numero, setNumero] = useState<string>('');
  const [complemento, setComplemento] = useState<string>('');
  const [error, setError] = useState<string>('');

  const fetchCepData = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('CEP não encontrado');
      }
      const result = await response.json();
      if (result.erro) {
        throw new Error('CEP não encontrado');
      }
      setLogradouro(result.logradouro);
      setBairro(result.bairro);
      setCidade(result.localidade);
      setUf(result.uf);
      setError('');
    } catch (error) {
      setError('CEP não encontrado');
      setLogradouro('');
      setBairro('');
      setCidade('');
      setUf('');
    }
  };

  const handleCepSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (cep) {
      fetchCepData(cep);
    }
  };

  const handleEspecialidadeChange = (event: SelectChangeEvent<string>) => {
    setEspecialidade(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const medico: Medico = {
      nome,
      email,
      telefone,
      crm,
      especialidade,
      endereco: {
        logradouro,
        bairro,
        cep,
        cidade,
        uf,
        numero,
        complemento,
      },
    };

    try {
      await MedicoService.addMedico(medico);
      fetchMedicos();
      setNome('');
      setEmail('');
      setTelefone('');
      setCrm('');
      setEspecialidade('');
      setLogradouro('');
      setBairro('');
      setCep('');
      setCidade('');
      setUf('');
      setNumero('');
      setComplemento('');
    } catch (error) {
      console.error('Erro ao adicionar médico', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <TextField
          label="CEP"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          inputProps={{ maxLength: 8 }}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={handleCepSubmit}>
                  <FaSearch />
                </Button>
              </InputAdornment>
            ),
          }}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <TextField
          label="Logradouro"
          variant="outlined"
          fullWidth
          margin="normal"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
          inputProps={{ maxLength: 100 }}
          required
        />

        <TextField
          label="Bairro"
          variant="outlined"
          fullWidth
          margin="normal"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          inputProps={{ maxLength: 100 }}
          required
        />

        <TextField
          label="Cidade"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          inputProps={{ maxLength: 100 }}
          required
        />

        <TextField
          label="UF"
          variant="outlined"
          fullWidth
          margin="normal"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
          inputProps={{ maxLength: 2 }}
          required
        />

        <TextField
          label="Número"
          variant="outlined"
          fullWidth
          margin="normal"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          inputProps={{ maxLength: 10 }}
          required
        />

        <TextField
          label="Complemento"
          variant="outlined"
          fullWidth
          margin="normal"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
          inputProps={{ maxLength: 100 }}
        />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '1.25rem', padding:'10px'}}>
          <FaSave />
        </Button>

      </form>
    </div>
  );
};

export default FormularioMedico;
