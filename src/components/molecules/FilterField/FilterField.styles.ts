import styled from "styled-components";

export const FilterFieldLabel = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  width: fit-content;
  justify-content: center;
  align-items: flex-start;
`;

export const FilterFieldInput = styled.input`
  padding: 0.5rem 1rem;
  width: 250px;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 1rem;
  outline: none;
  transition: all 0.5s;

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.green};

    color: ${({ theme }) => theme.colors.green};
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.transparentGreen};
  }
`;
