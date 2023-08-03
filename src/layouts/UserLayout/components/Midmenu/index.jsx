import { Col, Dropdown, Row, Space } from "antd";
import React, { useEffect, useMemo } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import qs from "qs";

import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryListRequest } from "redux/slicers/category.slice";
import { setFilterParams } from "redux/slicers/common.slice";

const Midmenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);
  const { filterParams } = useSelector((state) => state.common);
  useEffect(() => {
    dispatch(getCategoryListRequest());
  }, []);

  const items = [
    {
      key: "2",
      label: "Action",
      onClick: () => {
        dispatch(setFilterParams({ ...filterParams, categoryId: [1] }));
        navigate({
          pathname: ROUTES.FITLER_SEARCH_PAGE,
          search: qs.stringify({ ...filterParams, categoryId: [1] }),
        });
      },
    },
    {
      key: "3",
      label: "Tiên hiệp",
      onClick: () => {
        dispatch(setFilterParams({ ...filterParams, categoryId: [2] }));
        navigate({
          pathname: ROUTES.FITLER_SEARCH_PAGE,
          search: qs.stringify({ ...filterParams, categoryId: [2] }),
        });
      },
    },
    {
      key: "4",
      label: "Huyền huyễn",
      onClick: () => {
        dispatch(setFilterParams({ ...filterParams, categoryId: [3] }));
        navigate({
          pathname: ROUTES.FITLER_SEARCH_PAGE,
          search: qs.stringify({ ...filterParams, categoryId: [3] }),
        });
      },
    },
    {
      key: "5",
      label: "Kinh dị",
      onClick: () => {
        dispatch(setFilterParams({ ...filterParams, categoryId: [4] }));
        navigate({
          pathname: ROUTES.FITLER_SEARCH_PAGE,
          search: qs.stringify({ ...filterParams, categoryId: [4] }),
        });
      },
    },
    {
      key: "6",
      label: "Đô thị",
      onClick: () => {
        dispatch(setFilterParams({ ...filterParams, categoryId: [5] }));
        navigate({
          pathname: ROUTES.FITLER_SEARCH_PAGE,
          search: qs.stringify({ ...filterParams, categoryId: [5] }),
        });
      },
    },
    {
      key: "7",
      label: "Trinh thám",
      onClick: () => {
        dispatch(setFilterParams({ ...filterParams, categoryId: [6] }));
        navigate({
          pathname: ROUTES.FITLER_SEARCH_PAGE,
          search: qs.stringify({ ...filterParams, categoryId: [6] }),
        });
      },
    },
    {
      key: "8",
      label: "Xuyên không",
      onClick: () => {
        dispatch(setFilterParams({ ...filterParams, categoryId: [7] }));
        navigate({
          pathname: ROUTES.FITLER_SEARCH_PAGE,
          search: qs.stringify({ ...filterParams, categoryId: [7] }),
        });
      },
    },
    {
      key: "9",
      label: "Thể thao",
      onClick: () => {
        dispatch(setFilterParams({ ...filterParams, categoryId: [11] }));
        navigate({
          pathname: ROUTES.FITLER_SEARCH_PAGE,
          search: qs.stringify({ ...filterParams, categoryId: [11] }),
        });
      },
    },
  ];

  // const renderNavLink = useMemo(() => {
  //   return categoryList.data.map((item) => {
  //     const newFilterParams = {
  //       ...filterParams,
  //       categoryId: [item.id],
  //     };
  //     return (
  //       <S.NavLinkItem
  //         key={item.id}
  //         onClick={() => {
  //           dispatch(setFilterParams(newFilterParams));
  //           navigate({
  //             pathname: ROUTES.USER.PRODUCT_LIST,
  //             search: qs.stringify(newFilterParams),
  //           });
  //         }}
  //       >
  //         <h4>{item.name}</h4>
  //       </S.NavLinkItem>
  //     );
  //   });
  // }, [categoryList.data, filterParams]);
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
          <S.Li
            onClick={() => {
              dispatch(setFilterParams({ ...filterParams, categoryId: [10] }));
              navigate({
                pathname: ROUTES.FITLER_SEARCH_PAGE,
                search: qs.stringify({ ...filterParams, categoryId: [10] }),
              });
            }}
          >
            Manhua
          </S.Li>
          <S.Li
            onClick={() => {
              dispatch(setFilterParams({ ...filterParams, categoryId: [9] }));
              navigate({
                pathname: ROUTES.FITLER_SEARCH_PAGE,
                search: qs.stringify({ ...filterParams, categoryId: [9] }),
              });
            }}
          >
            Manhwa
          </S.Li>
          <S.Li
            onClick={() => {
              dispatch(setFilterParams({ ...filterParams, categoryId: [8] }));
              navigate({
                pathname: ROUTES.FITLER_SEARCH_PAGE,
                search: qs.stringify({ ...filterParams, categoryId: [8] }),
              });
            }}
          >
            Manga
          </S.Li>
        </S.Ul>
      </Row>
    </S.Container>
  );
};

export default Midmenu;
