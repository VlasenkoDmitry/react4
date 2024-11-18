import { Button } from "@mui/material";
import { AddToCardButtonProps } from "./AddToCardButton.types";
import * as Styled from "./AddToCardButton.styles";
// TODO: Move to product detail page components folder

export const AddToCardButton: React.FC<AddToCardButtonProps> = ({
  ...rest
}) => {
  return (
    <Styled.AddToCardButton {...rest} variant="contained">
      Add to card
    </Styled.AddToCardButton>
  );
};
