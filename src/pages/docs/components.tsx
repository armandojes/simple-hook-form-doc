import { Box, TextField, Typography } from '@mui/material';
import { FC, ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../constants';

const TypographyByTheme = styled(Typography)`
  color: ${props => (props.theme.darkMode ? colors.white : colors.blackLight)};
`;

interface TitleProps {
  children: string;
}

export const Title: FC<TitleProps> = ({ children }) => (
  <Typography color={colors.blueLight} variant="h6" fontWeight="bold">
    {children}
  </Typography>
);

interface ParagrapphProps {
  children: string | ReactElement | ReactNode;
}

export const Paragrapph: FC<ParagrapphProps> = ({ children }) => {
  return (
    <Box padding=".5em 0em">
      <TypographyByTheme color="#fff" variant="body1">
        {children}
      </TypographyByTheme>
    </Box>
  );
};

interface SectionProps {
  children: string | ReactElement | ReactNode;
  id?: string;
}

export const Section: FC<SectionProps> = ({ children, ...props }) => (
  <Box padding="1.5em 0em" {...props}>
    {children}
  </Box>
);

export const Code = styled.code`
  white-space: pre;
`;

export const TextFieldStyled = styled(TextField)`
  ${props =>
    props.theme.darkMode &&
    css`
      background: #333946;
      border-radius: 0.3em;
      & ::placeholder {
        color: gray;
        opacity: 1.7;
      }
    `}
`;
