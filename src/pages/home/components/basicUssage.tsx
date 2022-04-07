import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import Highlight from '../../../components/highlight';
import { colors } from '../../../constants';

const basicUssageCode: string = `
  import React from 'react';
  import { useForm } from 'simple-hook-form';

  const SomeComponent = () => {
    const { registerInput, values } = useForm();

    console.log(values.name)
    console.log(values.lastName)
    console.log(values.email)

    return (
      <form>
        <input type="text" {...registerInput('name')} />
        <input type="text" {...registerInput('lastName')} />
        <input type="text" {...registerInput('email')} />
      </form>
    )
  };
`;

const BasicUssage: FC = () => {
  return (
    <Box>
      <Typography variant="h6" color={colors.blueLight} fontWeight="bold">
        Uso básico
      </Typography>
      <Highlight>{basicUssageCode}</Highlight>
    </Box>
  );
};

export default BasicUssage;
