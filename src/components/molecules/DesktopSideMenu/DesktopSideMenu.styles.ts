import styled from "styled-components";

export const DesktopSideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  row-gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryGray};
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;
