import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom/dist";
import styled from "styled-components";

export const Container = styled.div`
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
export const TopComment = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;
export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const BoxComment = styled.div`
  width: 100%;
`;
export const CustomTextArea = styled(Input.TextArea)`
  height: 100px !important;
`;

export const CustomButton = styled(Button)`
  width: 100px !important;
`;
export const MainComment = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: 16px;
`;

export const Comment = styled.div`
  width: 100%;
`;

export const ContentComment = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 5px;
`;

export const NameComment = styled.div`
  display: flex;
  border-bottom: 1px solid #bbb9b9;
  padding-bottom: 4px;
  margin-bottom: 4px;
  align-items: center;
  gap: 5px;
`;
export const Name = styled.h4`
  margin: 0;
  color: #0084ff;
`;
export const Text = styled.p`
  color: #0084ff;
  font-style: italic;
`;

export const Reply = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 6px;
`;
export const TextReply = styled.p`
  margin: 0;
  color: #0084ff;
`;

export const Fillter = styled.div`
  text-align: end;
  margin-bottom: 10px;
`;

export const Login = styled(Link)`
  cursor: pointer;
  color: #0084ff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;
export const Moment = styled(Text)`
  color: gray;
  margin: 0;
  font-size: 13px;
`;
