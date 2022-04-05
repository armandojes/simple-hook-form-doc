import { Collapse, Typography, Box, Button, Grid } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'simple-hook-form';
import { Code, TextFieldStyled } from './components';

interface FormErrors {
  [key: string]: string | null;
}

const getErrors = (errors: FormErrors) => `{
  name: ${errors.name ? `"${errors.name}"` : 'null'},
  lastname: ${errors.lastname ? `"${errors.lastname}"` : 'null'},
  email: ${errors.email ? `"${errors.email}"` : 'null'},
}
`;

export const DemoFormErrors: FC = () => {
  const { formErrors, setFormErrors, registerInput } = useForm({ initialValues: {}, initialFormErrors: {} });

  const handleSetErrors = () =>
    setFormErrors({
      name: 'El nombre es requerido',
      lastname: 'apellido es requerido',
      email: 'El correo es invalido',
    });

  return (
    <Box padding="1em 0em">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>
            <TextFieldStyled
              size="small"
              margin="dense"
              fullWidth
              {...registerInput('name')}
              placeholder="nombre"
              error={false}
            />
            <Collapse in={!!formErrors.name}>
              <Typography color="#ff0000a6" variant="body2">
                {formErrors.name}
              </Typography>
            </Collapse>
            <TextFieldStyled
              size="small"
              margin="dense"
              fullWidth
              {...registerInput('lastname')}
              placeholder="apellidos"
              error={false}
            />
            <Collapse in={!!formErrors.lastname}>
              <Typography color="#ff0000a6" variant="body2">
                {formErrors.lastname}
              </Typography>
            </Collapse>
            <TextFieldStyled
              size="small"
              margin="dense"
              fullWidth
              {...registerInput('email')}
              placeholder="correo"
              error={false}
            />
            <Collapse in={!!formErrors.email}>
              <Typography color="#ff0000a6" variant="body2">
                {formErrors.email}
              </Typography>
            </Collapse>
            <Box marginTop="1em">
              <Button variant="contained" onClick={handleSetErrors}>
                Establecer errorres
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box color="#fff" paddingLeft="2em">
            <Typography>Objeto de errores</Typography>
            <Code>{getErrors(formErrors)}</Code>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export const DemoFormErrorsCustomInput: FC = () => {
  const { formErrors, setFormErrors, registerInput } = useForm({ initialValues: {}, initialFormErrors: {} });

  const handleSetErrors = () =>
    setFormErrors({
      name: 'El nombre es requerido',
      lastname: 'apellido es requerido',
    });

  return (
    <Box padding="1em 0em">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>
            <TextFieldStyled size="small" margin="dense" fullWidth {...registerInput('name')} placeholder="nombre" />
            <Collapse in={!!formErrors.name}>
              <Typography color="#ff0000a6" variant="body2">
                {formErrors.name}
              </Typography>
            </Collapse>
            <TextFieldStyled
              size="small"
              margin="dense"
              fullWidth
              {...registerInput('lastname')}
              placeholder="apellidos"
            />
            <Collapse in={!!formErrors.lastname}>
              <Typography color="#ff0000a6" variant="body2">
                {formErrors.lastname}
              </Typography>
            </Collapse>
            <TextFieldStyled size="small" margin="dense" fullWidth {...registerInput('email')} placeholder="correo" />
            <Collapse in={!!formErrors.email}>
              <Typography color="#ff0000a6" variant="body2">
                {formErrors.email}
              </Typography>
            </Collapse>
            <Box marginTop="1em">
              <Button variant="contained" onClick={handleSetErrors}>
                Establecer errorres
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box color="#fff" paddingLeft="2em">
            <Typography>Objeto de errores</Typography>
            <Code>{getErrors(formErrors)}</Code>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default {};
