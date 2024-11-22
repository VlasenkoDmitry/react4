import { styled } from "@mui/material/styles"; // Изменен импорт
import { AppBar, Container, Toolbar } from "@mui/material";

export const ContainerFooter = styled(Container)(({theme}) =>`
  && {
    max-width: 1920px;
    background-color: ${theme.palette.background.default};
  }
`);

export const ToolbarFooter = styled(Toolbar)`
  && {
    display: flex;
    justify-content: center;
  }
`;

