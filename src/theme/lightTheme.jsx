import { createTheme } from '@mui/material';
import GilroyRegular from '../assets/fonts/Gilroy-Regular.ttf';

// Create MUI Light Theme
export const lightTheme = createTheme({
  palette: {
    text: {
      primary: '#1a1a1a', // Dark text for light background
      secondary: '#B8860B', // Darker golden tone for better contrast
gradient: 'linear-gradient(90deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)'    },
    background: {
      default: '#f8f8f8', // Light base background
      // Fondo geométrico personalizado
      geometric: `
        linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%),
        radial-gradient(circle at 85% 20%, rgba(184, 134, 11, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 15% 80%, rgba(184, 134, 11, 0.03) 0%, transparent 50%),
        linear-gradient(45deg, 
          transparent 48%, 
          rgba(184, 134, 11, 0.02) 49%, 
          rgba(184, 134, 11, 0.02) 51%, 
          transparent 52%
        )
      `,
    },
  },
  typography: {
    fontFamily: 'Gilroy, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `
            #f8f8f8,
            radial-gradient(circle at 85% 20%, rgba(184, 134, 11, 0.04) 0%, transparent 60%),
            radial-gradient(circle at 15% 80%, rgba(184, 134, 11, 0.025) 0%, transparent 50%)
          `,
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // Background lines con líneas sutiles
            background: `
              linear-gradient(135deg, transparent 49%, rgba(0, 0, 0, 0.015) 50%, transparent 51%)
            `,
            backgroundSize: '300px 300px',
            pointerEvents: 'none',
            zIndex: -1
          }
        }
      }
    }
  }
});