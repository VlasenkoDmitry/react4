import { AppBarProps } from "./app-bar-footer.types";
import * as Styled from "./app-bar-footer.styles";
// TODO: Move to components folder

 const AppBarFooter: React.FC<AppBarProps> = ({
  position,
  children,
  ...rest
}) => {
  return (
    <Styled.AppBarFooter {...rest} position={position}>
      {children}
    </Styled.AppBarFooter>
  );
};

export default AppBarFooter
