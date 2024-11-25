import { Box, Typography, Rating } from "@mui/material";
import AccordionExpandDefault from "@/pages/product-page/components/accordion-expand-default";
import SliderExpand from "@/pages/product-page/components/slider-expand";
import TabsExpand from "@/pages/product-page/components/tabs-expand";
import { FC, useState } from "react";
import type { ProductPageProps } from "./product-page.types";
import * as Styled from "./product-page.styles";
import Button from "@/ui-kit/button";
import { useTheme } from "@mui/material/styles";
import { Circle } from "@/ui-kit/circle";

const ProductPage: FC<ProductPageProps> = () => {
  const styles: string[] = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"];

  const theme = useTheme(); // Получите текущую тему
  const [BackgroundAddToWishList, setBackgroundAddToWishList] = useState(
    theme.palette.action.disabled
  );
  const [BackgroundAddToCard, setBackgroundAddToCard] = useState(
    theme.palette.action.disabled
  );

  const handleClickAddToWishList = () => {
    setBackgroundAddToWishList((prevState) =>
      prevState === theme.palette.action.disabled
        ? theme.palette.action.active
        : theme.palette.action.disabled
    );
  };

  const handleClickAddToCard = () => {
    setBackgroundAddToCard((prevState) =>
      prevState === theme.palette.action.disabled
        ? theme.palette.action.active
        : theme.palette.action.disabled
    );
  };

  return (
    <Styled.BoxMain>
      <Styled.ContainerMain>
        <Styled.GridMain container spacing={2}>
          <Styled.GridInnerOne size={{ md: 7, xs: 12 }}>
            <SliderExpand />
          </Styled.GridInnerOne>
          <Styled.GridInnerTwo size={{ md: 5, xs: 12 }}>
            <Styled.TitleBox>
              <Styled.OneTitleTypography variant="h4" color="text.primary">
                Drop 1
              </Styled.OneTitleTypography>
              <Styled.TwoTitleTypography variant="h4" color="text.secondary">
                (4-pack)
              </Styled.TwoTitleTypography>
            </Styled.TitleBox>
            <Styled.ReviewBox>
              <Rating name="simple-controlled" defaultValue={4} />
              <Styled.TypographyReview variant="subtitle1" color="text.primary">
                10 Reviews
              </Styled.TypographyReview>
            </Styled.ReviewBox>
            <Styled.PriceBox>
              <Styled.ActualPriceTypography variant="h5" color="text.primary">
                $150
              </Styled.ActualPriceTypography>
              <Styled.NoActualPriceTypography
                variant="h5"
                color="text.secondary"
              >
                $280
              </Styled.NoActualPriceTypography>
            </Styled.PriceBox>
            <Box>
              <Typography variant="subtitle1" color="text.primary">
                Color
              </Typography>
              <Box>
                {styles.map((color, index) => (
                  <Button>
                    <Circle key={index} color={color}></Circle>
                  </Button>
                ))}
              </Box>
            </Box>
            <Styled.BoxButton>
              <Button
                variant="contained"
                style={{ backgroundColor: BackgroundAddToWishList }}
                onClick={handleClickAddToWishList}
              >
                {" "}
                Add To Wishlist{" "}
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: BackgroundAddToCard }}
                onClick={handleClickAddToCard}
              >
                {" "}
                Add To Card{" "}
              </Button>
            </Styled.BoxButton>
            <Box>
              <Styled.TypographyText color="text.primary">
                Product description
              </Styled.TypographyText>
              <Styled.TypographyText color="text.primary">
                BlaBlaBlaBlaBlaBlaBlaBla
              </Styled.TypographyText>
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
