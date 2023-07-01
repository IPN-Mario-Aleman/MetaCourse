import { createContext, useContext, useMemo, useState } from "react";

/* Se crea el contexto y se le añade y valor por deefecto o determinado puede ser undefined para el caso de un usuario */
const ThemeContext = createContext(undefined);

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = () => {
        theme === 'light' 
        ? setTheme('dark')
        : setTheme('light')
    }
    
    const value = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme])

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
};

/* Forma en como un usuario se puede suscribir al usuario y acceder a sus propiedades: custom HOC  */
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider
