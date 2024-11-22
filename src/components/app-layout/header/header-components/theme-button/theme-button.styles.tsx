import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ThemeButton = styled(Button)(({ theme }) => `
  && {
    color: ${theme.palette.text.primary};
  }
`);