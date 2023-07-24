import React, { useMemo } from "react";
import { EyeOutlined, HeartOutlined, MessageOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";

import * as S from "./styles";
import { ROUTES } from "constants/routes";
import { useSelector } from "react-redux";
import { generatePath } from "react-router-dom/dist";
import moment from "moment/moment";
const ProductCard = () => {
  const { productList } = useSelector((state) => state.product);
  const { chapterList } = useSelector((state) => state.chapter);
  const navigate = useNavigate();

  const renderProductChapter = useMemo(() => {
    return chapterList.data.map((item) => {
      return (
        <S.TextContent>
          <div>
            <Link to={generatePath(ROUTES.CHAPTER_PAGE, { id: item.id })}>
              <S.Chapter>{item.name}</S.Chapter>
            </Link>
          </div>
          <S.ViewChapterAt>
            <S.Text>{moment(item.createdAt).fromNow()}</S.Text>
          </S.ViewChapterAt>
        </S.TextContent>
      );
    });
  }, [chapterList.data]);

  return (
    <>
      {productList.data.map((item) => {
        return (
          <Col key={item.id} lg={6} md={8} xs={12}>
            <S.CardItem>
              <Link to={generatePath(ROUTES.DETAIL_CARD, { id: item.id })}>
                <S.Img src={item.avatar} alt="" />
              </Link>
              <S.SideImg>
                <Row gutter={[16, 16]} justify="center">
                  <S.ItemSideIcon>
                    <EyeOutlined />
                    <S.Text>333</S.Text>
                  </S.ItemSideIcon>
                  <S.ItemSideIcon>
                    <MessageOutlined />
                    <S.Text>{item.reviews?.length}</S.Text>
                  </S.ItemSideIcon>
                  <S.ItemSideIcon>
                    <HeartOutlined />
                    <S.Text>111</S.Text>
                  </S.ItemSideIcon>
                </Row>
              </S.SideImg>
              <S.SLink to={generatePath(ROUTES.DETAIL_CARD, { id: item.id })}>
                <S.NameComic>{item?.name}</S.NameComic>
              </S.SLink>
              {renderProductChapter}
            </S.CardItem>
          </Col>
        );
      })}
    </>
  );
};

export default ProductCard;
