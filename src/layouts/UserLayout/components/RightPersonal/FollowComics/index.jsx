import React, { useEffect } from "react";

import pic from "img/7334991209.jpg";
import * as S from "./styles";
import { ROUTES } from "constants/routes";
import { useDispatch, useSelector } from "react-redux";
import useScrollToTop from "hooks/useSrcollToTop";
import { generatePath, useNavigate, useParams } from "react-router-dom/dist";

const FollowComics = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { id } = useParams();
  useScrollToTop();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <S.GeneralInfo>
      <h2>Truyện theo dõi</h2>

      <S.ComicFollow>
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
    </S.GeneralInfo>
  );
};

export default FollowComics;
