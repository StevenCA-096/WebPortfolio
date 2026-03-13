import { createTheme } from '@mui/material';
import GilroyRegular from '../assets/fonts/Gilroy-Regular.ttf';

const gilroyFontFace = `
  @font-face {
    font-family: 'Gilroy';
    src: url('${GilroyRegular}') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = gilroyFontFace;
document.head.appendChild(styleSheet);

// Create MUI theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ffff', // Default text color is white
      secondary: "#FFD700",
    },
    gradients: {
      text: 'linear-gradient(90deg, #FFD700 0%, #FFF4BB 60%, #FFD700 80%)',
      navText: 'linear-gradient(90deg, #FFD700 0%, #FFF4BB 55%, #FFD700 100%)',
      navUnderline: 'linear-gradient(90deg, #FFD700 0%, #FFF4BB 50%, #FFD700 100%)',
    },
    background: {
      default: '#181818', // Base dark background
      // Fondo geométrico personalizado
      geometric: `
        linear-gradient(135deg, #181818 0%, #1a1a1a 100%),
        radial-gradient(circle at 85% 20%, rgba(255, 215, 0, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 15% 80%, rgba(255, 215, 0, 0.02) 0%, transparent 50%),
        linear-gradient(45deg, 
          transparent 48%, 
          rgba(255, 215, 0, 0.01) 49%, 
          rgba(255, 215, 0, 0.01) 51%, 
          transparent 52%
        )
      `,
    },
  },
  typography: {
    fontFamily: 'Gilroy, sans-serif',
  },
  // Puedes agregar componentes personalizados para aplicar el fondo
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `
            #181818,
            radial-gradient(circle at 85% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 60%),
            radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0.015) 0%, transparent 50%)
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
            //background lines
            background: `
              linear-gradient(135deg, transparent 49%, rgba(255, 255, 255, 0.01) 50%, transparent 51%)
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

