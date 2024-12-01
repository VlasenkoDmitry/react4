import { FC } from "react";
import * as Styled from "./box-buttons.styles";
import { BoxButtonsProps } from "./box-buttons.types";

const BoxButtons: FC<BoxButtonsProps> = ({ children }) => {
  return <Styled.BoxButtons>{children}</Styled.BoxButtons>;
};

export default BoxButtons;
