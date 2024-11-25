import { FC } from "react";
import * as Styled from "./box-content-tab-panel.style";
import { BoxContentTabPanelProps } from "./box-content-tab-panel.types";

const BoxContentTabPanel: FC<BoxContentTabPanelProps> = ({ children }) => {
  return <Styled.BoxContentTabPanel>{children}</Styled.BoxContentTabPanel>;
};

export default BoxContentTabPanel;
