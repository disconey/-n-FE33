import { Button, Segmented } from "antd";
import React, { useMemo } from "react";
import pic from "img/1559251677.jpg";
import {
  DeleteOutlined,
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
  RightOutlined,
} from "@ant-design/icons";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteHistoryRequest } from "redux/slicers/history.slice";

const RightContent = () => {
  const dispatch = useDispatch();
  const { historyList } = useSelector((state) => state.history);

  const handleDeleteHistoryItem = (productId) => {
    dispatch(
      deleteHistoryRequest({
        productId: productId,
      })
    );
  };

  const renderHistoryList = useMemo(() => {
    if (!historyList) return null;
    return historyList.map((item, index) => {
      if (index > 2) return null;
      return (
        <S.CardReading>
          <S.ImgComic src={item.productAvatar} alt="" />
          <S.Item>
            <S.NameComic>{item.productName}</S.NameComic>
            <p>
              Đọc tiếp {item.chapterName}
              <RightOutlined />
            </p>
          </S.Item>
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteHistoryItem(item.productId)}
          >
            Xoá
          </Button>
        </S.CardReading>
      );
    });
  }, [historyList]);
  return (
    <div className="right-content">
      <S.Reading>
        <S.TitleReading>
          <S.Text>Đang đọc</S.Text>
          <S.P>Xem tất cả</S.P>
        </S.TitleReading>
        <div>{renderHistoryList}</div>
      </S.Reading>

      <div className="top-view">
        <S.TopView>Bảng xếp hạng</S.TopView>
        <S.Charts>
          <Segmented block options={["Ngày", "Tuần", "Tháng"]} />
          <S.Ul>
            <S.Li>
              <S.CardItemCharts>
                <S.Number>1</S.Number>
                <S.ImgComicCharts src={pic} alt="" />
                <S.ContentCharts>
                  <div>
                    <h4>Thể thao cực hạn</h4>
                    <p>Chapter 333</p>
                  </div>
                  <div>
                    <S.ItemSide>
                      <EyeOutlined />
                      <p>333</p>
                    </S.ItemSide>
                    <S.ItemSide>
                      <MessageOutlined />
                      <p>222</p>
                    </S.ItemSide>
                    <S.ItemSide>
                      <HeartOutlined />
                      <p>111</p>
                    </S.ItemSide>
                  </div>
                </S.ContentCharts>
              </S.CardItemCharts>
            </S.Li>
            <S.Li>
              <S.CardItemCharts>
                <S.Number>2</S.Number>
                <S.ImgComicCharts src={pic} alt="" />
                <S.ContentCharts>
                  <div>
                    <h4>Thể thao cực hạn</h4>
                    <p>Chapter 333</p>
                  </div>
                  <div>
                    <S.ItemSide>
                      <EyeOutlined />
                      <p>333</p>
                    </S.ItemSide>
                    <S.ItemSide>
                      <MessageOutlined />
                      <p>222</p>
                    </S.ItemSide>
                    <S.ItemSide>
                      <HeartOutlined />
                      <p>111</p>
                    </S.ItemSide>
                  </div>
                </S.ContentCharts>
              </S.CardItemCharts>
            </S.Li>
            <S.Li>
              <S.CardItemCharts>
                <S.Number>3</S.Number>
                <S.ImgComicCharts src={pic} alt="" />
                <S.ContentCharts>
                  <div>
                    <h4>Thể thao cực hạn</h4>
                    <p>Chapter 333</p>
                  </div>
                  <div>
                    <S.ItemSide>
                      <EyeOutlined />
                      <p>333</p>
                    </S.ItemSide>
                    <S.ItemSide>
                      <MessageOutlined />
                      <p>222</p>
                    </S.ItemSide>
                    <S.ItemSide>
                      <HeartOutlined />
                      <p>111</p>
                    </S.ItemSide>
                  </div>
                </S.ContentCharts>
              </S.CardItemCharts>
            </S.Li>
            <S.Li>
              <S.CardItemCharts>
                <S.Number>4</S.Number>
                <S.ImgComicCharts src={pic} alt="" />
                <S.ContentCharts>
                  <div>
                    <h4>Thể thao cực hạn</h4>
                    <p>Chapter 333</p>
                  </div>
                  <div>
                    <S.ItemSide>
                      <EyeOutlined />
                      <p>333</p>
                    </S.ItemSide>
                    <S.ItemSide>
                      <MessageOutlined />
                      <p>222</p>
                    </S.ItemSide>
                    <S.ItemSide>
                      <HeartOutlined />
                      <p>111</p>
                    </S.ItemSide>
                  </div>
                </S.ContentCharts>
              </S.CardItemCharts>
            </S.Li>
            <S.Li>
              <S.CardItemCharts>
                <S.Number>5</S.Number>
                <S.ImgComicCharts src={pic} alt="" />
                <S.ContentCharts>
                  <div>
                    <h4>Thể thao cực hạn</h4>
                    <p>Chapter 333</p>
                  </div>
                  <div>
                    <S.ItemSide>
                      <EyeOutlined />
                      <p>333</p>
                    </S.ItemSide>
                    <S.ItemSide>
                      <MessageOutlined />
                      <p>222</p>
                    </S.ItemSide>
                    <S.ItemSide>
                      <HeartOutlined />
                      <p>111</p>
                    </S.ItemSide>
                  </div>
                </S.ContentCharts>
              </S.CardItemCharts>
            </S.Li>
          </S.Ul>
          <S.CenterButton>
            <S.CustomButton type="primary" size="large">
              Xem Thêm
            </S.CustomButton>
          </S.CenterButton>
        </S.Charts>
      </div>
    </div>
  );
};

export default RightContent;
