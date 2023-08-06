import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 20px;
  background-color: white;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
`;
export const TitleChap = styled.h2`
  height: 70px;
  margin: 0;
`;

export const MenuChapter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const BackroundImg = styled.div`
  background-color: #282828;
  text-align: center;
`;
export const SelectChapter = styled.select`
  width: 300px;
  height: 30px;
`;
export const ComicImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

export const NextChapter = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 10px;
`;

export const Login = styled(Link)`
  cursor: pointer;
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;
