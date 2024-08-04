import React, { useState, FormEvent } from 'react';
import Container from '@mui/material/Container';
import UsuarioService, { Usuario } from '../services/UsuarioService';
import { TextField, Button } from '@mui/material';
import { FaSave } from 'react-icons/fa';

interface FormularioUsuarioProps {
  fetchUsuario: () => void;
}

const FormularioUsuario: React.FC<FormularioUsuarioProps> = ({ fetchUsuario }): React.ReactElement => {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    
    const novoUsuario: Usuario = {
      usuario,
      senha,
    };

    try {
      await UsuarioService.addUsuario(novoUsuario);
      fetchUsuario();
      setUsuario('');
      setSenha('');
      setError(null);
    } catch (error) {
      console.error('Erro ao cadastrar usuário', error);
      setError('Erro ao cadastrar usuário');
    }
  };

  return (
    <Container>
 <div >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Usuário"
          variant="outlined"
          fullWidth
          margin="normal"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          inputProps={{ maxLength: 100 }}
          required
        />

        <TextField
          label="Senha"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          inputProps={{ maxLength: 100 }}
          required
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: '1.25rem', padding: '10px' }}
        >
          <FaSave />
        </Button>
      </form>
    </div>
    </Container>
   
  );
};

export default FormularioUsuario;
