import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--medGrey);
  padding: 0 20px;
  :hover {
    background: var(--lightGrey);
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const APIImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
