import { createTheme } from "@mui/material";


const darkTheme = createTheme({
    palette: {
        mode: 'dark', 
        background: {
            default: '#1d3557', 
            paper: '#0d1321'
        },

        primary: {
            main:'#d8e2dc',
        },
        secondary: {
            main: '#1d3557'
        },
        text: {
            primary: '#d8e2dc',
            secondary: '#f0ebd8',
        },
        action: {
            active: '#2091F9',
            disabled: '#BDBDBD'
        },
        warning: {
            main: '#2091F9'
        },

    },
    spacing:3,


})

const lightTheme = createTheme({
    palette: {
        mode: 'light', 
        background: {    // фон общий и фон для выделения
            default: '#FFFFFF', //белый фон
            paper:'#F9F9F9'//серый фон 
        },

        primary: {
            main:'#0d1321', //темный текст в кнопках
        },
        secondary: {
            main: '#FFFFFF'
        },
        text: {
            primary: '#0d1321', //темный текст
            secondary: '#737373',  //серый текст
        },
        action: {
            active: '#2091F9',
            disabled: '#BDBDBD'
        },
        warning: {
            main: '#2091F9'
        }
    },
    spacing:3,
});


export { lightTheme, darkTheme };