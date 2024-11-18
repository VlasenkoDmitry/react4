import NavButton from "@ui-kit/NavButton//NavButton.component";
import { ContainerFooter, ToolbarFooter } from "./Footer.styles";
import { AppBarFooter } from "@/ui-kit/AppBarFooter/AppBarFooter.components";

export default function Footer() {
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
