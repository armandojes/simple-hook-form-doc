import { Close, Menu } from '@mui/icons-material';
import { Box, SwipeableDrawer, Toolbar, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../constants';

const MenuStyled = styled(Menu)`
  color: ${props => (props.theme.darkMode ? colors.white : colors.blackLight)};
`;

const Wrapper = styled.div`
  background-color: ${props => (props.theme.darkMode ? colors.blackLight : colors.white)};
  height: 100vh;
  min-width: 70vw;
  box-sizing: border-box;
  padding: 1em;
`;

const MenuIttem = styled(Link)`
  color: ${props => (props.theme.darkMode ? colors.white : colors.blackLight)};
  padding: 0.5em 0em;
  display: block;
`;

const MenuMobile: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleToggle = () => setOpen(prev => !prev);

  return (
    <>
      <MenuStyled onClick={handleToggle} as={open ? Close : Menu} />
      <SwipeableDrawer open={open} onClose={handleClose} onOpen={handleOpen}>
        <Box onClick={handleClose}>
          <Toolbar />
          <Wrapper>
            <MenuIttem to="/">
              <Typography variant="h6">Inicio</Typography>
            </MenuIttem>
            <MenuIttem to="/docs">
              <Typography variant="h6">Documentacion</Typography>
            </MenuIttem>
            <MenuIttem as="a" href="https://github.com/armandojes/simple-hook-form" target="_blank">
              <Typography variant="h6">Github</Typography>
            </MenuIttem>
          </Wrapper>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default MenuMobile;
