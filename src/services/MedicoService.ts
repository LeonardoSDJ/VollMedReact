import axios from 'axios';

const API_URL = 'http://localhost:8080/medicos';

export interface Medico {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  crm: string;
  especialidade: string;
  endereco: {
    logradouro: string;
    bairro: string;
    cep: string;
    cidade: string;
    uf: string;
    numero: string;
    complemento: string;
  };
}

const getMedicos = (page = 0, size = 10) => {
  return axios.get(API_URL, {
    params: {
      page,
      size,
    },
  });
};

const addMedico = (medico: Medico) => {
  return axios.post(API_URL, medico);
};

const updateMedico = (medico: Medico) => {
  return axios.put(API_URL, medico);
};

const deleteMedico = (id: number) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Defina o objeto com um nome de variável antes de exportá-lo
const MedicoService = {
  getMedicos,
  addMedico,
  updateMedico,
  deleteMedico,
};

export default MedicoService;
