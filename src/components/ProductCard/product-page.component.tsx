import { Box, Button, Container, Typography, Rating } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Circle from "../../ui-kit/Circle/Circle";
import AccordionExpandDefault from "../AccordionExpandDefault/AccordionExpandDefault";
import SliderExpand from "../SliderExpand/SliderExpand";
import TabsExpand from "../TabsExpand/TabsExpand";
import { FC } from "react";
import type { ProductPageProps } from "./product-page.types";
import * as Styled from "./product-page.styles";
// import { Button } from "@ui-kit" -> from "../../../../ui-kit/button"

const ProductPage: FC<ProductPageProps> = () => {
  const styles: string[] = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"];

  return (
    <Styled.BoxMain>
      <Styled.ContainerMain
      // TODO: Use styled-components from material ui for styling
      >
        <Styled.GridMain container spacing={2}>
          <Styled.GridInnerOne size={{ md: 7, xs: 12 }}>
            {/* Блок с изображениями */}
            <SliderExpand />
          </Styled.GridInnerOne>
          <Styled.GridInnerTwo size={{ md: 5, xs: 12 }}>
            {/* Контент справа */}
            <Styled.TitleBox>
              <Styled.OneTitleTypography variant="h4">
                Drop 1
              </Styled.OneTitleTypography>
              <Styled.TwoTitleTypography variant="h4" color="lightGray">
                (4-pack)
              </Styled.TwoTitleTypography>
            </Styled.TitleBox>
            <Styled.ReviewBox>
              <Rating name="simple-controlled" defaultValue={4} />
              <Typography>10 Reviews</Typography>
            </Styled.ReviewBox>
            <Styled.PriceBox>
              <Styled.ActualPriceTypography variant="h5">
                $150
              </Styled.ActualPriceTypography>
              <Styled.NoActualPriceTypography variant="h5" color="lightGray">
                $280
              </Styled.NoActualPriceTypography>
            </Styled.PriceBox>
            <Box>
              <Typography variant="subtitle1">Color</Typography>
              <Box>
                {styles.map((color, index) => (
                  <Button key={index}>
                    <Circle color={color} />
                  </Button>
                ))}
              </Box>
            </Box>
            <Box>
              {/* <Styled.AddToWishListButton>
                    Add to wishlist
                </Styled.AddToWishListButton> */}
              <Styled.AddToWishListButton variant="contained">
                Add to wishlist
              </Styled.AddToWishListButton>
              <Button variant="contained">Add to cart</Button>
            </Box>
            <Box>
              <Typography>Product description</Typography>
              <Typography>BlaBlaBlaBlaBlaBlaBlaBla</Typography>
            </Box>
            <AccordionExpandDefault />
          </Styled.GridInnerTwo>
        </Styled.GridMain>
        <TabsExpand />
      </Styled.ContainerMain>
    </Styled.BoxMain>
  );
};

export default ProductPage;
