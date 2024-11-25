import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BasketBadgeBox from "./components/basket-badge-box";
import * as Styled from "./header.styles";
import { HeaderProps } from "./header.types";
import { FC } from "react";
import { useCustomTheme } from "@/theme/theme-provider";
import Button from "@ui-kit/button";
import BoxButtons from "./components/box-buttons";
import { AppBar } from "@mui/material";
import HeartButton from "../footer/components/heart-button";
import ThemeSwitcher from "./components/theme-switcher";

const Header: FC<HeaderProps> = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const { isLightTheme, toggleTheme } = useCustomTheme();

  return (
    <AppBar position="static" color="secondary">
      <Styled.AppBarContainer maxWidth="lg">
        <Styled.StyledToolbar>
          <Styled.ToolBarBox>
            <ThemeSwitcher onClick={toggleTheme} />
            <BoxButtons>
              <Button variant="text" color="primary" href="/">
                Home
              </Button>
              <Button href="/">Shop</Button>
              <Button href="/">Account</Button>
              <Button href="/products">Products</Button>
              <Button href="/">Blog</Button>
            </BoxButtons>
          </Styled.ToolBarBox>
          <Styled.BoxBasketBadgeBoxMB>
            <BasketBadgeBox />
          </Styled.BoxBasketBadgeBoxMB>
          <Styled.BoxAccount>
            <Button>
              <AccountCircleIcon color="warning"></AccountCircleIcon>
            </Button>
            <Styled.MyAccountTypography>My account</Styled.MyAccountTypography>
            <Styled.IconBox>
              <HeartButton color="text.primary"></HeartButton>
            </Styled.IconBox>
            <Styled.BoxBasketBadgeBox>
              <BasketBadgeBox />
            </Styled.BoxBasketBadgeBox>
          </Styled.BoxAccount>
          <Styled.BoxMenu>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box>
                <Styled.BoxAccountData>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Styled.BoxAccountData>
                <MenuItem component="a" href="/">
                  Home
                </MenuItem>
                <MenuItem component="a" href="/">
                  Shop
                </MenuItem>
                <MenuItem component="a" href="/">
                  Account
                </MenuItem>
                <MenuItem component="a" href="/products">
                  Products
                </MenuItem>
                <MenuItem component="a" href="/">
                  Blog
                </MenuItem>
              </Box>
            </Drawer>
          </Styled.BoxMenu>
        </Styled.StyledToolbar>
      </Styled.AppBarContainer>
    </AppBar>
  );
};

export default Header;
