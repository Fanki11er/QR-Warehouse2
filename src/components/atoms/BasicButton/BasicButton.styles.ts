import styled from "styled-components";

export const BasicButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.green};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.green};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.secondaryGray};
  }
`;
