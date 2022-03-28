import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled(Link)`
  color: #fff;
  padding: 0em 0.5em;
  text-decoration: none;
`;

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LinkStyled to="/">
            <Typography>Inicio</Typography>
          </LinkStyled>
          <LinkStyled to="/doc">
            <Typography>Documentación</Typography>
          </LinkStyled>
          <LinkStyled to="/tutorial">
            <Typography>Tutoriales</Typography>
          </LinkStyled>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
