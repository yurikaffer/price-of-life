'use client'
import { createTheme } from '@mui/material/styles';

const customColors = {
  primaryMain: '#EEE8D9',
  primaryLight: '#F8F7F2',
  primaryDark: '#212020',
  contrastText: '#212020',
};

const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Share Tech',
          fontSize: 14,
          backgroundColor: customColors.primaryDark,
          color: customColors.primaryMain,
          border: '2px solid #212020',
          borderRadius: '10px',
          padding: '10px 0px',
          cursor: 'pointer',
          width: '100%',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: '#EEE8D9',
            color: customColors.primaryDark
        },
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: '2px solid #212020',
          fontFamily: 'Share Tech',
          width: '100%',
          borderRadius: '10px',
          backgroundColor: customColors.primaryLight,
          paddingLeft: 15,
          paddingTop: 2,
          paddingBottom: 2,
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '2px solid #212020',
          fontFamily: 'Share Tech',
          borderRadius: '15px',
          backgroundColor: customColors.primaryMain,
          padding: 25,
          width: '100%',
          boxSizing: 'border-box',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Share Tech',
        }
      }
    }, 
  },
  palette: {
    primary: {
      main: customColors.primaryMain,
      light: customColors.primaryLight,
      dark: customColors.primaryDark,
      contrastText: customColors.contrastText,
    }
  },
});

export default theme;
