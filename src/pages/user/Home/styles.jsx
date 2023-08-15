import { Button } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding: 0 16px;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`;

export const Left = styled.div`
  margin-top: 16px;
`;

export const CenterButton = styled.div`
  text-align: center;
  width: 100%;
  height: 50px;
`;

export const CustomButton = styled(Button)`
  text-align: center;
`;

export const Title = styled.h2`
  border-bottom: 2px solid #6197f1;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const ComicWrapper = styled.div`
  padding: 12px 16px 16px;
  margin-bottom: 16px;
  background-color: white;
`;
