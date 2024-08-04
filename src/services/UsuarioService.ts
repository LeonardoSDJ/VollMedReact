import axios from "axios";

const API_URL = 'http://localhost:8080/cadastro-usuario';

export interface Usuario{
    id?: number;
    usuario: string;
    senha: string;
}

const addUsuario = (usuario: Usuario) => {
    return axios.post(`${API_URL}`, usuario);
}

const UsuarioService = {
    addUsuario,
};
export default UsuarioService;