import { AppBarProps } from "./AppBarFooter.types";
import * as Styled from "./AppBarFooter.styles";
// TODO: Move to components folder

export const AppBarFooter: React.FC<AppBarProps> = ({
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
