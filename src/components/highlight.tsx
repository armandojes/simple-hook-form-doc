import { FC } from 'react';
import Syntax from 'react-syntax-highlighter';
import { nord, atelierCaveLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useDarkMode } from '../context/darkMode';

interface Props {
  children: string;
  language?: 'javascript' | 'bash' | 'xml' | 'jsx';
}

const Highlight: FC<Props> = ({ children, language = 'javascript' }) => {
  const { darkMode } = useDarkMode();

  return (
    <Syntax language={language} style={darkMode ? nord : atelierCaveLight}>
      {children}
    </Syntax>
  );
};

export default Highlight;
