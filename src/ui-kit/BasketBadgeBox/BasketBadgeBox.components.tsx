import Basket from "@/ui-kit/BasketBadgeBox/BasketBadgeBox.components"
import {BasketBadge} from '@ui-kit/BasketBadgeBox/BasketBadgeBox.styles'
import { Box } from "@mui/material";

export default function BasketBadgeBox() {
  return (
    <BasketBadge
      badgeContent={4}
      overlap="circular"
      color="primary"
    >
      <Box component="img" src={Basket} alt="Basket"></Box>
    </BasketBadge>
  );
}
