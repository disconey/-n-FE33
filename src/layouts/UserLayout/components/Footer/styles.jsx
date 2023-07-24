import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 24px;
  text-align: center;
  background-color: #5f9ea0;
`;

export const FooterWrappers = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: #323232;
  color: #c3bfbf;
  width: 100%;
`;
export const ImageIcon = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
`;
export const Icon = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  svg {
    cursor: pointer;
    height: 30px;
    width: 50px;
    margin-left: 10px;
  }
  &svg:hover {
    color: #6197f1;
  }
`;

export const Ul = styled.ul`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  gap: 10px;
  list-style: none;
  justify-content: center;
`;
export const Li = styled.li`
  &:hover {
    cursor: pointer;
    color: #6197f1;
  }
`;
export const Introduce = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`;

export const IntroduceP = styled.p`
  width: 850px;
`;
