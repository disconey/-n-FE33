import React, { useState } from "react";
import pic from "img/Screenshot 2023-05-01 142134 (3).png";
import { Button, Dropdown, Space } from "antd";
import {
  MenuOutlined,
  MessageOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import Midmenu from "../Midmenu";
import { ROUTES } from "constants/routes";
import { Navigate, generatePath, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "redux/slicers/auth.slice";
const MenuMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const navigate = useNavigate();
  return (
    <div>
      <S.ContainerMenuMobile>
        <S.Logo src={pic} alt="" />
        <Button type="primary" onClick={toggleMenu}>
          <MenuOutlined />
        </Button>
      </S.ContainerMenuMobile>

      <S.Toggles style={showMenu ? { display: "block" } : { display: "none" }}>
        <S.Ul>
          <S.Li>Hot</S.Li>
          <S.Li>Mới</S.Li>
          <S.Li>Thể Loại</S.Li>
          <S.Li>Theo dõi</S.Li>
          <S.Li>Manhua</S.Li>
          <S.Li>Manhwa</S.Li>
          <S.Li>Manga</S.Li>
        </S.Ul>
        <S.Login>
          <Dropdown
            menu={{
              items: [
                {
                  key: 1,
                  label: "Thông tin cá nhân",
                  onClick: () =>
                    navigate(
                      generatePath(ROUTES.PERSONAL.GENERALINFO, {
                        id: userInfo.data.id,
                      })
                    ),
                },
                {
                  key: 2,
                  label: "Đăng xuất",
                  onClick: () => dispatch(logoutRequest()),
                },
              ],
            }}
          >
            {userInfo.data.id ? (
              <div>
                <Space>
                  <S.Avatar src={userInfo.data.avatar} />
                  <h3>
                    {userInfo.data.fullName} <CaretDownOutlined />
                  </h3>
                </Space>
              </div>
            ) : (
              <Button onClick={() => navigate(ROUTES.LOGIN)} type="primary">
                Đăng nhập
              </Button>
            )}
          </Dropdown>
        </S.Login>
      </S.Toggles>
      <S.InputMobile>
        <S.CustomInput placeholder="Tìm kiếm" enterButton />
      </S.InputMobile>
    </div>
  );
};

export default MenuMobile;
