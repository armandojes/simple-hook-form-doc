import { FC } from 'react';
import styled from 'styled-components';

const Text = styled.span`
  background: #4848489e;
  padding: 0.1em 0.2em;
  border-radius: 0.3em;
`;

interface Props {
  children: string;
}

const Resalt: FC<Props> = ({ children }) => <Text>{children}</Text>;

export default Resalt;
