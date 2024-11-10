

import { AppBar, Button, Container, Toolbar } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      component="footer"
      position="static"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#252B42" }}
    >
      <Container sx={{ maxWidth: "1920px !important" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Button component="a" sx={{ color: "#FFFFFF" }} href="/">
            Home
          </Button>
          <Button component="a" sx={{ color: "#FFFFFF" }} href="/shop">
            Shop
          </Button>
          <Button component="a" sx={{ color: "#FFFFFF" }} href="/account/1">
            Account
          </Button>
          <Button component="a" sx={{ color: "#FFFFFF" }} href="/pages">
            Pages
          </Button>
          <Button component="a" sx={{ color: "#FFFFFF" }} href="/blog">
            Blog
          </Button>
          <Button component="a" sx={{ color: "#FFFFFF" }} href="docs">
            Docs/Components
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
