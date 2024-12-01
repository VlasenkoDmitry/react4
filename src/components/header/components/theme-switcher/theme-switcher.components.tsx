import { FC } from "react";
import * as Styled from "./theme-switcher.styles";
import { ThemeSwitcherProps } from "./theme-switcher.types";

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  return (
    <Styled.StyledSwitch {...props} />
  );
}

export default ThemeSwitcher;