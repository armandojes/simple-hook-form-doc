import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import Highlight from '../../../components/highlight';

const installationCode = `
  // usando npm
  npm install simple-hook-form

  // usando yarn
  yarn add simple-hook-form

`;

const Instalation: FC = () => {
  return (
    <Box padding="2em 0em" color="#fff">
      <Typography variant="h6" fontWeight="bold">
        Instalación
      </Typography>
      <Highlight language="bash">{installationCode}</Highlight>
    </Box>
  );
};

export default Instalation;
