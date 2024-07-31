import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import '../styles/Sidebar.css';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isMedicosOpen, setMedicosOpen] = useState(false);
  const [isPacientesOpen, setPacientesOpen] = useState(false);

  const toggleMedicos = () => setMedicosOpen(!isMedicosOpen);
  const togglePacientes = () => setPacientesOpen(!isPacientesOpen);

  return (
    <div className={`sidebar ${className}`}>
      <List component="nav">
        <ListItem button onClick={toggleMedicos}>
          <ListItemText primary="Médicos" />
          {isMedicosOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        </ListItem>
        <Collapse in={isMedicosOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem component={Link} to="/cadastrar-medico">
              <ListItemText primary="Cadastrar Médico" />
            </ListItem>
            <ListItem component={Link} to="/listar-medicos">
              <ListItemText primary="Listar Médicos" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={togglePacientes}>
          <ListItemText primary="Pacientes" />
          {isPacientesOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        </ListItem>
        <Collapse in={isPacientesOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem component={Link} to="/cadastrar-paciente">
              <ListItemText primary="Cadastrar Paciente" />
            </ListItem>
            <ListItem component={Link} to="/listar-pacientes">
              <ListItemText primary="Listar Pacientes" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Sidebar;
