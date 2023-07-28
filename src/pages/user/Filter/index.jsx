import { Checkbox, Col, Row, Select, Space } from "antd";
import ProductCard from "layouts/UserLayout/components/ProductCard";

import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getProductListRequest } from "redux/slicers/product.slice";
import { getChapterListRequest } from "redux/slicers/chapter.slice";
import { getCategoryListRequest } from "redux/slicers/category.slice";
import { PRODUCT_LIMIT } from "constants/paging";
import useScrollToTop from "hooks/useSrcollToTop";
import { useLocation } from "react-router-dom";

const FilterSearchPage = () => {
  useScrollToTop();
  const { state } = useLocation();
  const [filterParams, setFilterParams] = useState({
    categoryId: state?.categoryId ? [state?.categoryId] : [],
    order: "",
    statusId: [],
  });
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(
      getProductListRequest({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
    dispatch(getChapterListRequest());
    dispatch(getCategoryListRequest());
  }, []);

  const handleFitle = (key, values) => {
    setFilterParams({
      ...filterParams,
      [key]: values,
    });
    dispatch(
      getProductListRequest({
        ...filterParams,
        [key]: values,
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
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
                      onChange={(values) => handleFitle("categoryId", values)}
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
                    defaultValue="updatedAt.desc"
                    style={{
                      width: 130,
                    }}
                    bordered={false}
                    onChange={(value) => handleFitle("sort", value)}
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
                    defaultValue="Tình trạng"
                    style={{
                      width: 150,
                    }}
                    bordered={false}
                    onChange={(value) => handleFitle("sort", value)}
                  >
                    <Select.Option value="inprocess.desc">
                      Đang tiến hành
                    </Select.Option>
                    <Select.Option value="accomplished.desc">
                      Đã hoàn thành
                    </Select.Option>
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
