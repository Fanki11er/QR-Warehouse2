import { NavLink } from "react-router";
import styled from "styled-components";

export const NavigationLinkWrapper = styled(NavLink)`
  display: flex;
  width: 120px;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.secondaryGray};
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.green};
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
  transition: all 0.5s;
  font-weight: bold;

  &:hover,
  &:focus,
  &.active {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.secondaryGray};
  }

  &.active {
    &:hover {
      cursor: not-allowed;
    }
  }
`;
