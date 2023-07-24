import React from "react";
import { Button, Input, Form } from "antd";
import { Link } from "react-router-dom";
import useScrollToTop from "hooks/useSrcollToTop";
import { ROUTES } from "constants/routes";
import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "redux/slicers/auth.slice";
import { useNavigate } from "react-router-dom/dist";
import { useEffect } from "react";
const LoginPage = () => {
  useScrollToTop();

  const [loginForm] = Form.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginData } = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (loginData.error) {
      loginForm.setFields([
        {
          name: "email",
          errors: [" "],
        },
        {
          name: "password",
          errors: [loginData.error],
        },
      ]);
    }
  }, [loginData.error]);

  const handleSumbit = (values) => {
    dispatch(
      loginRequest({
        data: values,
        callback: () => navigate(ROUTES.USER.HOME),
      })
    );
  };

  if (accessToken) return navigate(ROUTES.USER.HOME);

  return (
    <S.LoginWrapper>
      <S.Login>
        <S.TitleLogin>Đăng nhập</S.TitleLogin>
        <Form
          form={loginForm}
          name="loginForm"
          layout="vertical"
          onFinish={(values) => handleSumbit(values)}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <div style={{ marginBottom: 16 }}>
            Bạn chưa có tài khoản? <Link to={ROUTES.REGISTER}>Đăng ký</Link>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            block
            // loading={loginData.loading}
          >
            Đăng nhập
          </Button>
        </Form>
      </S.Login>
    </S.LoginWrapper>
  );
};
export default LoginPage;
