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
      secondary:"#FFD700"
    },
    background: {
      default: '#121212', // Optional: Set background to dark color for contrast
    },
  },
  typography: {
    fontFamily: 'Gilroy, sans-serif',
  },
  
});
