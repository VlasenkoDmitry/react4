import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const BoxMain = styled(Box)(
  ({ theme }) => `
  && {
    background-color: ${theme.palette.background.paper}; 
  }
`
);

export const ContainerMain = styled(Container)(
  ({ theme }) => `
  && {
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(5)};
    padding: ${theme.spacing(2.5)} ${theme.spacing(15)};

    ${theme.breakpoints.down('md')} {
      padding: ${theme.spacing(2)} ${theme.spacing(5)};
    }

  }
`);

export const GridMain = styled(Grid)(
  ({ theme }) => `
  && {
    border-radius: 10px;
    width: 100%;
    background-color: ${theme.palette.background.default}; 
    padding: ${theme.spacing(6.25)};

    ${theme.breakpoints.down('md')} {
      padding: ${theme.spacing(2)};
    }
  }
`
);

export const GridInnerOne = styled(Grid)(
  ({ theme }) => `
  && {
    padding: ${theme.spacing(6.25)};
    order: 0;
  }
`);

export const GridInnerTwo = styled(Grid)(
  ({ theme }) => `
  && {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2.5)};
    order: 1;
  }
`);

export const TitleBox = styled(Box)(
  ({ theme }) => `
  && {
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(2.5)};
  }
`);

export const OneTitleTypography = styled(Typography)(
  ({ theme }) => `
  && {
    font-weight: bold;
  }
`
);

export const TwoTitleTypography = styled(Typography)(
  ({ theme }) => `
  && {
    font-weight: bold;
  }
`
);

export const ReviewBox = styled(Box)(
  ({ theme }) => `
  && {
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(2.5)};
  }
`);

export const PriceBox = styled(Box)(
  ({ theme }) => `
  && {
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(2.5)};
  }
`);

export const ActualPriceTypography = styled(Typography)(
  ({ theme }) => `
  && {
    font-weight: bold;
  }
`
);

export const NoActualPriceTypography = styled(Typography)(
  ({ theme }) => `
  && {
    font-weight: bold;
    text-decoration: line-through;
  }
`
);

export const TypographyReview = styled(Typography)(
  ({ theme }) => `
  && {

  }
`
);

export const BoxButton = styled(Box)(
  ({ theme }) => `
  && {
    dispay: flex;
    flex-direction: row;
    gap: ${theme.spacing(5)};
  }
`
);

export const TypographyText = styled(Typography)(
  ({ theme }) => `
  && {

  }
`
);
