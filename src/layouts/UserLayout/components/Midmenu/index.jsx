import { Col, Dropdown, Row, Space } from "antd";
import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";

import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useSelector } from "react-redux";

const items = [
  {
    key: "1",
    label: <Link to={ROUTES.FITLER_SEARCH_PAGE}>Tất cả</Link>,
  },
  {
    key: "2",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 1 }}>
        Action
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 2 }}>
        Tiên hiệp
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 3 }}>
        Huyền huyễn
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 4 }}>
        Kinh dị
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 5 }}>
        Đô thị
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 6 }}>
        Trinh thám
      </Link>
    ),
  },
  {
    key: "8",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 7 }}>
        Xuyên không
      </Link>
    ),
  },
  {
    key: "9",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 8 }}>
        Manga
      </Link>
    ),
  },
  {
    key: "10",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 9 }}>
        Manhwa
      </Link>
    ),
  },
  {
    key: "11",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 10 }}>
        Manhua
      </Link>
    ),
  },
  {
    key: "12",
    label: (
      <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 11 }}>
        Thể thao
      </Link>
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
          <S.Li>
            <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 10 }}>
              Manhua
            </Link>
          </S.Li>
          <S.Li>
            <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 9 }}>
              Manhwa
            </Link>
          </S.Li>
          <S.Li>
            <Link to={ROUTES.FITLER_SEARCH_PAGE} state={{ categoryId: 8 }}>
              Manga
            </Link>
          </S.Li>
        </S.Ul>
      </Row>
    </S.Container>
  );
};

export default Midmenu;
