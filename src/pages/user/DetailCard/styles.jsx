import { Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailCard = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 20px;
  background-color: white;
`;

export const ContentDetail = styled.div`
  display: flex;
`;
export const Img = styled.img`
  width: 240px;
  height: 250px;
  margin-right: 15px;
  border-radius: 5px;
  box-shadow: 7px 7px 10px 0 #757575;
`;
export const CustomButton = styled(Button)`
  color: blue;
  border: 1px solid;
  margin-left: 5px;
`;
export const TitleDetail = styled.h1`
  margin: 0;
  margin-bottom: 20px;
`;

export const ComicContent = styled.div`
  width: 270px;
`;

export const ItemDetailCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ItemSmall = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const BasicButton = styled(Button)`
  color: black;
  margin-right: 10px;
`;
export const RedButton = styled(BasicButton)`
  background-color: red;
`;
export const GreenButton = styled(BasicButton)`
  background-color: greenyellow;
`;
export const YellowButton = styled(BasicButton)`
  background-color: yellow;
`;
export const TopTable = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #bbb9b9;
  justify-content: space-between;
  padding: 10px;
`;
export const ChapterTable = styled.div`
  height: 300px;
  border: 1px solid #bbb9b9;
  margin: auto;
  border-radius: 10px;
`;
export const Ul = styled.ul`
  width: 100%;
  border-bottom: 1px solid #bbb9b9;
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 10px;
`;
export const Li = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Text = styled.h4`
  width: 135px;
  text-align: center;
`;
export const TextP = styled.p`
  width: 135px;
  text-align: center;
  color: #bbb9b9;
`;
export const SLink = styled(Link)`
  width: 135px;
  display: flex;
  text-decoration: none;
  color: black;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: revert;
    color: blue;
  }
`;
