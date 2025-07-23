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
export const theme = createTheme({
  palette: {
    text: {
      primary: '#ffff', // Default text color is white
      secondary: "#FFD700"
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

// OPCIÓN ALTERNATIVA: Si querés aplicarlo directamente al body desde el theme
export const applyGeometricBackground = () => {
  document.body.style.background = `
    #181818,
    radial-gradient(circle at 85% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 60%),
    radial-gradient(circle at 15% 80%, rgba(255, 255, 255, 0.015) 0%, transparent 50%)
  `;
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.minHeight = '100vh';
  
  // Agregar líneas sutiles
  const style = document.createElement('style');
  style.textContent = `
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, transparent 49%, rgba(255, 255, 255, 0.01) 50%, transparent 51%);
      background-size: 300px 300px;
      pointer-events: none;
      z-index: -1;
    }
  `;
  document.head.appendChild(style);
};

// OPCIÓN MÁS SIMPLE: Solo para usar en componentes específicos
export const geometricBackgroundStyles = {
  background: `
    #181818,
    radial-gradient(circle at 85% 20%, rgba(255, 215, 0, 0.04) 0%, transparent 60%),
    radial-gradient(circle at 15% 80%, rgba(255, 215, 0, 0.03) 0%, transparent 60%),
    radial-gradient(ellipse 1000px 500px at 50% 0%, rgba(255, 215, 0, 0.02) 0%, transparent 70%)
  `,
  backgroundAttachment: 'fixed',
  minHeight: '100vh'
};