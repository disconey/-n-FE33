import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import pic from "img/Screenshot 2023-05-01 142134 (3).png";
import { ROUTES } from "constants/routes";
import { CaretDownOutlined } from "@ant-design/icons";
import qs from "qs";

import * as S from "./styles";
import { Button, Col, Dropdown, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductListRequest } from "redux/slicers/product.slice";
import { getUserInfoRequest, logoutRequest } from "redux/slicers/auth.slice";
import { PRODUCT_LIMIT } from "constants/paging";
import { generatePath, useParams } from "react-router-dom/dist";
import { setFilterParams } from "redux/slicers/common.slice";

function AdminHeader() {
  const [keyword, setKeyword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const { filterParams } = useSelector((state) => state.common);

  const dispatch = useDispatch();

  useEffect(() => {
    setKeyword(filterParams.keyword);
  }, [filterParams.keyword]);

  const handleSearchKeyword = (e) => {
    if (e.key === "Enter") {
      const newFilterParams = {
        ...filterParams,
        keyword: e.target.value,
      };
      console.log(
        "🚀 ~ file: index.jsx:33 ~ handleSearchKeyword ~ newFilterParams:",
        newFilterParams
      );
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
    }
  };

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
              onKeyDown={(e) => handleSearchKeyword(e)}
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            />

            {userInfo.data.id ? (
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
                <div>
                  <Space>
                    <S.Avatar src={userInfo.data.avatar} />
                    <h3>
                      {userInfo.data.fullName} <CaretDownOutlined />
                    </h3>
                  </Space>
                </div>
              </Dropdown>
            ) : (
              <Button onClick={() => navigate(ROUTES.LOGIN)}>Đăng nhập</Button>
            )}
          </S.NavLinkContainer>
        </Col>
      </S.HeaderWrapper>
    </div>
  );
}

export default AdminHeader;
