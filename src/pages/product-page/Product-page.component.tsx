import { Box, Button, Typography, Rating } from "@mui/material";
import AccordionExpandDefault from "@pages/product-page/product-components/accordion-expand-default";
import SliderExpand from "@pages/product-page/product-components/slider-expand";
import TabsExpand from "@pages/product-page/product-components/tabs-expand";
import { FC } from "react";
import type { ProductPageProps } from "./Product-page.types";
import * as Styled from "./Product-page.styles";
import AddToCardButton from "./product-components/add-to-card-button";
import AddToWishListButton from "./product-components/add-to-wish-list-button";

const ProductPage: FC<ProductPageProps> = () => {
  const styles: string[] = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"];

  return (
    <Styled.BoxMain>
      <Styled.ContainerMain>
        <Styled.GridMain container spacing={2}>
          <Styled.GridInnerOne size={{ md: 7, xs: 12 }}>
            <SliderExpand />
          </Styled.GridInnerOne>
          <Styled.GridInnerTwo size={{ md: 5, xs: 12 }}>
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
              <Styled.TypographyReview>10 Reviews</Styled.TypographyReview>
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
              <Typography variant="subtitle1" color="text.primary">Color</Typography>
              <Box>
                {styles.map((color, index) => (
                  <Button key={index}>
                  </Button>
                ))}
              </Box>
            </Box>
            <Styled.BoxButton>
              <AddToWishListButton></AddToWishListButton>
              <AddToCardButton></AddToCardButton>
            </Styled.BoxButton>
            <Box>
              <Styled.TypographyText>Product description</Styled.TypographyText>
              <Styled.TypographyText>BlaBlaBlaBlaBlaBlaBlaBla</Styled.TypographyText>
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
