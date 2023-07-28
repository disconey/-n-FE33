import React, { useEffect, useMemo } from "react";
import pic from "img/0313337776.jpg";
import {
  BugOutlined,
  EyeOutlined,
  InfoCircleOutlined,
  ReadOutlined,
  SlackOutlined,
  SyncOutlined,
  TagsOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import useScrollToTop from "hooks/useSrcollToTop";

import * as S from "./styles";
import { ROUTES } from "constants/routes";
import Comment from "layouts/UserLayout/components/Comment";
import { generatePath, useParams } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailRequest } from "redux/slicers/product.slice";
import { getChapterListRequest } from "redux/slicers/chapter.slice";
import { getReviewListRequest } from "redux/slicers/review.slice";
const DetailCard = () => {
  const { id } = useParams();
  useScrollToTop();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);
  const { chapterList } = useSelector((state) => state.chapter);
  useEffect(() => {
    dispatch(getProductDetailRequest({ id: parseInt(id) }));
    dispatch(getChapterListRequest({ id: parseInt(id) }));
    dispatch(getReviewListRequest({ productId: parseInt(id) }));
  }, []);
  const renderProductChapter = useMemo(() => {
    return chapterList.data.map((item) => {
      return (
        <S.Li>
          <S.SLink
            to={generatePath(ROUTES.CHAPTER_PAGE, {
              comicId: parseInt(id),
              chapterId: item.id,
            })}
          >
            {item.name}
          </S.SLink>
          <S.TextP>1 Ngày trước</S.TextP>
          <S.TextP>928</S.TextP>
        </S.Li>
      );
    });
  }, [chapterList.data]);

  return (
    <div>
      <S.DetailCard>
        <S.ContentDetail>
          <S.Img src={pic} alt="" />
          <div>
            <S.TitleDetail>{productDetail.data.name}</S.TitleDetail>
            <div>
              <S.CustomButton size={"large"}>
                {productDetail.data.category?.name}
              </S.CustomButton>
            </div>
            <S.ComicContent>
              <S.ItemDetailCard>
                <S.ItemSmall>
                  <SlackOutlined />
                  <p>Tình trạng</p>
                </S.ItemSmall>
                <p>{productDetail.data.status?.name}</p>
              </S.ItemDetailCard>
              <S.ItemDetailCard>
                <S.ItemSmall>
                  <SyncOutlined />
                  <p>Cập nhật</p>
                </S.ItemSmall>
                <p>24 phút trước</p>
              </S.ItemDetailCard>
              <S.ItemDetailCard>
                <S.ItemSmall>
                  <EyeOutlined />
                  <p>Lượt xem</p>
                </S.ItemSmall>
                <p>111,111</p>
              </S.ItemDetailCard>
              <S.ItemDetailCard>
                <S.ItemSmall>
                  <TagsOutlined />
                  <p>Lượt theo dõi</p>
                </S.ItemSmall>
                <p>1,999</p>
              </S.ItemDetailCard>
            </S.ComicContent>
            <div>
              <S.RedButton
                type="primary"
                icon={<ReadOutlined />}
                size={"large"}
                className="red"
              >
                Đọc từ đầu
              </S.RedButton>
              <S.GreenButton
                type="primary"
                icon={<ReadOutlined />}
                size={"large"}
                className="green"
              >
                Đọc mới nhất
              </S.GreenButton>
              <S.BasicButton
                type="primary"
                icon={<TagsOutlined />}
                size={"large"}
                className="blue"
              >
                Theo dõi
              </S.BasicButton>
              <S.YellowButton
                type="primary"
                icon={<BugOutlined />}
                size={"large"}
                className="yellow"
              >
                Báo lỗi
              </S.YellowButton>
            </div>
          </div>
        </S.ContentDetail>
        <div>
          <h4>
            <InfoCircleOutlined /> Giới thiệu
          </h4>
          <p>{productDetail.data.description}</p>
        </div>
        <div>
          <h4>
            <UnorderedListOutlined /> Danh sách chương
          </h4>
          <S.ChapterTable>
            <S.TopTable>
              <S.Text>Chapter</S.Text>
              <S.Text>Cập nhật</S.Text>
              <S.Text>Lượt xem</S.Text>
            </S.TopTable>
            <div>
              <S.Ul>{renderProductChapter}</S.Ul>
            </div>
          </S.ChapterTable>
        </div>
        <Comment />
      </S.DetailCard>
    </div>
  );
};

export default DetailCard;
