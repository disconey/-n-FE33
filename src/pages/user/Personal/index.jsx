import React, { useMemo } from "react";
import { Card, Row, Col, Breadcrumb, Space } from "antd";
import pic from "img/7334991209.jpg";

import { Link, Outlet, useLocation, generatePath } from "react-router-dom";
import { CameraOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";
import * as S from "./styles";
import useScrollToTop from "hooks/useSrcollToTop";
import { ROUTES } from "constants/routes";
import Midmenu from "layouts/UserLayout/components/Midmenu";
import AdminHeader from "layouts/UserLayout/components/Header";
import UserFooter from "layouts/UserLayout/components/Footer";
import { convertImageToBase64 } from "utils/file";
import { useSelector, useDispatch } from "react-redux";
import { changeAvatarRequest } from "redux/slicers/auth.slice";

const PersonalPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useScrollToTop();
  const { userInfo } = useSelector((state) => state.auth);

  const handleChangeAvatar = async (e) => {
    const imgBase64 = await convertImageToBase64(e.target.files[0]);
    await dispatch(
      changeAvatarRequest({ id: userInfo.data.id, avatar: imgBase64 })
    );
  };

  const PROFILE_MENU = [
    {
      label: "Thông tin chung",
      path: generatePath(ROUTES.PERSONAL.GENERALINFO, {
        id: userInfo.data.id,
      }),
    },
    {
      label: "Thông tin tài khoản",
      path: generatePath(ROUTES.PERSONAL.ACCOUNTINFO, {
        id: userInfo.data.id,
      }),
    },
    {
      label: "Truyện theo dõi",
      path: "",
    },
    {
      label: "Nạp xu",
      path: generatePath(ROUTES.PERSONAL.PAYMENT, {
        id: userInfo.data.id,
      }),
    },
    {
      label: "Lịch sử nạp tiền",
      path: "",
    },
    {
      label: "Lịch sử mở khoá",
      path: "",
    },
    {
      label: "Bình luận",
      path: "",
    },
    {
      label: "Đổi mật khẩu",
      path: "",
    },
  ];

  const renderProfileMenu = useMemo(() => {
    return PROFILE_MENU.map((item, index) => {
      return (
        <Link
          to={item.path}
          key={index}
          style={{ color: "rgba(0, 0, 0, 0.88)" }}
        >
          <S.ProfileMenuItem active={item.path === pathname}>
            {item.label}
          </S.ProfileMenuItem>
        </Link>
      );
    });
  }, [pathname]);

  const profileLabel = useMemo(() => {
    return PROFILE_MENU.find((item) => item.path === pathname)?.label;
  }, [pathname]);

  return (
    <div>
      <S.UserLayoutHeader>
        <AdminHeader />
        <Midmenu />
      </S.UserLayoutHeader>
      <S.PersonalWrapper>
        <Row gutter={[16, 16]}>
          <Col md={6}>
            <S.ProfileMenuWrapper bordered={false} size="small">
              <S.AvatarContainer>
                <S.AvatarUpload>
                  <S.AvatarEdit>
                    <input
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => handleChangeAvatar(e)}
                    />
                    <label for="imageUpload">
                      <CameraOutlined style={{ fontSize: 16 }} />
                    </label>
                  </S.AvatarEdit>
                  {userInfo.data.avatar ? (
                    <S.AvatarPreview
                      src={userInfo.data.avatar}
                      alt="User profile picture"
                    />
                  ) : (
                    <S.AvatarDefaultWrapper>
                      <S.AvatarDefaultContainer
                        icon={<UserOutlined style={{ fontSize: 36 }} />}
                      />
                    </S.AvatarDefaultWrapper>
                  )}
                </S.AvatarUpload>
                <h3>{userInfo.data.fullName}</h3>
                <p>{userInfo.data.email}</p>
              </S.AvatarContainer>
              <S.ProfileMenuContainer>
                {renderProfileMenu}
              </S.ProfileMenuContainer>
            </S.ProfileMenuWrapper>
          </Col>
          <Col md={18}>
            <Card bordered={false} title={profileLabel}>
              <Outlet />
            </Card>
          </Col>
        </Row>
      </S.PersonalWrapper>
      <UserFooter />
    </div>
  );
};

export default PersonalPage;
