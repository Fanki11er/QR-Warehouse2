import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

export const FooterVersionInformation = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.green};
  width: fit-content;
`;
