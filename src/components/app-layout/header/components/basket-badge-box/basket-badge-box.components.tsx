import Basket from "@public/basket.svg";
import { BasketBadge } from "./basket-badge-box.styles";
import { Box } from "@mui/material";
import { FC } from "react";
import { BasketBadgeBoxProps } from "./basket-badge-box.types";

const BasketBadgeBox: FC<BasketBadgeBoxProps> = () => {
  return (
    <BasketBadge badgeContent={4} overlap="circular" color="warning">
      <Box component="img" src={Basket} alt="Basket"></Box>
    </BasketBadge>
  );
};

export default BasketBadgeBox;
