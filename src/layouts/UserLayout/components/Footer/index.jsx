import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import pic from "img/Screenshot 2023-05-01 142134 (3).png";
import * as S from "./styles";

function UserFooter() {
  return (
    <S.FooterWrappers>
      <S.ImageIcon>
        <img src={pic} alt="" />
        <S.Icon>
          <FacebookOutlined />
          <YoutubeOutlined />
          <InstagramOutlined />
        </S.Icon>
        <p>Copyright © 2023 DNTruyen</p>
      </S.ImageIcon>
      <S.Ul>
        <S.Li>Liên hệ Quảng Cáo</S.Li>
        <S.Li>Chính sách bảo mật</S.Li>
        <S.Li>DMCA</S.Li>
      </S.Ul>
      <S.Introduce>
        <S.IntroduceP>
          Chúng tôi đã bắt đầu một cách hoàn toàn mới để tạo ra những câu chuyện
          và mở ra cho bất kỳ ai có câu chuyện để kể. Chúng tôi là ngôi nhà của
          hàng nghìn nội dung do người sáng tạo sở hữu với tầm nhìn đa dạng,
          tuyệt vời từ khắp nơi trên thế giới. Tham gia vào bộ truyện tranh lãng
          mạn, hài kịch, hành động, giả tưởng, kinh dị nguyên gốc mới nhất, v.v.
          từ những tên tuổi vừa và tên tuổi lớn - được tạo riêng cho DNTruyen.
          Chúng tôi sẵn sàng ở mọi nơi, mọi lúc và luôn miễn phí.
        </S.IntroduceP>
      </S.Introduce>
    </S.FooterWrappers>
  );
}

export default UserFooter;
