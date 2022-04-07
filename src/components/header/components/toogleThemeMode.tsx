import { Switch, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { useThemeMode } from '../../../context/themeMode';

const SwitchStyled = styled(Switch)`
  & .MuiSwitch-switchBase.Mui-checked {
    color: #fff;
  }
`;

const ToggleThemeMode: FC = () => {
  const { themeMode, setThemeMode } = useThemeMode();

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setThemeMode(event.target.checked ? 'dark' : 'light');
  };

  return (
    <Box display="flex" alignItems="center">
      <SwitchStyled onChange={handleSwitchChange} checked={themeMode === 'dark'} />
      <Typography>Dark mode</Typography>
    </Box>
  );
};

export default ToggleThemeMode;
