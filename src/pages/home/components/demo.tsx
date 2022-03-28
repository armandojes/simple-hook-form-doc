import { Box, Grid, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'simple-hook-form';
import styled from 'styled-components';

const Code = styled.code`
  white-space: pre;
`;

const TextFieldStyled = styled(TextField)`
  background: #fff;
  border-radius: 0.3em;
  & ::placeholder {
    opacity: 0.7;
  }
`;

interface Values {
  [key: string]: string;
}

const getResilt = (values: Values) => `
  {
    name: "${values.name || ''}",
    lastName: "${values.lastName || ''}",
    email: "${values.email || ''}",
  }
`;

const Demo: FC = () => {
  const { registerInput, values } = useForm({ initialValues: {} });

  return (
    <Box padding="2em 0em">
      <Typography fontWeight="bold" variant="h6" color="#fff">
        Demo
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <form autoComplete="off">
            <TextFieldStyled
              margin="normal"
              placeholder="Nombre"
              fullWidth
              {...registerInput('name')}
              autoComplete="off"
            />
            <TextFieldStyled
              margin="normal"
              placeholder="Apellidos"
              fullWidth
              {...registerInput('lastName')}
              autoComplete="off"
            />
            <TextFieldStyled
              margin="normal"
              placeholder="Correo"
              fullWidth
              {...registerInput('email')}
              autoComplete="off"
            />
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box marginTop="1em" marginLeft="1em">
            <form>
              <Typography color="#fff">Resultado</Typography>
              <Box color="#fff">
                <Code>{getResilt(values)}</Code>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Demo;
