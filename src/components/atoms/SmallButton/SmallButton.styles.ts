import styled from "styled-components";
import { BasicButton } from "../BasicButton/BasicButton.styles";

export const SmallButton = styled(BasicButton)`
  width: 110px;
  height: 34px;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
