import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { Breadcrumb, Button, Modal, Space } from "antd";
import pic from "img/Chapter/0946759826_01-170.jpg";
import useScrollToTop from "hooks/useSrcollToTop";
import Comment from "layouts/UserLayout/components/Comment";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";

import {
  clearChapterRequest,
  getChapterDetailRequest,
  getChapterListRequest,
  updateChapterDetailRequest,
} from "redux/slicers/chapter.slice";
import { getProductDetailRequest } from "redux/slicers/product.slice";

import {
  Link,
  generatePath,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom/dist";
import { ROUTES } from "constants/routes";
import {
  getUserInfoRequest,
  updateUserInfoRequest,
} from "redux/slicers/auth.slice";
import { addToHistoryRequest } from "redux/slicers/history.slice";
import { orderProductRequest } from "redux/slicers/order.slice";
import { setFilterParams } from "redux/slicers/common.slice";
import { CHAPTER_LIMIT } from "constants/paging";
const ChapterPage = () => {
  useScrollToTop();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { comicId, chapterId } = useParams();
  let { state } = useLocation();

  const dispatch = useDispatch();
  const { chapterList, chapterDetail } = useSelector((state) => state.chapter);
  const { userInfo } = useSelector((state) => state.auth);
  const { productDetail } = useSelector((state) => state.product);
  const { orderList } = useSelector((state) => state.order);
  const { filterParams } = useSelector((state) => state.common);

  const navigate = useNavigate();
  // const myTimeout = useRef(null);

  useEffect(() => {
    dispatch(
      getChapterListRequest({
        id: parseInt(comicId),
      })
    );
    dispatch(getProductDetailRequest({ id: parseInt(comicId) }));
    dispatch(
      getChapterDetailRequest({
        id: parseInt(chapterId),
        ...filterParams,
        page: 1,
        limit: CHAPTER_LIMIT,
      })
    );
    return () => dispatch(clearChapterRequest());
  }, []);

  useEffect(() => {
    if (chapterDetail.data.id) {
      dispatch(
        updateChapterDetailRequest({
          id: parseInt(chapterId),
          data: {
            view: chapterDetail.data.view + 1,
          },
        })
      );
      dispatch(
        addToHistoryRequest({
          data: {
            productId: productDetail.data.id,
            productName: productDetail.data.name,
            productAvatar: productDetail.data.avatar,
            chapterName: chapterDetail.data.name,
            chapterId: chapterDetail.data.id,
          },
        })
      );
    }
  }, [chapterDetail.data.id, chapterId]);

  // useEffect(() => {
  //   if (chapterDetail.data.id) {
  //     myTimeout.current = setTimeout(() => {
  //       console.log("ahihi");
  //       dispatch(
  //         updateChapterDetailRequest({
  //           id: parseInt(chapterId),
  //           data: {
  //             view: chapterDetail.data.view + 1,
  //           },
  //         })
  //       );
  //     }, 1000);
  //   }
  // }, [chapterDetail.data]);

  const renderChapterList = (comicId, chapters) => {
    if (!chapters) return null;
    return chapters?.map((item) => {
      return <option>{item.name}</option>;
    });
  };

  const renderChapterDetail = (comicId, imgcomics) => {
    if (!imgcomics) return null;
    return imgcomics.map((item) => {
      return (
        <S.BackroundImg key={item.id}>
          <S.ComicImg src={item.img} alt="" />
        </S.BackroundImg>
      );
    });
  };
  // const renderChapterDetail = useMemo(() => {
  //   if (!chapterDetail.data.imgcomic) return null;
  //   return chapterDetail.data.imgcomic.map((item) => {
  //     return (
  //       <S.BackroundImg key={item.id}>
  //         <S.ComicImg src={item.img} alt="" />
  //       </S.BackroundImg>
  //     );
  //   });
  // }, [chapterDetail.data]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(
      updateUserInfoRequest({
        id: userInfo.data.id,
        data: {
          coin: userInfo.data.coin - chapterDetail.data.price,
        },
      })
    );
    dispatch(
      orderProductRequest({
        data: {
          productName: productDetail.data.name,
          chapterName: chapterDetail.data.name,
          userId: userInfo.data.id,
          price: chapterDetail.data.price,
          chapterId: chapterDetail.data.id,
        },
      })
    );
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleNextChapter = () => {};

  const handleFilter = (key, value) => {
    const newFilterParams = {
      ...filterParams,
      [key]: value,
    };
    dispatch(setFilterParams(newFilterParams));
    dispatch(
      getProductDetailRequest({
        ...newFilterParams,
        page: 1,
        limit: CHAPTER_LIMIT,
      })
    );
    navigate({
      pathname: ROUTES.FITLER_SEARCH_PAGE,
      search: qs.stringify(newFilterParams),
    });
  };
  return (
    <div>
      <div>
        <S.HeaderContent>
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
                title: (
                  <Link to={ROUTES.FITLER_SEARCH_PAGE}>Danh sách truyện</Link>
                ),
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
                title: <Link>{productDetail.data.name}</Link>,
                onClick: () =>
                  navigate(
                    generatePath(ROUTES.DETAIL_CARD, {
                      id: productDetail.data.id,
                    })
                  ),
              },
              {
                title: chapterDetail.data.name,
              },
            ]}
            style={{ marginBottom: 8 }}
          />
          <S.TitleChap>
            {productDetail.data.name}: {chapterDetail.data.name}
          </S.TitleChap>
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
            <S.SelectChapter
              onChange={(value) => handleFilter("statusId", value)}
              value={filterParams.status}
            >
              {renderChapterList(
                productDetail.data.id,
                productDetail.data.chapters
              )}
            </S.SelectChapter>
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
        <S.HeaderContent>
          {orderList?.data.userId === userInfo.data.id ? (
            renderChapterDetail(
              chapterDetail.data.id,
              chapterDetail.data.imgcomics
            )
          ) : userInfo.data.coin >= chapterDetail.data.price ? (
            <div>
              <h4>Bạn không đủ xu để mở khoá chapter này</h4>
              <h4>
                Xin vui lòng <Link to={ROUTES.PERSONAL.PAYMENT}>Nạp tiền</Link>{" "}
              </h4>
            </div>
          ) : chapterDetail.data.price ? (
            <div>
              <h4>
                Bạn cần dùng{" "}
                <span style={{ color: "red" }}>
                  {chapterDetail.data.price} xu
                </span>{" "}
                để mở khóa chapter này
              </h4>
              <>
                <Button type="primary" onClick={showModal} danger>
                  Mở khoá
                </Button>
                <Modal
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <h4>
                    Bạn cần dùng{" "}
                    <span style={{ color: "red" }}>
                      {chapterDetail.data.price} xu
                    </span>{" "}
                    để mở khóa chapter này
                  </h4>
                  <h4>
                    Số xu hiện tại của bạn là <span>{userInfo.data.coin}</span>,
                    bạn có thể nạp xu tại đây
                  </h4>
                </Modal>
              </>
            </div>
          ) : userInfo.data.id ? (
            renderChapterDetail(
              chapterDetail.data.id,
              chapterDetail.data.imgcomics
            )
          ) : (
            <h3>
              Để có thể đọc chapter này bạn cần phải{" "}
              <S.Login to={ROUTES.LOGIN}>Đăng nhập</S.Login>
            </h3>
          )}
        </S.HeaderContent>

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
