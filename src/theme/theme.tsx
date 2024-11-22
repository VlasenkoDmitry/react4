import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark', 
        primary: {
            main: '#2091F9', // голубой цвет для выделения элементов
            contrastText: '#0d1321', //темный текст кнопок
        },
        background: {
            default: '#1d3557', 
            paper: '#3e5c76'
        },
        text: {
            primary: '#d8e2dc',
            secondary: '#f0ebd8',
        },
    }

})

const lightTheme = createTheme({
    palette: {
        mode: 'light', 
        primary: {
            main: '#2091F9', // голубой цвет для выделения элементов
            contrastText: '#FFFFFF', //светлый текст кнопок
        },
        background: {    // фон общий и фон для выделения
            default: '#FFFFFF', //белый фон
            paper:'#F9F9F9'//серый фон 
        },
        text: {
            primary: '#0d1321', //темный текст
            secondary: '#737373',  //серый текст
        },
    },
});

export { lightTheme, darkTheme };