import { Tag } from "antd";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const { CheckableTag } = Tag;
export const MainFilterSearch = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
`;

export const MainFilterContainer = styled.div`
  background-color: white;
  padding: 8px 16px 16px;
  margin-bottom: 32px;
`;

export const FilterTitle = styled.div`
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
`;

export const FilterSearch = styled.div`
  width: 100%;
`;

export const Type = styled.div`
  margin-top: 7px;
`;

export const CheckTag = styled(CheckableTag)`
  padding: 5px 10px 5px 10px;
  font-size: 15px;
`;

export const LeftCard = styled.div`
  width: 100%;
`;

export const CardContent = styled.div``;

export const FilterSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ddd;
`;
export const Pagination = styled(ReactPaginate)`
  display: inline-block;
  display: flex;
  > li > a {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    &.active {
      background-color: #4caf50;
      color: white;
    }

    &:hover:not(.active) {
      background-color: #ddd;
    }
  }
`;
