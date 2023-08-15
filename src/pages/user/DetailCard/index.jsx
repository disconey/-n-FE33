import React, { useEffect, useMemo } from "react";
import pic from "img/0313337776.jpg";
import {
  BugOutlined,
  DeleteOutlined,
  EyeOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  LockOutlined,
  ReadOutlined,
  SlackOutlined,
  SyncOutlined,
  TagsOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import useScrollToTop from "hooks/useSrcollToTop";
import qs from "qs";

import * as S from "./styles";
import { ROUTES } from "constants/routes";
import Comment from "layouts/UserLayout/components/Comment";
import { Link, generatePath, useParams } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailRequest } from "redux/slicers/product.slice";
import { getChapterListRequest } from "redux/slicers/chapter.slice";
import { getReviewListRequest } from "redux/slicers/review.slice";
import { Breadcrumb, Space, notification } from "antd";
import {
  followProductRequest,
  unFollowProductRequest,
} from "redux/slicers/follow.slice";
import { setFilterParams } from "redux/slicers/common.slice";

const DetailCard = () => {
  const { id } = useParams();
  useScrollToTop();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);
  const { chapterList } = useSelector((state) => state.chapter);
  const { userInfo } = useSelector((state) => state.auth);
  const { filterParams } = useSelector((state) => state.common);

  console.log(
    "🚀 ~ file: index.jsx:30 ~ DetailCard ~ chapterList:",
    chapterList
  );
  useEffect(() => {
    dispatch(getProductDetailRequest({ id: parseInt(id) }));
    dispatch(getChapterListRequest({ id: parseInt(id) }));
    dispatch(getReviewListRequest({ productId: parseInt(id) }));
  }, []);

  const renderProductChapter = (comicId, chapters) => {
    if (!chapters) return null;
    return chapters.map((item) => {
      return (
        <S.Li>
          <Space>
            <S.SLink
              to={generatePath(ROUTES.CHAPTER_PAGE, {
                comicId: comicId,
                chapterId: item.id,
              })}
            >
              {item.name}
            </S.SLink>
            {item.price ? (
              <Space size={4} style={{ color: "red" }}>
                <LockOutlined />
                {item.price}
              </Space>
            ) : (
              ""
            )}
          </Space>

          <S.CenterTextP>1 Ngày trước</S.CenterTextP>
          <S.TextP>928</S.TextP>
        </S.Li>
      );
    });
  };

  const isFollow = useMemo(
    () =>
      productDetail.data.follows?.some(
        (item) => item.userId === userInfo.data.id
      ),
    [productDetail.data.follows, userInfo.data.id]
  );

  const handleToggleFollow = () => {
    if (userInfo.data.id) {
      if (isFollow) {
        const followData = productDetail.data.follows?.find(
          (item) => item.userId === userInfo.data.id
        );
        dispatch(
          unFollowProductRequest({
            id: followData.id,
          })
        );
      } else {
        dispatch(
          followProductRequest({
            comicId: productDetail.data.id,
            userId: userInfo.data.id,
          })
        );
      }
    } else {
      notification.error({
        message: "Vui lòng đăng nhập để thực hiện chức năng này!",
      });
    }
  };
  return (
    <S.DetailCardWrapper>
      <Breadcrumb
        items={[
          {
            title: (
              <Link to={ROUTES.USER.HOME}>
                <Space>
                  <HomeOutlined />
                  <span>Trang chủ</span>
                </Space>
              </Link>
            ),
          },
          {
            title: <Link to={ROUTES.FITLER_SEARCH_PAGE}>Danh sách truyện</Link>,
          },
          {
            title: (
              <Link
                to={{
                  pathname: ROUTES.FITLER_SEARCH_PAGE,
                  search: qs.stringify({
                    ...filterParams,
                    categoryId: [productDetail.data.categoryId],
                  }),
                }}
              >
                {productDetail.data.category?.name}
              </Link>
            ),
            onClick: () =>
              dispatch(
                setFilterParams({
                  ...filterParams,
                  categoryId: [productDetail.data.categoryId],
                })
              ),
          },
          {
            title: productDetail.data.name,
          },
        ]}
        style={{ margin: "16px 0" }}
      />
      <S.DetailCard>
        <S.ContentDetail>
          <S.Img src={pic} alt="" />
          <div>
            <S.TitleDetail>{productDetail.data.name}</S.TitleDetail>
            <div>
              <S.CustomButton type="primary" ghost>
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
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
                icon={isFollow ? <DeleteOutlined /> : <TagsOutlined />}
                size={"large"}
                className="blue"
                onClick={() => handleToggleFollow()}
              >
                {isFollow ? `Bỏ theo dõi` : `Theo dõi`}
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
      </S.DetailCard>
      <S.DetailCard>
        <h4>
          <InfoCircleOutlined /> Giới thiệu
        </h4>
        <p>{productDetail.data.description}</p>
      </S.DetailCard>
      <S.DetailCard>
        <h4>
          <UnorderedListOutlined /> Danh sách chương
        </h4>

        <S.ChapterTable>
          <S.TopTable>
            <S.Text>Chapter</S.Text>
            <S.Text
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Cập nhật
            </S.Text>
            <S.Text>Lượt xem</S.Text>
          </S.TopTable>
          <div>
            <S.Ul>
              {renderProductChapter(
                productDetail.data.id,
                productDetail.data.chapters
              )}
            </S.Ul>
          </div>
        </S.ChapterTable>
      </S.DetailCard>
      <Comment />
    </S.DetailCardWrapper>
  );
};

export default DetailCard;
