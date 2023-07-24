import styled from "styled-components";

export const BlueWarning = styled.div`
  color: blue;
  background-color: #dff0d8;
  border-color: #d6e9c6;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
`;
export const RedWarning = styled(BlueWarning)`
  color: red;
`;

export const GreenWarning = styled(BlueWarning)`
  color: green;
`;

export const Deposit = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  border-bottom: 1px solid;
  padding: 9px;
  border-collapse: collapse;
  text-align: center;
`;
export const Td = styled.td`
  border-bottom: 1px solid;
  padding: 9px;
`;
export const Th = styled.th`
  border-bottom: 1px solid;
  padding: 9px;
`;
