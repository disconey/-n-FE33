import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Select } from "antd";
import useScrollToTop from "hooks/useSrcollToTop";

import { updateUserInfoRequest } from "redux/slicers/auth.slice";

const AccountInfo = () => {
  useScrollToTop();
  const [updateUserInfoForm] = Form.useForm();

  const { userInfo, updateUserInfoData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const initialValues = {
    fullName: userInfo.data.fullName,
    email: userInfo.data.email,
    phoneNumber: userInfo.data.phoneNumber,
    gender: userInfo.data.gender,
  };

  useEffect(() => {
    if (userInfo.data.id) {
      updateUserInfoForm.resetFields();
    }
  }, [userInfo.data]);

  const handleUpdateUserInfo = (values) => {
    dispatch(
      updateUserInfoRequest({
        id: userInfo.data.id,
        data: values,
      })
    );
  };

  return (
    <Form
      form={updateUserInfoForm}
      name="updateUserInfoForm"
      layout="vertical"
      initialValues={initialValues}
      onFinish={(values) => handleUpdateUserInfo(values)}
    >
      <Form.Item
        name="fullName"
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
        label="Email"
        name="email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        name="phoneNumber"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
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
          <Select.Option value="male">Nam</Select.Option>
          <Select.Option value="female">Nữ</Select.Option>
          <Select.Option value="other">Khác</Select.Option>
        </Select>
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        block
        loading={updateUserInfoData.load}
      >
        Cập nhật
      </Button>
    </Form>
  );
};
export default AccountInfo;
