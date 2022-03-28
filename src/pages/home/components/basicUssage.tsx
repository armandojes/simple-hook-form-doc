import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import Highlight from 'react-highlight';

const basicUssageCode = `
  import React from 'react';
  import { useForm } from 'simple-hook-form';

  const SomeComponent = () => {
    const { registerInput, values } = useForm();

    console.log(values)
    //  you will log:
    //  { name: "", lastName: "", email: "" }

    return (
      <form>
        <input type="text" {...registerInput('name')} />
        <input type="text" {...registerInput('lastName')} />
        <input type="text" {...registerInput('email')} />
      </form>
    )
  };
`;

const BasicUssage: FC = () => (
  <Box>
    <Typography variant="h6" color="#fff" fontWeight="bold">
      Uso básico
    </Typography>
    <Highlight className="javascript">{basicUssageCode}</Highlight>
  </Box>
);

export default BasicUssage;
