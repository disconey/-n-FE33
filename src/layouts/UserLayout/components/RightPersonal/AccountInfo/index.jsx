import { Button, Form, Input, Select, Upload, message } from "antd";
import * as S from "./styles";
import useScrollToTop from "hooks/useSrcollToTop";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom/dist";
import { useEffect, useState } from "react";
import {
  getUserInfoRequest,
  updateUserInfoRequest,
} from "redux/slicers/auth.slice";

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
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const AccountInfo = () => {
  useScrollToTop();
  const [updateForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
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

  const initialValues = {
    name: userInfo.data.fullName,
    email: userInfo.data.email,
  };

  const handleSumbit = async (values) => {};

  return (
    <div>
      <S.Title>Cập nhật thông tin tài khoản</S.Title>
      <S.CustomForm
        {...formItemLayout}
        form={updateForm}
        name="updateInfo"
        defaultValue={initialValues}
        onFinish={(values) => handleSumbit(values)}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <S.Container>
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
          <Form.Item name="email" label="E-mail">
            <Input disabled placeholder={userInfo.data.email} />
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
            name="upload"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
        </div>
      </S.CustomForm>
    </div>
  );
};
export default AccountInfo;
