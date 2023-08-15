import { Button } from "antd";
import styled from "styled-components";

export const Reading = styled.div`
  background-color: white;
  margin-bottom: 16px;
`;
export const TitleReading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  padding: 12px 16px 16px;
`;
export const TopView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 16px;
`;
export const Text = styled.h2`
  border-bottom: 2px solid #6197f1;
`;
export const P = styled.p`
  text-decoration: none;
  font-style: italic;
  color: black;
  &:hover {
    text-decoration: revert;
    color: blue;
  }
`;

export const CardReading = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e3e3e3;
`;
export const Item = styled.div`
  height: 111px;
`;
export const NameComic = styled.h4`
  margin: 0;
`;
export const ImgComic = styled.img`
  width: 90px;
  height: 110px;
`;

export const Charts = styled.div`
  background-color: white;
  text-align: center;
`;
export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Li = styled.li``;
export const CardItemCharts = styled.div`
  display: flex;
  padding: 16px 8px;
  border-bottom: 1px solid #e3e3e3;
`;
export const Number = styled.h1`
  color: red;
  width: 50px;
  justify-content: center;
  display: flex;
`;
export const ImgComicCharts = styled.img`
  width: 70px;
  height: 100px;
  object-fit: cover;
`;
export const ContentCharts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: 12px;
`;

export const ItemSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 20px;
  margin-bottom: 5px;
`;

export const Category = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const UlCategory = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
export const LiCategory = styled.li`
  margin: 10px;
  &:hover {
    color: #6197f1;
  }
`;
export const CenterButton = styled.div`
  text-align: center;
  width: 100%;
  height: 50px;
`;

export const CustomButton = styled(Button)`
  text-align: center;
`;

export const RightContentWrapper = styled.div`
  margin-top: 16px;
`;

export const TopViewWrapper = styled.div`
  background-color: white;
`;
