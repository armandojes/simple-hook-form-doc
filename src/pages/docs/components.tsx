import { Box, Typography } from '@mui/material';
import { FC, ReactElement, ReactNode } from 'react';
import { colors } from '../../constants';

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
      <Typography color="#fff" variant="body1">
        {children}
      </Typography>
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
