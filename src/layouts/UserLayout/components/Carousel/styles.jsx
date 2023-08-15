import Slider from "react-slick";

import styled from "styled-components";

export const Img = styled.img`
  width: 100vw;
  height: 350px;
  object-fit: cover;
`;

export const Slide = styled(Slider)`
  & .slick-dots {
    bottom: 10px;
  }

  & .slick-next {
    right: 16px;
    z-index: 1;
  }
  & .slick-prev {
    left: 16px;
    z-index: 1;
  }
`;
