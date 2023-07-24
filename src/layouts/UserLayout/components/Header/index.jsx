import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import pic from "img/Screenshot 2023-05-01 142134 (3).png";
import { ROUTES } from "constants/routes";
import { CaretDownOutlined } from "@ant-design/icons";

import * as S from "./styles";
import { Button, Col, Dropdown, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductListRequest } from "redux/slicers/product.slice";
import { getUserInfoRequest, logoutRequest } from "redux/slicers/auth.slice";
import { PRODUCT_LIMIT } from "constants/paging";
import { generatePath, useParams } from "react-router-dom/dist";

function AdminHeader() {
  const [searchParams, setSearchParams] = useState({
    keyword: "",
  });
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleFilter = (values) => {
    console.log("🚀 ~ file: index.jsx:20 ~ handleFilter ~ values:", values);
    setSearchParams({
      ...searchParams,
      keyword: values,
    });
    dispatch(
      getProductListRequest({
        ...searchParams,
        keyword: values,
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
  };

  useEffect(() => {
    dispatch(getUserInfoRequest({ id: parseInt(id) }));
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <S.HeaderWrapper>
        <Col>
          <Link to={ROUTES.USER.HOME}>
            <S.Logo src={pic} alt="" />
          </Link>
        </Col>
        <Col>
          <S.NavLinkContainer>
            <S.Searchs
              placeholder="Tìm kiếm"
              enterButton
              size="large"
              onSearch={(value) =>
                handleFilter(value, navigate(ROUTES.FITLER_SEARCH_PAGE))
              }
            />

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
                <Button onClick={() => navigate(ROUTES.LOGIN)}>
                  Đăng nhập
                </Button>
              )}
            </Dropdown>
          </S.NavLinkContainer>
        </Col>
      </S.HeaderWrapper>
    </div>
  );
}

export default AdminHeader;
