import { Link } from "react-router";
import styled from "styled-components";

export const WarehousesListWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;

  justify-content: center;
  row-gap: 2rem;
  column-gap: 2rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

export const WarehousesListItem = styled.li`
  display: flex;
  width: 140px;
  height: 140px;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const WarehousesListItemLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
  font-weight: bold;
  transition: all 0.5s;
  border-radius: 1rem;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.secondaryGray};
  }
`;
