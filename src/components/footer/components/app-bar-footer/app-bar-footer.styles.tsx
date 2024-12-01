import { styled } from "@mui/material/styles"; // Изменен импорт
import { AppBar } from "@mui/material";

export const AppBarFooter = styled(AppBar)(
  ({ theme }) => `
  && {
    top: auto;
    bottom: 0;
    box-sizing: border-box;
  }
`
);
