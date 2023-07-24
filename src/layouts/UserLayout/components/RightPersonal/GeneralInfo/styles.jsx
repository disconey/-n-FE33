import { Link } from "react-router-dom";
import styled from "styled-components";

export const GeneralInfo = styled.div`
  width: 100%;
`;

export const AccountInfo = styled.div`
  width: 500px;
  margin-bottom: 20px;
  margin-left: 20px;
`;
export const TitlePersonal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const InfoDetail = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
`;
export const TextDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ComicFollow = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const FollowPersonal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FollowTable = styled.table`
  width: 100%;
`;
export const Nowrap = styled.th`
  white-space: nowrap;
  background-color: black;
  border-top: 5px solid red;
  color: white;
`;

export const NowrapChapter = styled.td`
  padding: 10px;
  text-align: center;
`;
export const SLink = styled(Link)`
  text-decoration: none;
  color: blue;
  font-style: italic;
  &:hover {
    text-decoration: revert;
  }
`;
export const Text = styled.p`
  color: gray;
  font-style: italic;
`;

export const Img = styled.img`
  width: 70px;
  height: 50px;
`;
