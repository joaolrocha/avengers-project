// src/views/Movies/Movies.tsx
import React, { useState } from 'react';
import Layout from '../../components/common/Layout/Layout';
import useMockMovies from '../../hooks/useMockMovies';
import MainCard from '../../components/common/MainCard/MainCard';

import MovieFilter from '../../components/common/MovieFilter/MovieFilter';
import Slider from 'react-slick';
import { HomeContainer, CarouselWrapper, CustomArrow } from '../Home/Home.styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import redArrow from '../../assets/images/redArrow.svg';
import { Movie } from '../../data/mockMovies';
import MovieDetailsModal from '../../components/common/ModalMoviesDetails/ModalMoviesDetails';

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

const Movies: React.FC = () => {
  const movies = useMockMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [sortBy, setSortBy] = useState<string>('releaseDate');

  const handleDetailsClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortBy === 'releaseDate') {
      return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
    }
    return a.chronology - b.chronology;
  });

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
      <MovieFilter sortBy={sortBy} setSortBy={setSortBy} />
      <HomeContainer>
        <CarouselWrapper>
          <Slider {...settings}>
            {sortedMovies.map(movie => (
              <MainCard
                key={movie.id}
                item={movie}
                onDetailsClick={() => handleDetailsClick(movie)}
              />
            ))}
          </Slider>
        </CarouselWrapper>
      </HomeContainer>
      {selectedMovie && (
        <MovieDetailsModal
          isOpen={!!selectedMovie}
          onClose={handleCloseModal}
          movie={selectedMovie}
        />
      )}
    </Layout>
  );
};

export default Movies;
