import * as Styled from "./HeartButton.styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { HeartButtonProps } from "./HeartButton.types";

export const HeartButton: React.FC<HeartButtonProps> = ({ color }) => {
  return (
    <Styled.HeartButton>
      <FavoriteBorderIcon style={{ color: color }}></FavoriteBorderIcon>
    </Styled.HeartButton>
  );
};
