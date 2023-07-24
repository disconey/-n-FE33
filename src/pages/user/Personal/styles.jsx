import styled from "styled-components";

export const PersonalWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 20px;
  background-color: white;
  display: flex;
  gap: 20px;
`;

export const LeftPersonal = styled.div`
  width: 200px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 180px;
`;

export const NamePersonal = styled.h3`
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
`;

export const ListPersonal = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const UserLayoutHeader = styled.div``;
export const ItemPersonal = styled.li`
  height: 35px;
  width: 200px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ccc;
  }
`;

export const RightPersonal = styled.div`
  width: calc(100% - 200px);
`;
