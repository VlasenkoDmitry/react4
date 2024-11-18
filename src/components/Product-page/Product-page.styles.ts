import { styled } from "styled-components";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const BoxMain = styled(Box)`
  component: section;
  background-color: #f9f9f9;
`;

export const ContainerMain = styled(Container)`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: #dcdcdc;

  padding: 20px 120px;
`;

export const GridMain = styled(Grid)`
  border-radius: 10px;
  width: 100%;
  border: 1px solid;
  background-color: #ffffff;
  padding: 50px;
`;

export const GridInnerOne = styled(Grid)`
  padding: 50px;
  order: 0;
`;

export const GridInnerTwo = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  order: 1;
`;

export const TitleBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const OneTitleTypography = styled(Typography)`
  font-weight: bold;
`;

export const TwoTitleTypography = styled(Typography)`
  font-weight: bold;
`;

export const ReviewBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const PriceBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ActualPriceTypography = styled(Typography)`
  font-weight: bold;
`;

export const NoActualPriceTypography = styled(Typography)`
  font-weight: bold;
  text-decoration: line-through;
`;
