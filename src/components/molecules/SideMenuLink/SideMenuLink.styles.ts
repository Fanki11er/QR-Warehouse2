import { Link } from "react-router";
import styled from "styled-components";

export const SideMenuLinkWrapper = styled(Link)`
  width: 150px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.green};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.green};
  transition: all 0.5s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.secondaryGray};
  }
`;
