import React, { useEffect } from "react";

import pic from "img/7334991209.jpg";
import * as S from "./styles";
import { ROUTES } from "constants/routes";
import { useDispatch, useSelector } from "react-redux";
import useScrollToTop from "hooks/useSrcollToTop";
import { generatePath, useNavigate, useParams } from "react-router-dom/dist";
import { getUserInfoRequest } from "redux/slicers/auth.slice";
const GeneralInfo = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { id } = useParams();
  useScrollToTop();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserInfoRequest({ id: parseInt(id) }));
  }, []);
  return (
    <S.GeneralInfo>
      <h2>Thông tin chung</h2>
      <S.AccountInfo>
        <S.TitlePersonal>
          <h3>Thông tin tài khoản</h3>
          <S.SLink
            to={generatePath(ROUTES.PERSONAL.ACCOUNTINFO, {
              id: userInfo.data.id,
            })}
          >
            Chỉnh sửa
          </S.SLink>
        </S.TitlePersonal>
        <S.InfoDetail>
          <S.TextDetail>
            <p>Họ và tên</p>
            <p>{userInfo.data.fullName}</p>
          </S.TextDetail>
          <S.TextDetail>
            <p>Email</p>
            <p>{userInfo.data.email}</p>
          </S.TextDetail>
          <S.TextDetail>
            <p>Giới tính</p>
            <p>Nam</p>
          </S.TextDetail>
          <S.TextDetail>
            <p>Xu</p>
            <p>250</p>
          </S.TextDetail>
        </S.InfoDetail>
      </S.AccountInfo>
      <S.ComicFollow>
        <S.FollowPersonal>
          <h3>Truyện theo dõi</h3>
          <S.SLink to={ROUTES.PERSONAL_PAGE}>Xem tất cả</S.SLink>
        </S.FollowPersonal>
        <S.FollowTable>
          <thead>
            <tr>
              <S.Nowrap></S.Nowrap>
              <S.Nowrap>TÊN TRUYỆN</S.Nowrap>
              <S.Nowrap>XEM GẦN NHẤT</S.Nowrap>
              <S.Nowrap>CHAP MỚI NHẤT</S.Nowrap>
            </tr>
          </thead>
          <tbody className="content-table">
            <tr>
              <S.NowrapChapter>
                <S.Img src={pic} alt="" />
              </S.NowrapChapter>
              <S.NowrapChapter>
                <S.SLink to={ROUTES.DETAIL_CARD}>Để có thể sống sót</S.SLink>
                <p>Bỏ theo dõi</p>
              </S.NowrapChapter>
              <S.NowrapChapter>
                <S.SLink to={ROUTES.CHAPTER_PAGE}>Chapter 1</S.SLink>
                <S.Text>1 giờ trước</S.Text>
              </S.NowrapChapter>
              <S.NowrapChapter>
                <S.SLink to={ROUTES.CHAPTER_PAGE}>Chapter 32</S.SLink>
                <S.Text>1 giờ trước</S.Text>
              </S.NowrapChapter>
            </tr>
          </tbody>
        </S.FollowTable>
      </S.ComicFollow>
      <S.ComicFollow>
        <S.TitlePersonal>
          <h3>Bình luận</h3>
          <S.SLink to={ROUTES.PERSONAL_PAGE}>Xem tất cả</S.SLink>
        </S.TitlePersonal>
        <S.FollowTable>
          <thead className="top-table">
            <tr>
              <S.Nowrap></S.Nowrap>
              <S.Nowrap>TÊN TRUYỆN</S.Nowrap>
              <S.Nowrap>Thời gian</S.Nowrap>
              <S.Nowrap>Nội dung</S.Nowrap>
            </tr>
          </thead>
          <tbody>
            <tr>
              <S.NowrapChapter>
                <S.Img src={pic} alt="" />
              </S.NowrapChapter>
              <S.NowrapChapter>
                <S.SLink to={ROUTES.DETAIL_CARD}>Để có thể sống sót</S.SLink>
              </S.NowrapChapter>
              <S.NowrapChapter>
                <S.Text>1 giờ trước</S.Text>
              </S.NowrapChapter>
              <S.NowrapChapter>
                <S.Text>truyện hay quá ádasdasdas</S.Text>
              </S.NowrapChapter>
            </tr>
          </tbody>
        </S.FollowTable>
      </S.ComicFollow>
    </S.GeneralInfo>
  );
};

export default GeneralInfo;
