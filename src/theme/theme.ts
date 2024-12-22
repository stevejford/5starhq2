import { createTheme } from '@mui/material/styles';
import { Components, Theme } from '@mui/material';

// Layout constants
export const LAYOUT = {
  sidebar: {
    width: 240,
    backgroundColor: '#5861c5',
    textColor: '#ffffff',
  },
  content: {
    padding: {
      top: 40,
      left: 40,
      right: 40,
    }
  },
  card: {
    width: 255,
    height: 205,
    borderRadius: 20,
    padding: 16,
    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.03)',
  },
  button: {
    height: 41,
    width: 207,
    borderRadius: 20,
  }
};

// Component overrides
const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: LAYOUT.button.borderRadius,
        textTransform: 'none',
        '&.MuiButton-contained': {
          backgroundColor: '#5861c5',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#4a51a5',
          },
        },
        '&.MuiButton-outlined': {
          borderColor: '#5861c5',
          color: '#5861c5',
        },
      },
      sizeLarge: {
        height: LAYOUT.button.height,
        width: LAYOUT.button.width,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: LAYOUT.card.borderRadius,
        boxShadow: LAYOUT.card.boxShadow,
        border: '1px solid #D6D6D6',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        backgroundColor: '#fff',
        '& fieldset': {
          borderColor: '#D6D6D6',
        },
        '&:hover fieldset': {
          borderColor: '#5861c5',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#5861c5',
        },
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        width: LAYOUT.sidebar.width,
        backgroundColor: LAYOUT.sidebar.backgroundColor,
        color: LAYOUT.sidebar.textColor,
        borderRight: 'none',
      },
    },
  },
};

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#5861c5',
      light: '#7c84d6',
      dark: '#4a51a5',
    },
    background: {
      default: '#FBF8F6',
      paper: '#ffffff',
    },
    text: {
      primary: '#484848',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    grey: {
      200: '#D6D6D6',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h4: {
      fontWeight: 500,
      color: '#484848',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 20,
  },
  components,
});

export default theme;
