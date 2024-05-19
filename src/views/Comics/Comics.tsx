// src/views/Comics/Comics.tsx
import React, { useState } from 'react';
import Layout from '../../components/common/Layout/Layout';
import useMockComics from '../../hooks/useMockComics';
import MainCard from '../../components/common/MainCard/MainCard';
import Slider from 'react-slick';
import { HomeContainer, CarouselWrapper, CustomArrow } from '../Home/Home.styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import redArrow from '../../assets/images/redArrow.svg'
import ComicDetailsModal from '../../components/common/ModalComicsDetails/ModalComics';
import { Comic } from '../../data/mockComics';

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

const Comics: React.FC = () => {
  const comics = useMockComics();
  const [selectedComic, setSelectedComic] = useState<Comic | null>(null);

  const handleDetailsClick = (comic: Comic) => {
    setSelectedComic(comic);
  };

  const handleCloseModal = () => {
    setSelectedComic(null);
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
            {comics.map(comic => (
              <MainCard
                key={comic.id}
                item={comic}
                onDetailsClick={() => handleDetailsClick(comic)}
              />
            ))}
          </Slider>
        </CarouselWrapper>
      </HomeContainer>
      {selectedComic && (
        <ComicDetailsModal
          isOpen={!!selectedComic}
          onClose={handleCloseModal}
          comic={selectedComic}
        />
      )}
    </Layout>
  );
};

export default Comics;
