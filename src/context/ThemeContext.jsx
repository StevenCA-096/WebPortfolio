import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    theme: "dark",
    setTheme: () => { }
})

export const useThemeContext = () => {
    return useContext(ThemeContext)
}