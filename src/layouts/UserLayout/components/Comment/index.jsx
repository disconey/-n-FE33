import {
  CaretRightOutlined,
  CommentOutlined,
  DislikeOutlined,
  EllipsisOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import React, { useMemo } from "react";
import pic from "img/5647199849.jpg";
import * as S from "./styles";
import { Form, Input, Row } from "antd";
import { useSelector } from "react-redux/es";
import { Link } from "react-router-dom/dist";
import { ROUTES } from "constants/routes";
import { createReviewRequest } from "redux/slicers/review.slice";
import { useDispatch } from "react-redux";
import moment from "moment";
const Comment = () => {
  const dispatch = useDispatch();
  const [reviewForm] = Form.useForm();

  const { userInfo } = useSelector((state) => state.auth);
  const { productDetail } = useSelector((state) => state.product);
  const { reviewList } = useSelector((state) => state.review);

  const handleReviewProduct = (values) => {
    dispatch(
      createReviewRequest({
        data: {
          ...values,
          userId: userInfo.data.id,
          comicId: productDetail.data.id,
          avatar: userInfo.data.avatar,
        },
        callback: () => reviewForm.resetFields(),
      })
    );
  };
  const rederReviewList = useMemo(() => {
    return reviewList.data.map((item) => {
      return (
        <Row>
          <S.MainComment>
            <S.Avatar src={item.user.avatar} alt="" />
            <S.Comment>
              <S.ContentComment>
                <S.NameComment>
                  <S.Name>{item.user.fullName}</S.Name>
                  <S.Moment>
                    {moment(item.createdAt).fromNow("DD/MM/YYYY HH:mm")}
                  </S.Moment>
                </S.NameComment>
                <p>{item.comment}</p>
              </S.ContentComment>
              <S.Reply>
                <S.TextReply>
                  <MessageOutlined /> Trả lời
                </S.TextReply>
                <S.TextReply>
                  <LikeOutlined /> 0
                </S.TextReply>
                <S.TextReply>
                  <DislikeOutlined /> 0
                </S.TextReply>
                <S.TextReply>
                  <EllipsisOutlined />
                </S.TextReply>
              </S.Reply>
            </S.Comment>
          </S.MainComment>
        </Row>
      );
    });
  }, [reviewList.data]);
  return (
    <S.Container>
      <h4>
        <CommentOutlined /> Bình Luận (2,145)
      </h4>
      {userInfo.data.id ? (
        <S.TopComment>
          <S.Avatar src={userInfo.data.avatar} alt="" />
          <S.BoxComment>
            <Form
              form={reviewForm}
              name="reviewForm"
              initialValues={{
                comment: "",
              }}
              onFinish={(values) => handleReviewProduct(values)}
            >
              <Form.Item
                name="comment"
                rules={[{ required: true, message: "Nhận xét là bắt buộc" }]}
              >
                <S.CustomTextArea />
              </Form.Item>
              <S.CustomButton
                type="primary"
                block
                size={"large"}
                htmlType="submit"
              >
                Gửi
              </S.CustomButton>
            </Form>
          </S.BoxComment>
        </S.TopComment>
      ) : (
        <h3>
          Để có thể bình luận bạn cần phải{" "}
          <S.Login to={ROUTES.LOGIN}>Đăng nhập</S.Login>
        </h3>
      )}

      <div>{rederReviewList}</div>
    </S.Container>
  );
};

export default Comment;
