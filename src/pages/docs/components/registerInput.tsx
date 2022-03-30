import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import Resalt from '../../../components/resalt';

const UnorderList = styled.ul`
  color: #fff;
  & li {
    margin-top: 0.5em;
  }
`;

const registerInputsPaameter = `
  // uso correcto
  <input type="text" {...registerInput('name')} />
  <input type="text" {...registerInput('lastname')} />
  <input type="text" {...registerInput('email')} />

  // error parametro dupliado
  <input type="text" {...registerInput('name')} />
  <input type="text" {...registerInput('name')} />

  // error parametro faltante
  <input type="text" {...registerInput()} />
`;

const registerInputsEquials = `
  // uso recomendado
  const ComponentA = () => {
    const { registerInput } = useForm();

    return <input {...registerInput('username')} />
  };

  // uso poco recomendado
  const ComponentB = () => {
    const { registerInput } = useForm();
    const { onChange, onFocus, error, name, value  } = registerInput('username');

    return (
      <input
        onChange={onChange}
        onFocus={onFocus}
        error={error}
        name={name}
        value={value}
      />
    )
  };
`;

const RegisterInput: FC = () => (
  <Box padding="1.5em 0em">
    <Typography color="#fff" variant="h6" fontWeight="bold">
      RegisterInput
    </Typography>

    <Box padding="0.5em 0em">
      <Typography color="#fff" variant="body1">
        Parece que hemos hecho magia, ¿como funciona realmente <Resalt>registerInput</Resalt>?
      </Typography>
    </Box>
    <Box padding="0.5em 0em">
      <Typography color="#fff" variant="body1">
        La funcion <Resalt>registerInput</Resalt> requiere un parametro de tipo <Resalt>string</Resalt>, sera usado como
        identificador unico del input
      </Typography>
    </Box>
    <Highlight className="html">{registerInputsPaameter}</Highlight>
    <Box padding="0.5em 0em">
      <Typography color="#fff" variant="body1">
        Al invocar la funcion <Resalt>registerInput</Resalt> devuleve un objeto con los metodos y propiedades para
        controlar el input, el objeto devuelto contiene lo siguente:
      </Typography>
      <UnorderList>
        <li>
          <Resalt>onChange (funcion)</Resalt>: Usado para manejar los cambios en el input.
        </li>
        <li>
          <Resalt>onFocus (funcion)</Resalt>: Usado para remover errores en el input (veremos mas adelante como
          funciona).
        </li>
        <li>
          <Resalt>error (boleano)</Resalt>: Indica si el input tiene algun error (veremos mas adelante como funciona).
        </li>
        <li>
          <Resalt>name (string)</Resalt>: El nombre del input
        </li>
        <li>
          <Resalt>value (string)</Resalt>: El valor del input
        </li>
      </UnorderList>
    </Box>
    <Box padding="0.5em 0em">
      <Typography color="#fff" variant="body1">
        En los ejemplos anteriores usamos la sintaxis de desestructuración directo al input a registrar, recomendamos
        usarlo asi para mantener la claridad del codigo, pero si usted desea usarlo de otra forma para eliminar o
        modificar algnas propiedades puede hacerlo. <br />
        Los siguentes ejemplos son equivalentes:
      </Typography>
    </Box>
    <Highlight className="javascript">{registerInputsEquials}</Highlight>
    <Box padding="0.5em 0em">
      <Typography color="#fff" variant="body1">
        Como habrás notado la primera forma es mucho mas compacta, ambos son exactamente lo mismo.
      </Typography>
    </Box>
  </Box>
);

export default RegisterInput;
