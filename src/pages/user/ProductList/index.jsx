import { useEffect, useMemo } from "react";
import { Card, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { PRODUCT_LIMIT } from "constants/paging";
import { getProductListRequest } from "redux/slicers/product.slice";

import * as S from "./styles";

function ProductListPage() {
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(
      getProductListRequest({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
  }, []);

  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Col key={item.id} xs={12} xl={8}>
          <Card title={item.name} size="small">
            <p>{item.price.toLocaleString()} VND</p>
          </Card>
        </Col>
      );
    });
  }, [productList.data]);

  return (
    <S.ProductListWrapper>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card title="Filter" size="small">
            Filter content
          </Card>
        </Col>
        <Col span={18}>
          <Row gutter={[16, 16]}>{renderProductList}</Row>
        </Col>
      </Row>
    </S.ProductListWrapper>
  );
}

export default ProductListPage;
