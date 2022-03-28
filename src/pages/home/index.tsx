import { Box, Button, Container } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../components/wraper';
import BasicUssage from './components/basicUssage';
import Cover from './components/cover';
import Demo from './components/demo';
import Installation from './components/installation';

const Home: FC = () => {
  return (
    <Wrapper>
      <Container maxWidth="md">
        <Cover />
        <Installation />
        <BasicUssage />
        <Demo />
        <Box padding="1em 0em">
          <Link to="/docs">
            <Button variant="contained">Documentación</Button>
          </Link>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Home;
