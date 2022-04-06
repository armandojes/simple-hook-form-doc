import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../../constants';

const TextWrapper = styled.div`
  max-width: 700px;
  color: #fff;
`;

const Cover: FC = () => {
  return (
    <TextWrapper>
      <Typography variant="h2" fontWeight="bold" paddingTop="2em" paddingBottom="0.5em">
        The React{' '}
        <Box component="span" color={colors.blueLight}>
          form handler{' '}
        </Box>{' '}
        you always wanted
      </Typography>
      <Typography fontSize="1.1em">
        Simple-hook-form es una libreria pequeña (1kb), simple y robusta para manejar formularios en ReactJs, es fácil
        razonar en todo momento, no hay nada oculto, no hay trucos.
      </Typography>
    </TextWrapper>
  );
};

export default Cover;
