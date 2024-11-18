import { Button } from "@mui/material";
import { AddToCardButtonProps } from "./AddToCardButton.types";
import * as Styled from "./AddToCardButton.styles";

export const AddToCardButton: React.FC<AddToCardButtonProps> = ({
  ...rest
}) => {
  return (
    <Styled.AddToCardButton {...rest} variant="contained">
      Add to card
    </Styled.AddToCardButton>
  );
};
