import { styled } from "styled-components";

export const HomeContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 3rem;

margin-top: 5rem;
`

export const CarouselWrapper = styled.div`
  width: 90%;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-prev, .slick-next {
    z-index: 1;
  }
  .slick-prev:before, .slick-next:before {
   content: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CustomArrow = styled.div`
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
`;
