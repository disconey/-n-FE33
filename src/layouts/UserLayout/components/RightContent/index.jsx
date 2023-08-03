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
  }, [historyList.data]);
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
      <S.Category>
        <S.UlCategory>
          <S.LiCategory>Tất cả</S.LiCategory>
          <S.LiCategory>Action</S.LiCategory>
          <S.LiCategory>Adult</S.LiCategory>
          <S.LiCategory>Adventure</S.LiCategory>
          <S.LiCategory>Adventure</S.LiCategory>
          <S.LiCategory>Chuyển Sinh</S.LiCategory>
          <S.LiCategory>Comedy</S.LiCategory>
          <S.LiCategory>Comic</S.LiCategory>
          <S.LiCategory>Cooking</S.LiCategory>
          <S.LiCategory>Cổ Đại</S.LiCategory>
          <S.LiCategory>Doujinshi</S.LiCategory>
          <S.LiCategory>Drama</S.LiCategory>
          <S.LiCategory>Đam Mỹ</S.LiCategory>
          <S.LiCategory> Ecchi</S.LiCategory>
          <S.LiCategory>Fantasy</S.LiCategory>
          <S.LiCategory>Gender Bender</S.LiCategory>
          <S.LiCategory>Harem</S.LiCategory>
          <S.LiCategory>Historical</S.LiCategory>
          <S.LiCategory>Horror</S.LiCategory>
          <S.LiCategory>Josei</S.LiCategory>
          <S.LiCategory>Live action</S.LiCategory>
          <S.LiCategory>Manga</S.LiCategory>
          <S.LiCategory>Manhua</S.LiCategory>
          <S.LiCategory>Manhwa</S.LiCategory>
          <S.LiCategory>Martial Arts</S.LiCategory>
          <S.LiCategory>Mature</S.LiCategory>
          <S.LiCategory>Mecha</S.LiCategory>
          <S.LiCategory>Mystery</S.LiCategory>
          <S.LiCategory>Ngôn Tình</S.LiCategory>
          <S.LiCategory>One shot</S.LiCategory>
          <S.LiCategory>Psychological</S.LiCategory>
          <S.LiCategory>School Life</S.LiCategory>
          <S.LiCategory>Sci-fi</S.LiCategory>
          <S.LiCategory>Seinen</S.LiCategory>
          <S.LiCategory>Shoujo Ai</S.LiCategory>
          <S.LiCategory>Shounen Ai</S.LiCategory>
          <S.LiCategory>Slice of Life</S.LiCategory>
          <S.LiCategory>Smut</S.LiCategory>
          <S.LiCategory>Soft Yaoi</S.LiCategory>
          <S.LiCategory>Soft Yuri</S.LiCategory>
          <S.LiCategory>Sports</S.LiCategory>
          <S.LiCategory>Supernatural</S.LiCategory>
          <S.LiCategory>Thiếu Nhi</S.LiCategory>
          <S.LiCategory>Trinh Thám</S.LiCategory>
          <S.LiCategory>Truyện scan</S.LiCategory>
          <S.LiCategory>Tragedy</S.LiCategory>
          <S.LiCategory>Truyện Màu</S.LiCategory>
          <S.LiCategory>Webtoon</S.LiCategory>
          <S.LiCategory>Xuyên Không</S.LiCategory>
        </S.UlCategory>
      </S.Category>
    </div>
  );
};

export default RightContent;
