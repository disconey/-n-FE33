import { Col, Dropdown, Row, Space } from "antd";
import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";

import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Tất cả
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Action
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Adult
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Adventure
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Anime
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Chuyển Sinh
      </a>
    ),
  },
  {
    key: "7",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Comedy
      </a>
    ),
  },
  {
    key: "8",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Comic
      </a>
    ),
  },
  {
    key: "9",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Cooking
      </a>
    ),
  },
  {
    key: "10",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Cổ Đại
      </a>
    ),
  },
  {
    key: "11",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Doujinshi
      </a>
    ),
  },
];

const Midmenu = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Row>
        <S.Ul>
          <S.Li onClick={() => navigate(ROUTES.FITLER_SEARCH_PAGE)}>Hot</S.Li>
          <S.CustomDropDown
            menu={{
              items,
            }}
          >
            <S.A onClick={() => navigate(ROUTES.FITLER_SEARCH_PAGE)}>
              <Space>
                Thể loại
                <CaretDownOutlined />
              </Space>
            </S.A>
          </S.CustomDropDown>

          <S.Li>Theo dõi</S.Li>
          <S.Li onClick={() => navigate(ROUTES.FITLER_SEARCH_PAGE)}>
            Manhua
          </S.Li>
          <S.Li onClick={() => navigate(ROUTES.FITLER_SEARCH_PAGE)}>
            Manhwa
          </S.Li>
          <S.Li onClick={() => navigate(ROUTES.FITLER_SEARCH_PAGE)}>Manga</S.Li>
        </S.Ul>
      </Row>
    </S.Container>
  );
};

export default Midmenu;
