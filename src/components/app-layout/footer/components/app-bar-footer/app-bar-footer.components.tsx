import { AppBarProps } from "@mui/material/AppBar";
import * as Styled from "./app-bar-footer.styles";

const AppBarFooter: React.FC<AppBarProps> = ({
  position,
  children,
  color,
  ...rest
}) => {
  return (
    <Styled.AppBarFooter {...rest} position={position} color={color}>
      {children}
    </Styled.AppBarFooter>
  );
};

export default AppBarFooter;
