import { Button } from "@mui/material";
import { AddToWishListButtonProps } from "./AddToWishListButton.types";
import * as Styled from "./AddToWishListButton.styles";

export const AddToWishListButton: React.FC<AddToWishListButtonProps> = ({
  ...rest
}) => {
  return (
    <Styled.AddToWishListButton {...rest} variant="contained">
      Add to wish list
    </Styled.AddToWishListButton>
  );
};
