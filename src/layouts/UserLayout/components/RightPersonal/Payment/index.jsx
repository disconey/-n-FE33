import { Button, Form, Input, Select, Space } from "antd";
import React, { useEffect } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoRequest, paymentRequest } from "redux/slicers/auth.slice";
import { useNavigate, useParams } from "react-router-dom/dist";
import { ROUTES } from "constants/routes";
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
const PaymentPage = () => {
  const [paymentForm] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserInfoRequest({ id: parseInt(id) }));
  }, []);

  const handleSumbit = (values) => {
    console.log("🚀 ~ file: index.jsx:51 ~ handleSumbit ~ values:", values);
    dispatch(
      paymentRequest({
        data: {
          id: userInfo.data.id,
          coin: userInfo.data.coin + parseInt(values.gender),
        },
        callback: () => navigate(ROUTES.PERSONAL.GENERALINFO),
      })
    );
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="deposit">
      <h2>Thanh toán qua thẻ cào</h2>
      <div>
        <S.BlueWarning>
          <p>
            Vui lòng điền theo thông tin thẻ bên dưới, chọn mệnh giá và điền đầy
            đủ thông tin, hệ thống sẽ kiểm tra và nạp xu tương ứng cho bạn.
          </p>
          <p>
            Chú ý: Vui lòng chọn đúng mệnh giá, hệ thống rất xin lỗi và sẽ trừ
            50% nếu bạn chọn sai.
          </p>
          <p>Xin cảm ơn!</p>
        </S.BlueWarning>
        <S.RedWarning>
          <p>
            Các bạn đã nhập thông tin thẻ trước đó mà không hiển thị trong phần
            lịch sử nạp và chưa nhận được xu, vui lòng nhập lại. Liên hệ fanpage
            nếu bạn vẫn chưa nhận được xu. Rất xin lỗi vì sự bất tiện này!
          </p>
        </S.RedWarning>
      </div>
      <S.Deposit>
        <Space>
          <Form
            {...formItemLayout}
            form={paymentForm}
            name="register"
            layout="vertical"
            onFinish={(values) => handleSumbit(values)}
            style={{
              width: "400px",
            }}
            scrollToFirstError
          >
            {/* <Form.Item
            name="gender"
            label="Loại thẻ"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn Loại thẻ!",
              },
            ]}
          >
            <Select placeholder="Chọn loại thẻ">
              <Option value="">Viettel</Option>
              <Option value="">Vinaphone</Option>
              <Option value="">Mobifone</Option>
              <Option value="">Vietnamobile</Option>
              <Option value="">Zing</Option>
            </Select>
          </Form.Item> */}
            <Form.Item
              name="gender"
              label="Mệnh giá"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn mệnh giá!",
                },
              ]}
            >
              <Select placeholder="Chọn mệnh giá ">
                <Option value="100">10,000</Option>
                <Option value="200">20,000</Option>
                <Option value="500">50,000</Option>
                <Option value="1000">100,000</Option>
                <Option value="2000">200,000</Option>
                <Option value="5000">500,000</Option>
              </Select>
            </Form.Item>
            {/* <Form.Item
            name="nickname"
            label="Số Serial"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập Số Serial!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Mã thẻ"
            rules={[
              {
                required: true,
                message: "Vui Lòng nhập Mã thẻ",
              },
            ]}
          >
            <Input />
          </Form.Item> */}
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Nạp xu
              </Button>
            </Form.Item>
          </Form>
          <div>
            <h3>Bảng quy đổi</h3>
            <S.Table>
              <thead>
                <tr>
                  <S.Th>Số tiền nạp</S.Th>
                  <S.Th>Số xu nhận tương ứng</S.Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <S.Td>10,000 đ</S.Td>
                  <S.Td>100 xu</S.Td>
                </tr>
                <tr>
                  <S.Td>20,000 đ</S.Td>
                  <S.Td>200 xu</S.Td>
                </tr>
                <tr>
                  <S.Td>50,000 đ</S.Td>
                  <S.Td>500 xu</S.Td>
                </tr>
                <tr>
                  <S.Td>100,000 đ</S.Td>
                  <S.Td>1000 xu</S.Td>
                </tr>
                <tr>
                  <S.Td>200,000 đ</S.Td>
                  <S.Td>2000 xu</S.Td>
                </tr>
                <tr>
                  <S.Td>500,000 đ</S.Td>
                  <S.Td>5000 xu</S.Td>
                </tr>
              </tbody>
            </S.Table>
          </div>
        </Space>
      </S.Deposit>
      <S.GreenWarning>
        <p>
          Lưu ý! Sau khi nhập thông tin mã thẻ, hệ thống sẽ kiểm tra và gửi cho
          bạn mã code ở THÔNG BÁO sau đó bạn vào phần nhập code để nhận xu thành
          công.
        </p>
      </S.GreenWarning>
    </div>
  );
};

export default PaymentPage;
