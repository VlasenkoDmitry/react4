import Basket from "@/ui-kit/BasketBadgeBox/BasketBadgeBox.components"
import {BasketBadge} from '@ui-kit/BasketBadgeBox/BasketBadgeBox.styles'
import { Box } from "@mui/material";
// TODO: Move to product detail page components folder

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
