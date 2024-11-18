import React from "react";
import { Button as MuiButton } from "@mui/material";
import { NavButtonProps } from "./NavButton.types";

const NavButton: React.FC<NavButtonProps> = ({
  color = "primary",
  href,
  children,
  ...rest
}) => {
  return (
    <MuiButton {...rest} component="a" style={{ color: color }} href={href}>
      {children}
    </MuiButton>
  );
};

export default NavButton;
