import { Badge, Box } from "@mui/material";
import Basket from "./../../../public/basket.svg";

export default function BasketBadgeBox() {
  return (
    <Badge
      badgeContent={4}
      overlap="circular"
      color="primary"
      sx={{ width: "50px", height: "50px" }}
    >
      <Box component="img" src={Basket} alt="Basket"></Box>
    </Badge>
  );
}
