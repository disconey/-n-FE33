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
import { Button, Modal } from "antd";
import pic from "img/Chapter/0946759826_01-170.jpg";
import useScrollToTop from "hooks/useSrcollToTop";
import Comment from "layouts/UserLayout/components/Comment";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
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
const ChapterPage = () => {
  useScrollToTop();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { comicId, chapterId } = useParams();

  const dispatch = useDispatch();
  const { chapterList, chapterDetail } = useSelector((state) => state.chapter);
  const { userInfo } = useSelector((state) => state.auth);
  const { productDetail } = useSelector((state) => state.product);
  const { orderList } = useSelector((state) => state.order);

  const navigate = useNavigate();
  // const myTimeout = useRef(null);

  useEffect(() => {
    dispatch(getChapterListRequest({ id: parseInt(comicId) }));
    dispatch(getProductDetailRequest({ id: parseInt(comicId) }));
    dispatch(getChapterDetailRequest({ id: parseInt(chapterId) }));
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
        },
      })
    );
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const renderChapter = () => {
    if (chapterDetail.data.price) {
      <div>
        <h4>
          Bạn cần dùng{" "}
          <span style={{ color: "red" }}>{chapterDetail.data.price} xu</span> để
          mở khóa chapter này
        </h4>
        <>
          <Button type="primary" onClick={showModal} danger>
            Mở khoá
          </Button>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <h4>
              Bạn cần dùng{" "}
              <span style={{ color: "red" }}>
                {chapterDetail.data.price} xu
              </span>{" "}
              để mở khóa chapter này
            </h4>
            <h4>
              Số xu hiện tại của bạn là <span>{userInfo.data.coin}</span>, bạn
              có thể nạp xu tại đây
            </h4>
          </Modal>
        </>
      </div>;
    } else if (orderList.data.userId === userInfo.data.id) {
      renderChapterDetail(chapterDetail.data.id, chapterDetail.data.imgcomics);
    } else if (userInfo.data.coin >= chapterDetail.data.price) {
      <div>
        <h4>Bạn không đủ xu để mở khoá chapter này</h4>
        <h4>
          Xin vui lòng <Link to={ROUTES.PERSONAL.PAYMENT}>Nạp tiền</Link>{" "}
        </h4>
      </div>;
    } else if (userInfo.data.id) {
      <h3>
        Để có thể đọc chapter này bạn cần phải{" "}
        <S.Login to={ROUTES.LOGIN}>Đăng nhập</S.Login>
      </h3>;
    } else {
      renderChapterDetail(chapterDetail.data.id, chapterDetail.data.imgcomics);
    }
  };

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
            <S.SelectChapter>
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
        {renderChapter}

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
