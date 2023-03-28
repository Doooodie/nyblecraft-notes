import { createContext, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { ButtonGroup, Button } from '@mui/material';
import { WbSunny, DarkModeOutlined } from '@mui/icons-material';
import { useAppDispatch } from '../../../../hooks/hooks';
import { setTheme } from '../../../../store/slices/appThemeSlice';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function ThemeButtons() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  const handleLightMode = () => {
    toggleColorMode();
    dispatch(setTheme('light'));
  };

  const handleDarkMode = () => {
    toggleColorMode();
    dispatch(setTheme('dark'));
  };

  return (
    <ButtonGroup variant='outlined' fullWidth>
      <Button
        startIcon={<WbSunny />}
        onClick={handleLightMode}
        disabled={theme.palette.mode === 'light'}
      >
        Light
      </Button>
      <Button
        startIcon={<DarkModeOutlined />}
        onClick={handleDarkMode}
        disabled={theme.palette.mode === 'dark'}
      >
        Dark
      </Button>
    </ButtonGroup>
  );
}

export default ThemeButtons;
