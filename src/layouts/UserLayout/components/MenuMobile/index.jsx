import React, { useState } from "react";
import pic from "img/Screenshot 2023-05-01 142134 (3).png";
import { Button, Space } from "antd";
import {
  MenuOutlined,
  MessageOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import Midmenu from "../Midmenu";
import { ROUTES } from "constants/routes";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const MenuMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

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
        </S.Login>
      </S.Toggles>
      <S.InputMobile>
        <S.CustomInput placeholder="Tìm kiếm" enterButton />
      </S.InputMobile>
    </div>
  );
};

export default MenuMobile;
