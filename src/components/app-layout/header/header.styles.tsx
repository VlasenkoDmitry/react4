import { styled } from "@mui/material/styles"; 
import { AppBar, Box, Container, Typography } from "@mui/material";


export const AppBarHeader = styled(AppBar)(({ theme }) => `
  background-color: ${theme.palette.background.default}; 
`);


export const AppBarContainer = styled(Container)`
  max-width: 1920px !important;
`;


export const ToolBarBox = styled(Box)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding-left: 0;
  padding-right: 0;
`;

export const BoxBasketBadgeBox = styled(Box)`
  gap: 1;
  display: flex;
  align-items: center;
`;


export const MyAccountTypography = styled(Typography)(({ theme }) => `
  color: ${theme.palette.text.primary}; // Исправлено на theme.palette.text.primary
  display: flex;
  align-items: center;
`);

export const IconBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const BoxAccountData = styled(Box)`
  display: flex;
  justify-content: flex-end; // Исправлено название свойства
`;