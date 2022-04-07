import { Box, Button, Collapse, Grid, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { FC, SyntheticEvent } from 'react';
import { useForm } from 'simple-hook-form';
import styled, { css } from 'styled-components';
import Highlight from '../../../components/highlight';
import { colors } from '../../../constants';
import { useDarkMode } from '../../../context/darkMode';

const TextFieldStyled = styled(TextField)`
  ${props =>
    props.theme.darkMode &&
    css`
      background: #333946;
      border-radius: 0.3em;
      & ::placeholder {
        color: gray;
        opacity: 1.7;
      }
    `}
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
  const { darkMode } = useDarkMode();

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

  const calculatedColor: string = darkMode ? colors.white : colors.blackLight;

  return (
    <Box padding="2em 0em">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight="bold" variant="h6" color={calculatedColor}>
            Demo
          </Typography>
          <Typography color={calculatedColor}>* Todos los inputs son requeridos</Typography>
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
                <Button type="submit" fullWidth variant={darkMode ? 'contained' : 'outlined'}>
                  Enviar
                </Button>
                <Box padding="1em" />
                <Button fullWidth variant={darkMode ? 'contained' : 'outlined'} onClick={handleReset}>
                  Reset
                </Button>
              </Grid>
            </Box>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box marginTop="1em" marginLeft="2em">
            <Typography color={calculatedColor}>Estado</Typography>
            <Box color={calculatedColor}>
              <Highlight>{getResult(values)}</Highlight>
            </Box>
          </Box>
          <Box marginTop="1em" marginLeft="2em">
            <Typography color={calculatedColor}>Errores</Typography>
            <Box color={calculatedColor}>
              <Highlight>{getErrors(formErrors)}</Highlight>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Demo;
