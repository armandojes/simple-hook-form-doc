import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../../constants';
import { useDarkMode } from '../../../context/darkMode';

const TextWrapper = styled.div`
  max-width: 700px;
  color: #fff;
`;

const Cover: FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <TextWrapper>
      <Typography
        variant="h2"
        fontWeight="bold"
        paddingTop="2em"
        paddingBottom="0.5em"
        color={darkMode ? colors.white : colors.blackLight}
      >
        Manejar formularios en{' '}
        <Box component="span" color={colors.blueLight}>
          React{' '}
        </Box>{' '}
        no tiene por qué ser difícil.
      </Typography>
      <Typography fontSize="1.1em" color={darkMode ? colors.white : colors.blackLight}>
        Simple-hook-form es una librería pequeña (1kb), simple y robusta para manejar formularios en ReactJs, abstrae
        las complejidades y reduce el código repetitivo.
      </Typography>
    </TextWrapper>
  );
};

export default Cover;
