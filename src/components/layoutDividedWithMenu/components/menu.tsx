import { Code } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../constants';

const MenuItemStyled = styled(Link)`
  padding: 0.5em 0em;
  display: flex;
  align-items: center;
  color: #fff;
  & svg {
    margin-right: 0.7em;
    color: ${colors.blueLight};
  }
`;

export interface ImenuItems
  extends Array<{
    location: string;
    label: string;
  }> {}

interface MenuPropsInterface {
  menuItems?: ImenuItems;
}

const Menu: FC<MenuPropsInterface> = ({ menuItems }) => (
  <Box>
    <Typography fontSize="1.1em" fontWeight="bold" align="center" color="#fff">
      Menu
    </Typography>
    <Box marginTop="1em">
      {menuItems &&
        menuItems.map(item => (
          <MenuItemStyled to={item.location}>
            <Code />
            <Typography>{item.label}</Typography>
          </MenuItemStyled>
        ))}
    </Box>
  </Box>
);

export default Menu;
