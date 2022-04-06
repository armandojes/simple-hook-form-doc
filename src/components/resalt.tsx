import { FC } from 'react';
import styled from 'styled-components';

const Text = styled.span`
  color: #b5b3b3;
  font-style: italic;
`;

interface Props {
  children: string;
}

const Resalt: FC<Props> = ({ children }) => <Text>{children}</Text>;

export default Resalt;
