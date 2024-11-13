import { styled } from "styled-components";
import { Box, Button, Container, Typography, Rating } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const BoxMain = styled(Box)`
component:"section",
backgroundColor: "#F9F9F9"
`;

export const ContainerMain = styled(Container)`
maxWidth: "1920px",
padding: { md: "20px 120px", xs: "0px" },
display: "flex",
flexDirection: "column",
gap: "40px",
`;

export const GridMain = styled(Grid)`
borderRadius: "10px",
width: "100%",
border: "1px",
backgroundColor: "#FFFFFF",
padding: "50px",
`;


export const GridInnerOne= styled(Grid)`
padding: "50px", 
order: { xs: 0, md: 0 }
`;

export const GridInnerTwo= styled(Grid)`
display: "flex",
flexDirection: "column",
gap: "20px",
order: { xs: 1, md: 1 },
`;


export const TitleBox = styled(Box)`
display: "flex", 
flexDirection: "row", gap: "20px"
`;


export const OneTitleTypography = styled(Typography)`
fontWeight: "bold"
`;

export const TwoTitleTypography = styled(Typography)`
fontWeight: "bold"
`;

export const ReviewBox= styled(Box)`
display: "flex", 
flexDirection: "row",
gap: "20px"
`;

export const PriceBox = styled(Box)`
display: "flex",
flexDirection: "row",
gap: "20px"
`;

export const ActualPriceTypography = styled(Typography)`
fontWeight: "bold"
`;

export const NoActualPriceTypography= styled(Typography)`
fontWeight: "bold",
textDecoration: "line-through"
`;


