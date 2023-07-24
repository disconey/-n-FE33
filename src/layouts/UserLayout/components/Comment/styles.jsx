import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom/dist";
import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
`;
export const TopComment = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;
export const Avatar = styled.img`
  width: 100px;
  height: 80px;
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
  margin-bottom: 20px;
`;

export const Comment = styled.div`
  width: 100%;
`;

export const ContentComment = styled.div`
  border: 1px solid #bbb9b9;
  padding: 5px;
  height: 80px;
`;

export const NameComment = styled.div`
  display: flex;
  border-bottom: 1px solid #bbb9b9;
  align-items: center;
  height: 30px;
  gap: 5px;
`;
export const Name = styled.h4`
  margin: 0;
  color: blue;
`;
export const Text = styled.p`
  color: blue;
  font-style: italic;
`;

export const Reply = styled.div`
  display: flex;
  gap: 20px;
`;
export const TextReply = styled.p`
  margin: 0;
  color: blue;
`;

export const Fillter = styled.div`
  text-align: end;
  margin-bottom: 10px;
`;

export const H4 = styled.h4`
  margin-bottom: 10px;
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
export const Moment = styled(Text)`
  color: gray;
  margin: 0;
  font-size: 13px;
`;
