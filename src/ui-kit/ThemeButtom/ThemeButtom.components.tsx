import * as Styled from "./ThemeButtom.styles";
import { ThemeButtonProps } from "./ThemeButtom.types";

const ThemeButton: React.FC<ThemeButtonProps> = ({
  children,
  onClick,
  ...rest
}) => {
  return (
    <Styled.ThemeButtonRed {...rest} onClick={onClick}>
      {children}
    </Styled.ThemeButtonRed>
  );
};

export default ThemeButton;
