import Slider from "react-slick";

import styled from "styled-components";

export const Img = styled.img`
  width: 100vw;
  height: 350px;
`;

export const Slide = styled(Slider)`
  & .slick-dots {
    bottom: 10px;
  }

  & .slick-next {
    right: 1px;
  }
  & .slick-prev {
    left: 1px;
  }
`;
