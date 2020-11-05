import styled from "styled-components";

export const TwoGridDesktop = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const CardWrapper = styled.div`
  padding: 0.5em 0;
  @media only screen and (min-width: 768px) {
    padding: 0 0.5em;
    width: 50%;
    box-sizing: border-box;
  }
`;
