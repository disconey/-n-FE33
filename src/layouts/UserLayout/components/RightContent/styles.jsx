import { Button } from "antd";
import styled from "styled-components";

export const Reading = styled.div`
  height: 500px;
  background-color: white;
`;
export const TitleReading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  padding: 10px;
`;
export const Text = styled.h2`
  color: blue;
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

export const TopView = styled.h3`
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Charts = styled.div`
  background-color: white;
  text-align: center;
`;
export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Li = styled.li`
  margin-bottom: 30px;
`;
export const CardItemCharts = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #e3e3e3;
`;
export const Number = styled.h1`
  color: red;
  width: 50px;
  justify-content: center;
  display: flex;
`;
export const ImgComicCharts = styled.img`
  width: 100px;
  height: 140px;
`;
export const ContentCharts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
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
