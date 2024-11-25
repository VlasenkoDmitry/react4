import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoxContentTabPanel = styled(Box)(
  ({ theme }) => `
  && {
    width: 60%; /* Задаем ширину для больших экранов */
    color: ${theme.palette.text.primary};
    
    ${theme.breakpoints.down("md")} { /* Для средних экранов (до 900px) */
      width: 100%; /* Установка ширины 100% для маленьких экранов */
    }
    
  }
`
);
