import { styled } from "@mui/material/styles"; // Изменен импорт
import { AppBar } from "@mui/material";

export const AppBarFooter = styled(AppBar)(({theme}) =>`
  && {
    top: auto;
    bottom: 0;
    background-color: ${theme.palette.background.default};
;
    box-sizing: border-box;
  }
`);





