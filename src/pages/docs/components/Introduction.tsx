import { Box, Typography } from '@mui/material';
import { FC } from 'react';

const Introduction: FC = () => (
  <Box padding="1.5em 0em">
    <Typography color="#fff" variant="h6" fontWeight="bold">
      Introduccion
    </Typography>
    <Box padding=".5em 0em">
      <Typography color="#fff" variant="body1">
        simple-hook-form es una libreria simple, liviana y flexible para manejar formularios en react, su funcion
        principal es sincronizar el valor de los inputs con el estado de react
      </Typography>
    </Box>
    <Box padding=".5em 0em">
      <Typography color="#fff" variant="body1">
        Al principio se pensó en integrar validadores de inputs justo como lo hacen las demas librerias, al final
        decidimos no incluirlo para darle mayor flexibilidad y que el desarrollador pueda instalar su proppio validador
        como yup, joi, validateJs, entre muchos otros...
      </Typography>
    </Box>
  </Box>
);

export default Introduction;
