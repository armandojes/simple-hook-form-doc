import { Box, Container } from '@mui/material';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import Wrapper from '../wraper';
import Menu, { ImenuItems } from './components/menu';

const WrapperFlex = styled.div`
  display: flex;
  align-items: flex-start;
`;
const MenuWrapper = styled.div`
  width: 25%;
  min-width: 25%;
  margin-right: 3em;
  position: sticky;
  top: 2em;
`;
const BodyWrapper = styled.div`
  flex-grow: 1;
`;

interface Props {
  menuItems?: ImenuItems;
  children: ReactElement;
}

const LayoutDividedWithMenu: FC<Props> = ({ children, menuItems }) => (
  <Wrapper>
    <Container maxWidth="lg">
      <Box padding="2em 0em">
        <WrapperFlex>
          <MenuWrapper>
            <Menu menuItems={menuItems} />
          </MenuWrapper>
          <BodyWrapper>{children}</BodyWrapper>
        </WrapperFlex>
      </Box>
    </Container>
  </Wrapper>
);

export default LayoutDividedWithMenu;

export type { ImenuItems };
