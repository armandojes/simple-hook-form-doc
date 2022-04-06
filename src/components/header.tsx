import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FC } from 'react';

const LinkStyled = styled(Link)`
  color: #fff;
  padding: 0em 0.5em;
  text-decoration: none;
`;

const ToolbarStyled = styled(Toolbar)`
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Header: FC = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <ToolbarStyled disableGutters>
          <LinkStyled to="/">
            <Typography>Inicio</Typography>
          </LinkStyled>
          <LinkStyled to="/docs">
            <Typography>Documentación</Typography>
          </LinkStyled>
          <LinkStyled href="https://github.com/armandojes/simple-hook-form" as="a">
            <Typography>Github</Typography>
          </LinkStyled>
        </ToolbarStyled>
      </Container>
    </AppBar>
  );
};

export default Header;
