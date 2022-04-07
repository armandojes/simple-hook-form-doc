import { FC, ReactElement } from 'react';
import { useDarkMode } from '../context/darkMode';

interface Props {
  children: ReactElement;
}

export const DarkModeOn: FC<Props> = ({ children }) => {
  const { darkMode } = useDarkMode();

  return darkMode ? children : null;
};

export const DarkModeOff: FC<Props> = ({ children }) => {
  const { darkMode } = useDarkMode();

  return !darkMode ? children : null;
};
