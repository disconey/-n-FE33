import React from "react";
import pic from "img/illustration-text-graphic-design-Gekkan-Shoujo-Nozaki-kun-comics-brand-43284-wallhere.com.png";
import pict from "img/illustration-text-poster-brand-Cowboy-Bebop-ART-43398-wallhere.com.jpg";
import picts from "img/illustration-anime-Fate-Series-comics-comic-book-43430-wallhere.com.png";
import pice from "img/vehicle-Haikyuu-43159-wallhere.com.jpg";
import * as S from "./styles";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};
const Carousel = () => {
  return (
    <div>
      <S.Slide {...settings}>
        <div>
          <S.Img src={pic} alt="" />
        </div>
        <div>
          <S.Img src={pict} alt="" />
        </div>
        <div>
          <S.Img src={picts} alt="" />
        </div>
        <div>
          <S.Img src={pice} alt="" />
        </div>
      </S.Slide>
    </div>
  );
};

export default Carousel;
