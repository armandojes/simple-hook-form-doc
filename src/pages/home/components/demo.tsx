import { Box, Button, Collapse, Grid, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { FC, SyntheticEvent } from 'react';
import { useForm } from 'simple-hook-form';
import styled from 'styled-components';

const Code = styled.code`
  white-space: pre;
`;

const TextFieldStyled = styled(TextField)`
  background: #333946;
  border-radius: 0.3em;
  & ::placeholder {
    color: gray;
    opacity: 1.7;
  }
`;

interface Values {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string | null;
}

const getErrors = (errors: FormErrors) => ` {
    name: ${errors.name ? `"${errors.name}"` : 'null'},
    lastName: ${errors.lastName ? `"${errors.lastName}"` : 'null'},
    email: ${errors.email ? `"${errors.email}"` : 'null'},
  }
`;

const getResult = (values: Values) => ` {
    name: "${values.name || ''}",
    lastName: "${values.lastName || ''}",
    email: "${values.email || ''}",
  }
`;

const Demo: FC = () => {
  const { registerInput, values, formErrors, setFormErrors, reset } = useForm({
    initialValues: {},
  });
  const snakbar = useSnackbar();

  const handleReset = () => {
    reset();
    setFormErrors({});
  };

  const handleSubmit = (event: SyntheticEvent) => {
    const re: RegExp = /\S+@\S+\.\S+/;
    event.preventDefault();
    const errors: { [key: string]: any } = {};
    if (!values.name) errors.name = 'El nombre es requerido';
    if (!values.lastName) errors.lastName = 'El apellido es requerido';
    if (!values.email) errors.email = 'El correo es requerido';
    if (values.email && !re.test(values.email)) errors.email = 'El correo no es válido';
    if (Object.keys(errors).length) return setFormErrors(errors);
    snakbar.enqueueSnackbar('Formulario enviado', { variant: 'success' });
    handleReset();
    return null;
  };

  return (
    <Box padding="2em 0em">
      <Typography fontWeight="bold" variant="h6" color="#fff">
        Demo
      </Typography>
      <Typography color="#fff">* Todos los inputs son requeridos</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextFieldStyled
              margin="normal"
              placeholder="Nombre"
              fullWidth
              {...registerInput('name')}
              autoComplete="off"
            />

            <Collapse in={!!formErrors.name}>
              <Typography color="#ff0000a6" variant="body2">
                {formErrors.name}
              </Typography>
            </Collapse>

            <TextFieldStyled
              margin="normal"
              placeholder="Apellidos"
              fullWidth
              {...registerInput('lastName')}
              autoComplete="off"
            />
            <Collapse in={!!formErrors.lastName}>
              <Typography color="#ff0000a6" variant="body2">
                {formErrors.lastName}
              </Typography>
            </Collapse>
            <TextFieldStyled
              margin="normal"
              placeholder="Correo"
              fullWidth
              {...registerInput('email')}
              autoComplete="off"
            />
            <Collapse in={!!formErrors.email}>
              <Typography color="#ff0000a6" variant="body2">
                {formErrors.email}
              </Typography>
            </Collapse>
            <Box paddingTop="1em">
              <Grid container justifyContent="space-between" flexWrap="nowrap">
                <Button type="submit" fullWidth variant="contained">
                  Enviar
                </Button>
                <Box padding="1em" />
                <Button fullWidth variant="contained" onClick={handleReset}>
                  Reset
                </Button>
              </Grid>
            </Box>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box marginTop="1em" marginLeft="2em">
            <Typography fontWeight="bold" color="#fff">
              Estado
            </Typography>
            <Box color="#fff">
              <Code>{getResult(values)}</Code>
            </Box>
          </Box>
          <Box marginTop="1em" marginLeft="2em">
            <Typography fontWeight="bold" color="#fff">
              Errores
            </Typography>
            <Box color="#fff">
              <Code>{getErrors(formErrors)}</Code>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Demo;
