

import styled from "styled-components";

export const BigGradientText = styled.h1`
  text-align: center;
  font-size: 6rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

export const CenterText = styled.div`
  height: 90vh;
  display: grid;
  place-items: center;
`;
