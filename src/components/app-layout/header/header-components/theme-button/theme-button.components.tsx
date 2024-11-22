import { FC } from "react";
import * as Styled from "./theme-button.styles";
import { useCustomTheme } from "@/theme/theme-provider";
import { ThemeButtonProps } from "./theme-button.types";

const ThemeButton: FC<ThemeButtonProps> = () => {
  const { isLightTheme, toggleTheme } = useCustomTheme();

  return (
      <header>
          <Styled.ThemeButton onClick={toggleTheme}>
              Переключить на {isLightTheme ? 'темную' : 'светлую'} тему
          </Styled.ThemeButton>
      </header>
  );
};

export default ThemeButton