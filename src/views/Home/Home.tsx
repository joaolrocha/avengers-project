// src/views/Home/Home.tsx
import React, { useState } from 'react';
import Layout from '../../components/common/Layout/Layout';
import useMockHeroes from '../../hooks/useMockHeroes';
import MainCard from '../../components/common/MainCard/MainCard';

import Slider from 'react-slick';
import { HomeContainer, CarouselWrapper, CustomArrow } from './Home.styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import redArrow from '../../assets/images/redArrow.svg';
import { Hero } from '../../data/mockHeroes';
import HeroDetailsModal from '../../components/common/ModalDetails/ModalDetails';

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
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const handleDetailsClick = (hero: Hero) => {
    setSelectedHero(hero);
  };

  const handleCloseModal = () => {
    setSelectedHero(null);
  };

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
                hero={hero}
                onDetailsClick={() => handleDetailsClick(hero)}
              />
            ))}
          </Slider>
        </CarouselWrapper>
      </HomeContainer>
      {selectedHero && (
        <HeroDetailsModal
          isOpen={!!selectedHero}
          onClose={handleCloseModal}
          hero={selectedHero}
        />
      )}
    </Layout>
  );
};

export default Home;

