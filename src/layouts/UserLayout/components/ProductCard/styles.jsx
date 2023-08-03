import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardItem = styled.div`
  height: 310px;
  width: 100%;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  position: relative;
`;
export const SLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: revert;
    color: black;
  }
`;
export const NameComic = styled.h4`
  font-size: 16px;
  margin: 0 0 7px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 13px;
`;
export const Chapter = styled(Text)`
  cursor: pointer;
  color: black;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;
export const ViewChapterAt = styled.div`
  color: silver;
  font-size: 11px;
  font-style: italic;
  max-width: 47%;
  overflow: hidden;
  white-space: nowrap;
`;

export const SideImg = styled.div`
  width: 100%;
  gap: 10px;
  color: #fff;
  background-color: #000;
  opacity: 0.65;
  height: 25px;
  position: absolute;
  bottom: 110px;
  line-height: 25px;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;

export const ItemSideIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 10px;
`;
