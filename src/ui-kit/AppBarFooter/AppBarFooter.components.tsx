import { AppBarProps } from "./AppBarFooter.types";
import * as Styled from "./AppBarFooter.styles";

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
