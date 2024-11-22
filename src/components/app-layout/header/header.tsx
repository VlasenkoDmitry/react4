import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BasketBadgeBox from "./header-components/basket-badge-box";
import NavButton from "@/ui-kit/navigation-button/navigation-button.component";
import * as Styled from "./header.styles";
import { HeartButton } from "@/ui-kit/heart-button/heart-button.component";
import ThemeButton from "./header-components/theme-button";
import { HeaderProps } from "./header.types";
import { FC } from "react";




const Header:FC<HeaderProps> = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Styled.AppBarHeader position="static">
      <Styled.AppBarContainer maxWidth="lg">
        <Toolbar>
          <Styled.ToolBarBox>
            <ThemeButton />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <NavButton href="/">
                Home
              </NavButton>
              <NavButton href="/shop">
                Shop
              </NavButton>
              <NavButton href="/account/1">
                Account
              </NavButton>
              <NavButton href="/pages">
                Pages
              </NavButton>
              <NavButton href="/blog">
                Blog
              </NavButton>
            </Box>
          </Styled.ToolBarBox>
          <Styled.BoxBasketBadgeBox
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <BasketBadgeBox />
          </Styled.BoxBasketBadgeBox>
          <Styled.BoxBasketBadgeBox
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button>
              <AccountCircleIcon></AccountCircleIcon>
            </Button>
            <Styled.MyAccountTypography>My account</Styled.MyAccountTypography>
            <Styled.IconBox>
              <HeartButton color="black"></HeartButton>
            </Styled.IconBox>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BasketBadgeBox />
            </Box>
          </Styled.BoxBasketBadgeBox>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box>
                <Styled.BoxAccountData>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Styled.BoxAccountData>

                <MenuItem component="a" href="/">
                  Home
                </MenuItem>
                <MenuItem component="a" href="/shop">
                  Shop
                </MenuItem>
                <MenuItem component="a" href="/account/1">
                  Account
                </MenuItem>
                <MenuItem component="a" href="/pages">
                  Pages
                </MenuItem>
                <MenuItem component="a" href="/blog">
                  Blog
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Styled.AppBarContainer>
    </Styled.AppBarHeader>
  );
}


export default Header