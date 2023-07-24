import { Input } from "antd";
import styled from "styled-components";

const { Search } = Input;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 56px;
  background-color: #6197f1;
  align-items: center;
`;
export const NavLinkContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 180px;
`;
export const Searchs = styled(Search)`
  width: 400px;
  align-items: center;
`;

export const MenuMobile = styled.div``;

export const Avatar = styled.img`
  max-width: 50px;
  height: 30px;
`;
