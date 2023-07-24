import { MessageOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styled from "styled-components";
const { Search } = Input;
export const ContainerMenuMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Logo = styled.img`
  width: 100px;
`;
export const Toggles = styled.div`
  display: flex;
  background-color: #505050;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 20px;
`;
export const CustomIcon = styled(MessageOutlined)`
  color: white;
  svg {
    width: 50px;
    height: 25px;
  }
`;
export const Login = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
export const Ul = styled.ul`
  display: flex;
  gap: 10px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const Li = styled.li`
  color: white;
  cursor: pointer;
  &:hover {
    color: #6197f1;
  }
`;

export const InputMobile = styled.div`
  padding: 10px;
`;
export const CustomInput = styled(Search)`
  width: 100%;
`;

export const Avatar = styled.img`
  max-width: 50px;
  height: 30px;
`;
