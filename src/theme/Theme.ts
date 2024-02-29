'use client'
import { createTheme } from '@mui/material/styles';

const customColors = {
  card: '#242529',
  bgInput: '#3A3C45',
  bgButons: '#01936E',
  body: '#121212',
  textColor: '#DDDDDD',
  texColorButtons: '#DDDDDD',
  border: 'none'
};

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: customColors.body
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Share Tech',
          fontSize: 14,
          backgroundColor: customColors.bgButons,
          color: customColors.texColorButtons,
          border: customColors.border,
          borderRadius: '10px',
          padding: '10px 0px',
          cursor: 'pointer',
          width: '100%',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: customColors.bgInput,
            color: customColors.texColorButtons
          },
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: customColors.border,
          fontFamily: 'Share Tech',
          width: '100%',
          borderRadius: '10px',
          backgroundColor: customColors.bgInput,
          color: customColors.textColor,
          paddingLeft: 15,
          paddingTop: 2,
          paddingBottom: 2,
          marginBottom: 5
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: customColors.border,
          fontFamily: 'Share Tech',
          borderRadius: '10px',
          backgroundColor: customColors.card,
          padding: 20,
          width: '100%',
          boxSizing: 'border-box',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Share Tech',
          color: customColors.textColor
        }
      }
    },
  },
  palette: {
    primary: {
      main: customColors.card,
      light: customColors.bgInput,
      dark: customColors.bgButons,
    }
  },
});

export default theme;
