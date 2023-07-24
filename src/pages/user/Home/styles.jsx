import { Button } from "antd";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 10px;
  width: 100%;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`;

export const Left = styled.div`
  background-color: white;
  padding: 10px;
`;

export const CenterButton = styled.div`
  text-align: center;
  width: 100%;
  height: 50px;
`;

export const CustomButton = styled(Button)`
  text-align: center;
`;

export const Title = styled.h3`
  margin-left: 13px;
`;
