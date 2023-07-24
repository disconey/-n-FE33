import { Button, Form, Input } from "antd";
import * as S from "./styles";

import useScrollToTop from "hooks/useSrcollToTop";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "redux/slicers/auth.slice";
import { useNavigate } from "react-router-dom/dist";
import { ROUTES } from "constants/routes";
import { useEffect } from "react";

const RegisterPage = () => {
  useScrollToTop();
  const [registerForm] = Form.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registerData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (registerData.error) {
      registerForm.setFields([
        {
          name: "email",
          errors: [registerData.error],
        },
      ]);
    }
  }, [registerData.error]);

  const handleSumbit = (values) => {
    dispatch(
      registerRequest({
        data: {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
          avatar:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
          coin: 0,
        },
        callback: () => navigate(ROUTES.LOGIN),
      })
    );
  };
  return (
    <S.RegisterWrapper>
      <S.Register>
        <S.TitleRegister>Tạo tài khoản</S.TitleRegister>
        <Form
          form={registerForm}
          name="registerForm"
          layout="vertical"
          onFinish={(values) => handleSumbit(values)}
          autoComplete="off"
        >
          <Form.Item
            label="Họ và tên"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Họ và tên là bắt buộc",
              },
              {
                type: "string",
                min: 3,
                max: 20,
                message: "Họ và tên phải từ 3-20 kí tự",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Email là bắt buộc",
              },
              {
                type: "email",
                message: "Email không đúng định dạng",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Mật khẩu là bắt buộc",
              },
              // {
              //   pattern:
              //     /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/g,
              //   message: "Mật khẩu yếu",
              // },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Xác nhận mật khẩu là bắt buộc",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Xác nhận mật khẩu không khớp")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Đăng ký
          </Button>
        </Form>
      </S.Register>
    </S.RegisterWrapper>
  );
};
export default RegisterPage;
