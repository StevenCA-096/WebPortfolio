import { I18nextProvider } from 'react-i18next'
import AppRouter from './router/AppRouter'
import i18n from '../i18n'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/carouselDots.css'
import './styles/global.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './theme/lightTheme';
import { useMemo, useState } from 'react';
import { darkTheme } from './theme/darkTheme';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const [theme, setTheme] = useState('dark')

  const activeTheme = useMemo(() => {
    return theme == 'dark'? darkTheme : lightTheme
  },[theme])

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
          <AppRouter />
        </I18nextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
