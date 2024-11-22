import NavButton from "@/ui-kit/navigation-button/navigation-button.component";
import { ContainerFooter, ToolbarFooter } from "./footer.styles";
import AppBarFooter from "./footer-components/app-bar-footer";

function Footer() {
  return (
    <AppBarFooter position="static">
      <ContainerFooter>
        <ToolbarFooter>
          <NavButton color="#FFFFFF" href="/">
            Home
          </NavButton>
          <NavButton color="#FFFFFF" href="/shop">
            Shop
          </NavButton>
          <NavButton color="#FFFFFF" href="/account/1">
            Account
          </NavButton>
          <NavButton color="#FFFFFF" href="/pages">
            Pages
          </NavButton>
          <NavButton color="#FFFFFF" href="/blog">
            Blog
          </NavButton>
          <NavButton color="#FFFFFF" href="/docs">
            Docs/Components
          </NavButton>
        </ToolbarFooter>
      </ContainerFooter>
    </AppBarFooter>
  );
}


export default Footer