import { Button, Form, Input, Select, Upload } from "antd";
import * as S from "./styles";
import useScrollToTop from "hooks/useSrcollToTop";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/dist";
import { useEffect } from "react";
import { getUserInfoRequest } from "redux/slicers/auth.slice";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const AccountInfo = () => {
  useScrollToTop();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const { userInfo } = useSelector((state) => state.auth);
  const { id } = useParams();
  useScrollToTop();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoRequest({ id: parseInt(id) }));
  }, []);

  return (
    <div>
      <S.Title>Cập nhật thông tin tài khoản</S.Title>
      <S.CustomForm
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <S.Container>
          <Form.Item
            name="nickname"
            label="Họ và Tên"
            tooltip="Bạn muốn người khác gọi mình là gì?"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Email nhập vào không hợp lệ!",
              },
              {
                required: true,
                message: "Vui Lòng nhập E-mail!",
              },
            ]}
          >
            <Input disabled placeholder="pm91343@gmail.com" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Giới tính"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn giới tính!",
              },
            ]}
          >
            <Select placeholder="Chọn giới tính của bạn">
              <Option value="male">Nam</Option>
              <Option value="female">Nữ</Option>
              <Option value="other">Khác</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </S.Container>
        <div>
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
        </div>
      </S.CustomForm>
    </div>
  );
};
export default AccountInfo;
