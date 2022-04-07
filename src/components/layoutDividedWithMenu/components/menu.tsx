import { Code } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { colors } from '../../../constants';

const MenuItemStyled = styled(HashLink)`
  padding: 0.5em 0em;
  display: flex;
  align-items: center;
  color: #fff;
  & svg {
    margin-right: 0.7em;
    color: ${colors.blueLight};
  }
`;

const TypographyStyled = styled(Typography)`
  color: ${props => (props.theme.darkMode ? colors.white : colors.blackLight)};
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
    <TypographyStyled fontSize="1.1em" fontWeight="bold" align="center">
      Menu
    </TypographyStyled>
    <Box marginTop="1em">
      {menuItems &&
        menuItems.map(item => (
          <MenuItemStyled to={item.location} key={item.location} smooth>
            <Code />
            <TypographyStyled>{item.label}</TypographyStyled>
          </MenuItemStyled>
        ))}
    </Box>
  </Box>
);

export default Menu;
