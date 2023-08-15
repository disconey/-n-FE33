import React, { useEffect } from "react";
import Carousel from "layouts/UserLayout/components/Carousel";
import ProductCard from "layouts/UserLayout/components/ProductCard";
import RightContent from "layouts/UserLayout/components/RightContent";

import useScrollToTop from "hooks/useSrcollToTop";
import { Col, Row } from "antd";

import * as S from "./styles";
import { useDispatch } from "react-redux";
import { getProductListRequest } from "redux/slicers/product.slice";
import {
  getChapterDetailRequest,
  getChapterListRequest,
} from "redux/slicers/chapter.slice";
import { CHAPTER_LIMIT } from "constants/paging";
const HomePage = () => {
  const dispatch = useDispatch();
  useScrollToTop();
  useEffect(() => {
    dispatch(getProductListRequest());
    dispatch(getChapterListRequest());
  }, []);
  return (
    <div>
      <Carousel />
      <S.HomeWrapper>
        <Row gutter={[16, 16]}>
          <Col lg={16} md={16} sm={24}>
            <S.Left>
              <S.ComicWrapper>
                <S.TitleWrapper>
                  <S.Title>Truyện Hot</S.Title>
                  <S.CustomButton size="small">Xem Thêm</S.CustomButton>
                </S.TitleWrapper>
                <Row gutter={[16, 16]}>
                  <ProductCard />
                </Row>
              </S.ComicWrapper>
              <S.ComicWrapper>
                <S.TitleWrapper>
                  <S.Title>Truyện Mới</S.Title>
                  <S.CustomButton size="small">Xem Thêm</S.CustomButton>
                </S.TitleWrapper>
                <Row gutter={[16, 16]}>
                  <ProductCard />
                </Row>
              </S.ComicWrapper>
              <S.ComicWrapper>
                <S.TitleWrapper>
                  <S.Title>Truyện Tận thế</S.Title>
                  <S.CustomButton size="small">Xem Thêm</S.CustomButton>
                </S.TitleWrapper>
                <Row gutter={[16, 16]}>
                  <ProductCard />
                </Row>
              </S.ComicWrapper>
            </S.Left>
          </Col>
          <Col lg={8} md={8} sm={24}>
            <div>
              <RightContent />
            </div>
          </Col>
        </Row>
      </S.HomeWrapper>
    </div>
  );
};

export default HomePage;
