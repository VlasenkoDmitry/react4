import { styled } from "@mui/material/styles"; 
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";


export const BoxMain = styled(Box)(({ theme }) => `
  && {
    component: section;
    background-color: ${theme.palette.background.paper}; 
  }
`);

export const ContainerMain = styled(Container)`
  && {
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    color: #dcdcdc;
    padding: 20px 120px;
  }
`;

export const GridMain = styled(Grid)(({ theme }) => `
  && {
    border-radius: 10px;
    width: 100%;
    border: 1px solid;
    background-color: ${theme.palette.background.default}; 
    padding: 50px;
  }
`);

export const GridInnerOne = styled(Grid)`
  && {
    padding: 50px;
    order: 0;
  }
`;

export const GridInnerTwo = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    gap: 20px;
    order: 1;
  }
`;

export const TitleBox = styled(Box)`
  && {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const OneTitleTypography = styled(Typography)(({ theme }) => `
  && {
    font-weight: bold;
    color: ${theme.palette.text.primary}; 
  }
`);

export const TwoTitleTypography = styled(Typography)(({ theme }) => `
  && {
    font-weight: bold;
    color: ${theme.palette.text.secondary}; 
  }
`);

export const ReviewBox = styled(Box)`
  && {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const PriceBox = styled(Box)`
  && {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const ActualPriceTypography = styled(Typography)(({ theme }) => `
  && {
    font-weight: bold;
        color: ${theme.palette.text.primary}; 
  }
`);

export const NoActualPriceTypography = styled(Typography)(({ theme }) => `
  && {
    font-weight: bold;
    text-decoration: line-through;
    color: ${theme.palette.text.secondary}; 
  }
`);


export const TypographyReview = styled(Typography)(({ theme }) => `
  && {
    color: ${theme.palette.text.primary}; 
  }
`);




export const BoxButton = styled(Box)(({ theme }) => `
  && {
    dispay: flex;
    flex-direction: row;
    gap: 40px;
  }
`);



export const TypographyText = styled(Typography)(({ theme }) => `
  && {
    color: ${theme.palette.text.primary}; 
  }
`);