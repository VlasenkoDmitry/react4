import { styled } from "styled-components";
import { AppBar, Box, Button, Container, Typography } from "@mui/material";

export const AppBarHeader = styled(AppBar)`
  .app.light & {
    background-color: #ffffff !important;
  }


  .app.dark & {
    background-color: #000000 !important; 
  }
`;

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

export const MyAccountTypography = styled(Typography)`
  color: black;
  display: flex;
  align-items: center;
`;

export const IconBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const BoxAccountData = styled(Box)`
  display: flex;
  justifycontent: flex-end;
`;
