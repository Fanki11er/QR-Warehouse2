import styled from "styled-components";
import { Link } from "react-router";

export const MainMenuLinkWrapper = styled(Link)`
  display: flex;
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.secondaryGray};
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
  transition: all 0.5s;
  font-weight: bold;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.secondaryGray};
  }
`;
