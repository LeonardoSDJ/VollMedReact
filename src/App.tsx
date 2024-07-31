import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FormularioMedico from './components/FormularioMedico';
import ListagemDeMedicos from './components/ListagemDeMedicos';
import Home from './pages/Home';
import CadastroPacientes from './pages/CadastroPacientes';
import AgendamentoTarefas from './pages/AgendamentoTarefas';
import './styles/App.css';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const fetchMedicos = () => {
    console.log('Buscando médicos...');
  };

  return (
    <Router>
      <div className="app">
        <Header toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Sidebar className={sidebarOpen ? 'show' : ''} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastrar-medico" element={<FormularioMedico fetchMedicos={fetchMedicos} />} />
              <Route path="/listar-medicos" element={<ListagemDeMedicos />} />
              <Route path="/cadastro-pacientes" element={<CadastroPacientes />} />
              <Route path="/agendamento-tarefas" element={<AgendamentoTarefas />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
