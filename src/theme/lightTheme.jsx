import { createTheme } from '@mui/material'
import GilroyRegular from '../assets/fonts/Gilroy-Regular.ttf'

const gilroyFontFace = `
  @font-face {
    font-family: 'Gilroy';
    src: url('${GilroyRegular}') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`

const styleSheet = document.createElement('style')
styleSheet.type = 'text/css'
styleSheet.innerText = gilroyFontFace
document.head.appendChild(styleSheet)

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#1f2937',
      secondary: '#b97700',
    },
    gradients: {
      text: 'linear-gradient(90deg, #7a4b00 0%, #b97700 35%, #f0b429 68%, #915600 100%)',
      navText: 'linear-gradient(90deg, #8a5300 0%, #c88700 48%, #f2be4d 76%, #8a5300 100%)',
      navUnderline: 'linear-gradient(90deg, #b97700 0%, #f0b429 50%, #8a5300 100%)',
    },
    background: {
      default: '#f8f8f8',
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
            inset: 0,
            background: `
              linear-gradient(135deg, transparent 49%, rgba(0, 0, 0, 0.015) 50%, transparent 51%)
            `,
            backgroundSize: '300px 300px',
            pointerEvents: 'none',
            zIndex: -1,
          },
        },
      },
    },
  },
})
