import { AddToCardButtonProps } from "./add-to-card-button.types";
import * as Styled from "./add-to-card-button.styles";

const AddToCardButton: React.FC<AddToCardButtonProps> = ({
  ...rest
}) => {
  return (
    <Styled.AddToCardButton {...rest} variant="contained">
      Add to card
    </Styled.AddToCardButton>
  );
};

export default AddToCardButton