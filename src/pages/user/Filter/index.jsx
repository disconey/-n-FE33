import { Checkbox, Col, Row, Select, Space } from "antd";
import ProductCard from "layouts/UserLayout/components/ProductCard";
import qs from "qs";

import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getProductListRequest } from "redux/slicers/product.slice";
import { getChapterListRequest } from "redux/slicers/chapter.slice";
import { getCategoryListRequest } from "redux/slicers/category.slice";
import { PRODUCT_LIMIT } from "constants/paging";
import useScrollToTop from "hooks/useSrcollToTop";
import { useLocation, useNavigate } from "react-router-dom";
import { clearFilterParams, setFilterParams } from "redux/slicers/common.slice";
import { ROUTES } from "constants/routes";

const FilterSearchPage = () => {
  useScrollToTop();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);
  const { productList } = useSelector((state) => state.product);
  const { filterParams } = useSelector((state) => state.common);

  useEffect(() => {
    dispatch(
      getProductListRequest({
        ...filterParams,
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
    dispatch(getChapterListRequest());
    dispatch(getCategoryListRequest());

    return () => dispatch(clearFilterParams());
  }, []);

  const handleFilter = (key, value) => {
    const newFilterParams = {
      ...filterParams,
      [key]: value,
    };
    dispatch(setFilterParams(newFilterParams));
    dispatch(
      getProductListRequest({
        ...newFilterParams,
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
    navigate({
      pathname: ROUTES.FITLER_SEARCH_PAGE,
      search: qs.stringify(newFilterParams),
    });
  };
  const pageCount = Math.ceil(productList.meta.total / productList.meta.limit);
  console.log(
    "🚀 ~ file: index.jsx:50 ~ FilterSearchPage ~ pageCount:",
    pageCount
  );

  const handlePageClick = (event) => {
    console.log(
      "🚀 ~ file: index.jsx:50 ~ handlePageClick ~ event:",
      event.selected
    );
    dispatch(
      getProductListRequest({
        ...filterParams,
        page: event.selected + 1,
        limit: PRODUCT_LIMIT,
      })
    );
  };
  const renderProductList = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Col span={12}>
          <Checkbox key={item.id} value={item.id}>
            {item.name}
          </Checkbox>
        </Col>
      );
    });
  }, [categoryList.data]);
  return (
    <div>
      <S.MainFilterSearch>
        <Row gutter={[24, 16]}>
          <Col lg={8} md={8} sm={24}>
            <S.FilterSearch>
              <S.Type>
                <>
                  <span>
                    <h3>Thể loại</h3>
                  </span>
                  <hr />
                  <Space size={[0, 8]} wrap>
                    <Checkbox.Group
                      onChange={(values) => handleFilter("categoryId", values)}
                      value={filterParams.categoryId}
                    >
                      <Row>{renderProductList}</Row>
                    </Checkbox.Group>
                  </Space>
                </>
              </S.Type>
            </S.FilterSearch>
          </Col>
          <Col lg={16} md={16} sm={24}>
            <S.LeftCard>
              <S.FilterSelect>
                <Space wrap>
                  <Select
                    value={filterParams.sort}
                    style={{
                      width: 130,
                    }}
                    bordered={false}
                    onChange={(value) => handleFilter("sort", value)}
                    placeholder="Mới cập nhật"
                  >
                    <Select.Option value="updatedAt.desc">
                      Mới cập nhật
                    </Select.Option>
                    <Select.Option value="createdAt.desc">
                      Mới đăng
                    </Select.Option>
                  </Select>

                  <Select
                    defaultValue="dayranking"
                    style={{
                      width: 180,
                    }}
                    bordered={false}
                  >
                    <Select.Option value="dayranking">
                      Bảng xếp hạng [ngày]
                    </Select.Option>
                    <Select.Option value="weeklyranking">
                      Bảng xếp hạng [tuần]
                    </Select.Option>
                    <Select.Option value="monthlyranking">
                      Bảng xếp hạng [tháng]
                    </Select.Option>
                    <Select.Option value="allranking">
                      Bảng xếp hạng [toàn]
                    </Select.Option>
                  </Select>

                  <Select
                    style={{
                      width: 150,
                    }}
                    bordered={false}
                    onChange={(value) => handleFilter("statusId", value)}
                    value={filterParams.status}
                    placeholder="Tình trạng"
                  >
                    <Select.Option value="1">Đang tiến hành</Select.Option>
                    <Select.Option value="2">Đã hoàn thành</Select.Option>
                  </Select>
                </Space>

                <hr />
              </S.FilterSelect>

              <Row gutter={[24, 16]}>
                <ProductCard />
              </Row>
              <Row justify="center">
                <S.Pagination
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                />
              </Row>
            </S.LeftCard>
          </Col>
        </Row>
      </S.MainFilterSearch>
    </div>
  );
};

export default FilterSearchPage;
