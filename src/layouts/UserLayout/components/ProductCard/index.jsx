import React, { useEffect, useMemo } from "react";
import { EyeOutlined, HeartOutlined, MessageOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";

import * as S from "./styles";
import { ROUTES } from "constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { generatePath } from "react-router-dom/dist";
import moment from "moment/moment";
import { getChapterDetailRequest } from "redux/slicers/chapter.slice";
import { CHAPTER_LIMIT } from "constants/paging";
const ProductCard = () => {
  const { productList } = useSelector((state) => state.product);
  const { chapterList } = useSelector((state) => state.chapter);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const renderProductChapter = (comicId, chapters) => {
    if (!chapters) return null;
    return chapters.map((item, index) => {
      console.log("🚀 ~ file: index.jsx:21 ~ returnchapters.map ~ item:", item);
      if (index > 2) return null;
      return (
        <S.TextContent>
          <div>
            <Link
              to={generatePath(ROUTES.CHAPTER_PAGE, {
                comicId: comicId,
                chapterId: item.id,
              })}
            >
              <S.Chapter>{item.name}</S.Chapter>
            </Link>
          </div>
          <S.ViewChapterAt>
            <S.Text>{moment(item.createdAt).fromNow()}</S.Text>
          </S.ViewChapterAt>
        </S.TextContent>
      );
    });
  };

  return (
    <>
      {productList.data.map((item) => {
        return (
          <Col key={item.id} lg={6} md={12} xs={12}>
            <S.CardItem>
              <Link
                to={generatePath(ROUTES.DETAIL_CARD, { id: item.id })}
                style={{ display: "block", position: "relative" }}
              >
                <S.Img src={item.avatar} alt="" />
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
              </Link>

              <S.SLink to={generatePath(ROUTES.DETAIL_CARD, { id: item.id })}>
                <S.NameComic>{item?.name}</S.NameComic>
              </S.SLink>
              <S.ChapterWrapper>
                {renderProductChapter(item.id, item.chapters)}
              </S.ChapterWrapper>
            </S.CardItem>
          </Col>
        );
      })}
    </>
  );
};

export default ProductCard;
