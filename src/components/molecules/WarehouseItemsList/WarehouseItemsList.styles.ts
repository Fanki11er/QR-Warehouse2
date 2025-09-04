import styled from "styled-components";

export const WarehouseItemsListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  max-height: 65dvh;
  margin-top: 1rem;
  overflow-x: auto;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 1rem;
`;

export const WarehouseItemsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 0.5rem;
  width: 100%;
  column-gap: 0.5rem;
  row-gap: 0.8rem;
  padding: 1rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const WarehouseItemsListItemLabel = styled.span``;

export const WarehouseItemsListItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
`;
