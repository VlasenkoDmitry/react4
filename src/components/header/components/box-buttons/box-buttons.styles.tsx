import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BoxButtons = styled(Box)(({ theme }) => `
  && {
    display: flex;
    gap:${theme.spacing(2)};
    ${theme.breakpoints.down("md")} {
      display: none; /* Скрыть на экранах меньше md (900px) */
    }
  }
`);
