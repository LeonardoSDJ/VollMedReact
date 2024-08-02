import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:8080';// Variável de ambiente para configurar a URL da API

interface LoginResponse {
  token: string;
  // Adicione outros campos da resposta, se existirem
}

const login = (login: string, senha: string): Promise<AxiosResponse<LoginResponse>> => {
  return axios.post(`${API_URL}/login`, {
    login,
    senha,
  }).catch(error => {
    // Aqui você pode lidar com erros específicos, como exibir uma mensagem ao usuário
    console.error('Erro durante o login', error);
    throw error; // Repropaga o erro para que possa ser tratado no componente
  });
};

export default {
  login,
};
