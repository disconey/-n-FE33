import { Dropdown } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  background-color: #505050;
  width: 100%;
  top: 56px;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  color: white;
  cursor: pointer;
  &:hover {
    color: #6197f1;
  }
`;
export const A = styled.a`
  color: white;

  &:hover {
    color: #6197f1;
  }
`;

export const CustomDropDown = styled(Dropdown)`
  > .ant-dropdown-menu {
    display: flex !important;
    width: 300px;
    flex-wrap: wrap;
  }
`;
