import { styled } from "@mui/material/styles";
import { Box, Container, Toolbar, Typography } from "@mui/material";

export const AppBarContainer = styled(Container)(
  ({ theme }) => `
  max-width: 1920px !important;
`
);

export const ToolBarBox = styled(Box)(
  ({ theme }) => `
  flex-grow: 10;
  display: flex;
  justify-content: center;

      ${theme.breakpoints.down("md")}{
        justify-content: left;
    },

  }
`
);

export const BoxBasketBadgeBoxMB = styled(Box)(
  ({ theme }) => `

  display: none;
  flex-grow:1;
  align-items: center;

  ${theme.breakpoints.down("md")} {
    display:flex;
    justify-content:right;
  }
`
);

export const BoxAccount = styled(Box)(
  ({ theme }) => `
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: right;

  ${theme.breakpoints.down("md")} {
    display:none;
  }
`
);

export const MyAccountTypography = styled(Typography)(
  ({ theme }) => `
  display: flex;
  align-items: center;
`
);

export const IconBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const BoxAccountData = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const BoxBasketBadgeBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const BoxMenu = styled(Box)(
  ({ theme }) => `
  flex-gap:1;
  display: none;
  align-items: center;

  ${theme.breakpoints.down("md")} {
    display:flex;
  }
`
);

export const StyledToolbar = styled(Toolbar)(
  ({ theme }) => `
    && {
    padding: ${theme.spacing(2.5)} ${theme.spacing(15)};

    ${theme.breakpoints.down('md')} {
      padding: ${theme.spacing(0)} ${theme.spacing(0)};
    }
}
`
);
