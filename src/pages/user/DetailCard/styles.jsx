import { Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailCard = styled.div`
  padding: 16px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 16px;

  & > h4 {
    display: inline-block;
    border-bottom: 2px solid #6197f1;
    margin-bottom: 12px;
  }
`;

export const DetailCardWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
`;

export const ContentDetail = styled.div`
  display: flex;
`;
export const Img = styled.img`
  width: 240px;
  height: 320px;
  margin-right: 16px;
  border-radius: 5px;
  box-shadow: 4px 6px 10px 0 rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;
export const CustomButton = styled(Button)``;
export const TitleDetail = styled.h1`
  margin: 0;
  margin-bottom: 16px;
`;

export const ComicContent = styled.div`
  max-width: 270px;
  width: 100%;
  margin: 8px 0;
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
  margin-bottom: 6px;
  margin-top: 6px;
`;
export const BasicButton = styled(Button)`
  color: black;
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
  position: relative;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ddd;
  justify-content: space-between;
  padding: 8px 20px 8px 12px;
`;
export const ChapterTable = styled.div`
  border: 1px solid #ddd;
  margin: auto;
  border-radius: 5px;
`;
export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Li = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 4px 20px 4px 12px;

  &:last-child {
    border-bottom: 0;
  }
`;
export const Text = styled.h4`
  white-space: nowrap;
`;
export const TextP = styled.p`
  text-align: center;
  color: #bbb9b9;
`;
export const CenterTextP = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #bbb9b9;
`;
export const SLink = styled(Link)`
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
