import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BasketBadgeBox from "../../ui-kit/BasketBadgeBox/BasketBadgeBox";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="lg" sx={{ maxWidth: "1920px !important" }}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              px: 0,
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button component="a" sx={{ color: "#252B42" }} href="/">
                Home
              </Button>
              <Button component="a" sx={{ color: "#252B42" }} href="/shop">
                Shop
              </Button>
              <Button component="a" sx={{ color: "#252B42" }} href="/account/1">
                Account
              </Button>
              <Button component="a" sx={{ color: "#252B42" }} href="/pages">
                Pages
              </Button>
              <Button component="a" sx={{ color: "#252B42" }} href="/blog">
                Blog
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <BasketBadgeBox />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button>
              <AccountCircleIcon></AccountCircleIcon>
            </Button>
            <Typography
              sx={{ color: "black", display: "flex", alignItems: "center" }}
            >
              My account
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FavoriteBorderIcon sx={{ color: "black" }}></FavoriteBorderIcon>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BasketBadgeBox />
            </Box>
          </Box>
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
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

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

                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
