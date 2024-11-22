import { AddToWishListButtonProps } from "./add-to-wish-list-button.types";
import * as Styled from "./add-to-wish-list-button.styles";


const AddToWishListButton: React.FC<AddToWishListButtonProps> = ({
  ...rest
}) => {
  return (
    <Styled.AddToWishListButton {...rest} variant="contained">
      Add to wish list
    </Styled.AddToWishListButton>
  );
};


export default AddToWishListButton
