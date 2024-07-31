import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

interface HeaderProps {
  toggleSidebar: () => void;
}

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ffffff',
  color: '#000000',
});

const ProjectNameLink = styled(RouterLink)({
  flexGrow: 1,
  textDecoration: 'none',
  color: 'inherit',
});

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          sx={{ display: { lg: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          <ProjectNameLink to="/">Voll Med</ProjectNameLink>
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Página Inicial
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
