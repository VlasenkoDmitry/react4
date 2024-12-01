import { ContainerFooter, ToolbarFooter } from "./footer.styles";
import AppBarFooter from "./components/app-bar-footer";
import Button from "@/ui-kit/button";

function Footer() {
  return (
    <AppBarFooter position="static" color="secondary">
      <ContainerFooter>
        <ToolbarFooter>
          <Button variant="text" href="/">
            Home
          </Button>
          <Button variant="text" href="/">
            Shop
          </Button>
          <Button variant="text" href="/">
            Account
          </Button>
          <Button variant="text" href="/products">
            Products
          </Button>
          <Button variant="text" href="/">
            Blog
          </Button>
          <Button variant="text" href="/">
            Docs/Components
          </Button>
        </ToolbarFooter>
      </ContainerFooter>
    </AppBarFooter>
  );
}

export default Footer;
