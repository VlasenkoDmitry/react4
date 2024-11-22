import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';

interface ThemeContextType {
    toggleTheme: () => void; // Функция для переключения темы
    isLightTheme: boolean;    // Булево значение для текущей темы
}

const CustomContext = createContext<ThemeContextType | undefined>(undefined);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    const toggleTheme = () => {
        setIsLightTheme((prev) => !prev);
    };

    const currentTheme = isLightTheme ? lightTheme : darkTheme;

    return (
        <CustomContext.Provider value={{ toggleTheme, isLightTheme }}>
            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </CustomContext.Provider>
    );
};


export const useCustomTheme  = () => {
    const context = useContext(CustomContext);
    if (context === undefined) {
        throw new Error('useCustomTheme must be used within a CustomThemeProvider');
    }
    return context;
};