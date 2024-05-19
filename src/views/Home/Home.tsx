// src/views/Home/Home.tsx
import React from 'react';
import Layout from '../../components/common/Layout/Layout';
import useMockHeroes from '../../hooks/useMockHeroes';
import MainCard from '../../components/common/MainCard/MainCard';
import Slider from 'react-slick';
import { HomeContainer, CarouselWrapper, CustomArrow } from './Home.styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import redArrow from '../../assets/images/redArrow.svg';

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <CustomArrow
      className={className}
      style={{ ...style, display: 'block', backgroundImage: `url(${redArrow})` }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <CustomArrow
      className={className}
      style={{ ...style, display: 'block', backgroundImage: `url(${redArrow})`, transform: 'rotate(180deg)' }}
      onClick={onClick}
    />
  );
};

const Home: React.FC = () => {
  const heroes = useMockHeroes();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Layout>
      <HomeContainer>
        <CarouselWrapper>
          <Slider {...settings}>
            {heroes.map(hero => (
              <MainCard
                key={hero.id}
                id={hero.id}
                image={hero.image}
                name={hero.name}
                description={hero.description}
              />
            ))}
          </Slider>
        </CarouselWrapper>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
