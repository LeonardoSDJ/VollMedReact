import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FormularioMedico from './components/FormularioMedico';
import ListagemDeMedicos from './components/ListagemDeMedicos';
import Home from './pages/Home';
import CadastroPacientes from './pages/CadastroPacientes';
import AgendamentoTarefas from './pages/AgendamentoTarefas';
import FormularioUsuario from './pages/FormularioUsuario';
import SignIn from './pages/Login';
import './styles/App.css';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const auth = !!localStorage.getItem('token');
    console.log('Usuário autenticado:', auth); // Verificação de autenticação
    setIsAuth(auth);
  }, []); // Este efeito será chamado apenas uma vez no início

  return (
    <Router>
      <div className="app">
        {isAuth && <Header toggleSidebar={toggleSidebar} />}
        <div className="main-content">
          {isAuth && <Sidebar className={sidebarOpen ? 'show' : ''} />}
          <div className="content">
            <Routes>
              <Route path="/login" element={<SignIn onLogin={() => setIsAuth(true)} />} />
              <Route path="/cadastro-usuario" element={<FormularioUsuario fetchUsuario={() => {}} />} />
              <Route path="/" element={isAuth ? <Home /> : <Navigate to="/login" />} />
              <Route path="/cadastrar-medico" element={isAuth ? <FormularioMedico fetchMedicos={() => {}} /> : <Navigate to="/login" />} />
              <Route path="/listar-medicos" element={isAuth ? <ListagemDeMedicos /> : <Navigate to="/login" />} />
              <Route path="/cadastro-pacientes" element={isAuth ? <CadastroPacientes /> : <Navigate to="/login" />} />
              <Route path="/agendamento-tarefas" element={isAuth ? <AgendamentoTarefas /> : <Navigate to="/login" />} />
              <Route path="*" element={<Navigate to="/" />} /> {/* Fallback para a página inicial */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
