import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const WrapperSatyled = styled.div`
  background-color: ${props => (props.theme.darkMode ? colors.blackLight : colors.white)};
  min-height: 100vh;
`;

interface Props {
  children: ReactElement;
}

const Wrapper: FC<Props> = ({ children }) => {
  return <WrapperSatyled>{children}</WrapperSatyled>;
};

export default Wrapper;
