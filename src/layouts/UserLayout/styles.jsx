import styled from "styled-components";

export const UserLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const MainWrapper = styled.div`
  flex: 1;
  margin-top: 96px;
  background-color: #f0f2f5;
  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

export const UserLayoutHeader = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const UserLayoutMobile = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;
