import { useThemeContext } from "../../context/ThemeContext"

const useIsDarkMode = () => {
    const { theme } = useThemeContext()
    return theme == 'dark'
}

export default useIsDarkMode