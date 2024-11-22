import React from "react";
import { Button as MuiButton, useTheme } from "@mui/material";
import { NavigationButtonProps } from "./navigation-button.types";

const NavigationButton: React.FC<NavigationButtonProps> = ({
  color,
  href,
  children,
  ...rest
}) => {
  const theme = useTheme(); // Получаем текущую тему

  return (
    <MuiButton {...rest} component="a" style={{ color: theme.palette.text.primary }} href={href}>
      {children}
    </MuiButton>
  );
};

export default NavigationButton;


