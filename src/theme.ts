import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#0b32d1',
    },
    secondary: {
      main: '#A80AD0',
    },
    error: {
      main: '#D00A32',
    },
  },
});

export default theme;