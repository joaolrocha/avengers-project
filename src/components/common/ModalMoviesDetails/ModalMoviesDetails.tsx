// src/components/common/MovieDetailsModal/MovieDetailsModal.tsx
import React from 'react';
import { Movie } from '../../../data/mockMovies';
import {
  CloseButton,
  FansContainer,
  HeroImage,
  ModalContent,
  ModalContentLeft,
  ModalContentRight,
  ModalOverlay,
  ModalTitle,
  RatingStars,
  Star,
  AvailabilityContainer
} from '../ModalDetails/ModalDetails.styles'

interface MovieDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: Movie;
}

const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({ isOpen, onClose, movie }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <ModalContentLeft>
          <HeroImage src={movie.image} alt={movie.title} />
        </ModalContentLeft>

        <ModalContentRight>
          <ModalTitle>{movie.title}</ModalTitle>

          <AvailabilityContainer>
            <h3>Available On</h3>
            <p>{movie.availableOn}</p>
          </AvailabilityContainer>

          <FansContainer>
            <h3>Fan Ratings</h3>
            <RatingStars>
              {[...Array(movie.rating)].map((_, index) => (
                <Star key={index}>★</Star>
              ))}
              {[...Array(5 - movie.rating)].map((_, index) => (
                <Star key={index} style={{ color: 'gray' }}>★</Star>
              ))}
            </RatingStars>
          </FansContainer>

          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalContentRight>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MovieDetailsModal;

