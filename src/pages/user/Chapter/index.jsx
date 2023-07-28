import React, { useEffect, useMemo } from "react";
import {
  BugOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  HeartOutlined,
  HomeOutlined,
  LeftOutlined,
  RightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import pic from "img/Chapter/0946759826_01-170.jpg";
import useScrollToTop from "hooks/useSrcollToTop";
import Comment from "layouts/UserLayout/components/Comment";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getChapterDetailRequest,
  getChapterListRequest,
} from "redux/slicers/chapter.slice";
import { getProductDetailRequest } from "redux/slicers/product.slice";

import { generatePath, useNavigate, useParams } from "react-router-dom/dist";
import { ROUTES } from "constants/routes";
const ChapterPage = () => {
  useScrollToTop();
  const { comicId, chapterId } = useParams();
  console.log("🚀 ~ file: index.jsx:29 ~ ChapterPage ~ chapterId:", chapterId);
  const dispatch = useDispatch();
  const { chapterList, chapterDetail } = useSelector((state) => state.chapter);
  const { productDetail } = useSelector((state) => state.product);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getChapterDetailRequest({ id: parseInt(chapterId) }));
    dispatch(getChapterListRequest({ id: parseInt(comicId) }));
  }, []);

  useEffect(() => {
    let myTimeout;
    if (productDetail.data.id) {
      console.log(
        "🚀 ~ file: index.jsx:42 ~ useEffect ~ productDetail:",
        productDetail
      );
      myTimeout = setTimeout(() => {
        console.log("ahihi");
        dispatch(
          getProductDetailRequest({
            id: parseInt(chapterId),
            data: {
              view: productDetail.data.view + 1,
            },
          })
        );
      }, 1000);
    }
    return clearTimeout(myTimeout);
  }, [productDetail.data.id]);

  const renderChapterList = useMemo(() => {
    return chapterList.data.map((item) => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
  }, [chapterList.data]);
  const renderChapterDetail = useMemo(() => {
    if (!chapterDetail.data.imgcomic) return null;
    return chapterDetail.data.imgcomic.map((item) => {
      return (
        <S.BackroundImg key={item.id}>
          <S.ComicImg src={item} alt="" />
        </S.BackroundImg>
      );
    });
  }, [chapterDetail.data]);

  return (
    <div>
      <div>
        <S.HeaderContent>
          <S.TitleChap>Chiến binh học đường: Chapter 40</S.TitleChap>
          <S.MenuChapter>
            <Button type="primary">
              <HomeOutlined />
            </Button>
            <Button
              type="primary"
              onClick={() =>
                navigate(
                  generatePath(ROUTES.DETAIL_CARD, {
                    id: productDetail.data.id,
                  })
                )
              }
            >
              <UnorderedListOutlined />
            </Button>
            <Button type="primary">
              <CaretLeftOutlined />
            </Button>
            <S.SelectChapter>{renderChapterList}</S.SelectChapter>
            <Button type="primary">
              <CaretRightOutlined />
            </Button>
            <Button type="primary">
              <HeartOutlined /> Theo dõi
            </Button>
            <Button type="primary">
              <BugOutlined /> Báo lỗi
            </Button>
          </S.MenuChapter>
        </S.HeaderContent>

        {renderChapterDetail}
        {/* <S.BackroundImg>
          <S.ComicImg src={chapterDetail.data.imgcomic} alt="" />
        </S.BackroundImg> */}
      </div>
      <div>
        <div>
          <S.NextChapter>
            <Button type="primary">
              <HomeOutlined />
            </Button>
            <Button type="primary">
              <UnorderedListOutlined />
            </Button>
            <Button type="primary">
              <LeftOutlined /> Chap trước
            </Button>
            <Button type="primary">
              Chap sau <RightOutlined />
            </Button>
          </S.NextChapter>
        </div>
        <Comment />
      </div>
    </div>
  );
};

export default ChapterPage;
