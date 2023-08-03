import React from "react";
import pic from "img/7334991209.jpg";

import { Outlet, useNavigate } from "react-router-dom";
import * as S from "./styles";
import useScrollToTop from "hooks/useSrcollToTop";
import { ROUTES } from "constants/routes";
import Midmenu from "layouts/UserLayout/components/Midmenu";
import AdminHeader from "layouts/UserLayout/components/Header";
import UserFooter from "layouts/UserLayout/components/Footer";
import { useSelector } from "react-redux";
import { generatePath } from "react-router-dom/dist";
const PersonalPage = () => {
  const navigate = useNavigate();
  useScrollToTop();
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <S.UserLayoutHeader>
        <AdminHeader />
        <Midmenu />
      </S.UserLayoutHeader>
      <S.PersonalWrapper>
        <S.LeftPersonal>
          <S.Avatar src={userInfo.data.avatar} alt="" />
          <S.NamePersonal>{userInfo.data.fullName}</S.NamePersonal>
          <S.ListPersonal>
            <S.ItemPersonal
              className="item-personal"
              onClick={() =>
                navigate(
                  generatePath(ROUTES.PERSONAL.GENERALINFO, {
                    id: userInfo.data.id,
                  })
                )
              }
            >
              Thông tin chung
            </S.ItemPersonal>
            <S.ItemPersonal
              className="item-personal"
              onClick={() =>
                navigate(
                  generatePath(ROUTES.PERSONAL.ACCOUNTINFO, {
                    id: userInfo.data.id,
                  })
                )
              }
            >
              Thông tin tài khoản
            </S.ItemPersonal>
            <S.ItemPersonal className="item-personal">
              Truyện theo dõi
            </S.ItemPersonal>
            <S.ItemPersonal
              className="item-personal"
              onClick={() =>
                navigate(
                  generatePath(ROUTES.PERSONAL.PAYMENT, {
                    id: userInfo.data.id,
                  })
                )
              }
            >
              Nạp xu
            </S.ItemPersonal>
            <S.ItemPersonal className="item-personal">
              Lịch sử nạp tiền
            </S.ItemPersonal>
            <S.ItemPersonal className="item-personal">
              Lịch sử mở khoá
            </S.ItemPersonal>
            <S.ItemPersonal className="item-personal">Bình luận</S.ItemPersonal>
            <S.ItemPersonal className="item-personal">Thoát</S.ItemPersonal>
          </S.ListPersonal>
        </S.LeftPersonal>
        <S.RightPersonal>
          <Outlet />
        </S.RightPersonal>
      </S.PersonalWrapper>
      <UserFooter />
    </div>
  );
};

export default PersonalPage;
