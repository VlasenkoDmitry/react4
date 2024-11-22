import * as Styled from "./heart-button.styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { HeartButtonProps } from "./heart-button.types";
// TODO: Move to product detail page components folder or src/component

export const HeartButton: React.FC<HeartButtonProps> = ({ color }) => {
  return (
    <Styled.HeartButton>
      <FavoriteBorderIcon style={{ color: color }}></FavoriteBorderIcon>
    </Styled.HeartButton>
  );
};
