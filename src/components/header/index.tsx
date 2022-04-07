import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FC } from 'react';
import ToggleThemeMode from './components/toogleThemeMode';
import { useCalculateByThemeMode } from '../../context/themeMode';

interface AppBarStyledProps {
  $backgrounColor: string;
}

const AppBarStyled = styled(AppBar)<AppBarStyledProps>`
  background-color: ${props => props.$backgrounColor};
`;

const LinkStyled = styled(Link)`
  color: #fff;
  padding: 0em 0.5em;
  text-decoration: none;
`;

const MenuWrapper = styled.div`
  display: flex;
`;

const ToolbarStyled = styled(Toolbar)`
  justify-content: space-between;
`;

const Header: FC = () => {
  const calc = useCalculateByThemeMode();

  return (
    <AppBarStyled position="sticky" $backgrounColor={calc({ dark: '#000', light: '#fff' })}>
      <Container maxWidth="xl">
        <ToolbarStyled disableGutters>
          <MenuWrapper>
            <LinkStyled to="/">
              <Typography>Inicio</Typography>
            </LinkStyled>
            <LinkStyled to="/docs">
              <Typography>Documentación</Typography>
            </LinkStyled>
            <LinkStyled href="https://github.com/armandojes/simple-hook-form" as="a">
              <Typography>Github</Typography>
            </LinkStyled>
          </MenuWrapper>
          <ToggleThemeMode />
        </ToolbarStyled>
      </Container>
    </AppBarStyled>
  );
};

export default Header;
