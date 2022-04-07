import { DarkMode, LightMode } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants';
import { useDarkMode } from '../../../context/darkMode';

const IconStyled = styled.div`
  margin-right: 0.5em;
  color: ${props => (props.theme.darkMode ? colors.white : colors.blackLight)};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ToggleThemeMode: FC = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Wrapper onClick={handleToggleMode}>
      <IconStyled as={darkMode ? LightMode : DarkMode} />
      <Typography color={darkMode ? colors.white : colors.blackLight}>
        {darkMode ? 'Modo claro' : 'Modo obscuro'}
      </Typography>
    </Wrapper>
  );
};

export default ToggleThemeMode;
