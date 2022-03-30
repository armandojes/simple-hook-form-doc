import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import Highlight from 'react-highlight';
import Resalt from '../../../components/resalt';

const formWithoutState = `
  const Component = () => {
    return (
      <form>
        <input type="text" name="name" />
        <input type="text" name="lastname" />
        <input type="text" name="email" />
      </form>
    )
  };
`;

const formWithState = `
  import { useForm } from 'simple-hook-form'

  const Component = () => {
    const { values, registerInput } = useForm();

    return (
      <form>
        <input type="text" {...registerInput('name')} />
        <input type="text" {...registerInput('lastname')} />
        <input type="text" {...registerInput('email')} />
      </form>
    )
  };


//  values se verá asi:
//  { name: "", lastname: "", email: "" }
`;

const BasicUsage: FC = () => (
  <Box padding="1.5em 0em">
    <Typography color="#fff" variant="h6" fontWeight="bold">
      Uso basico
    </Typography>

    <Typography color="#fff" variant="body1">
      <Resalt>simple-hook-form</Resalt> es muy simple y facil de razonar en todo momento, este es el ejemplo mas simple,
      primero comencemos con un formulario simple sin estado.
    </Typography>
    <Highlight className="javascript">{formWithoutState}</Highlight>
    <Typography color="#fff" variant="body1">
      Ahora agregamos <Resalt>simple-hook-form</Resalt> para sincronizar el valor de los inputs con el estado de react.
    </Typography>
    <Highlight className="javascript">{formWithState}</Highlight>
    <Typography color="#fff" variant="body1">
      Listo, esto es todo lo necesario, ahora todo lo que el usuario ingrese dentro del formularios estara dispinible
      como un objeto en la variable <Resalt>values</Resalt> devuelto por <Resalt>useForm</Resalt>.
    </Typography>
  </Box>
);

export default BasicUsage;
