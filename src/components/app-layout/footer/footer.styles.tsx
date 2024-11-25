import { styled } from "@mui/material/styles";
import { Container, Toolbar } from "@mui/material";

export const ContainerFooter = styled(Container)(
  ({ theme }) => `
  && {
    max-width: 1920px;
  }
`
);

export const ToolbarFooter = styled(Toolbar)(
  ({ theme }) => `
  && {
    display: flex;
    justify-content: center;
    gap:${theme.spacing(2)}
  }
`);

