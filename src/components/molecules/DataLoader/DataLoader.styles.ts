import styled from "styled-components";
import { show } from "../../../theme/helpers";

export const LoaderWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  margin: auto auto;
  animation-name: ${show};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;

export const LoaderText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.l};
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 1rem;
  padding: 2rem;
  width: fit-content;
`;
