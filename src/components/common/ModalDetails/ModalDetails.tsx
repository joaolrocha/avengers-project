// src/components/common/HeroDetailsModal/HeroDetailsModal.tsx
import React from 'react';

import { Hero } from '../../../data/mockHeroes';
import { FilmList, FilmListItem, HeroImage, ModalContent, ModalContentLeft, ModalContentRight, ModalOverlay, ModalTitle, RatingStars, Star } from './ModalDetails.styles';

interface HeroDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  hero: Hero;
}


const HeroDetailsModal: React.FC<HeroDetailsModalProps> = ({ isOpen, onClose, hero }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <ModalContentLeft>
          <HeroImage src={hero.image} alt={hero.name} />
        </ModalContentLeft>


        <ModalContentRight>
          <ModalTitle>{hero.name}</ModalTitle>
          <h3>Aparições</h3>
          <FilmList>
            {hero.films.map((film, index) => (
              <FilmListItem key={index}>{film}</FilmListItem>
            ))}
          </FilmList>
          <h3>Avaliações dos Fãs</h3>
          <RatingStars>
            {[...Array(hero.rating)].map((_, index) => (
              <Star key={index}>★</Star>
            ))}
            {[...Array(5 - hero.rating)].map((_, index) => (
              <Star key={index} style={{ color: 'gray' }}>★</Star>
            ))}
          </RatingStars>
        </ModalContentRight>

      </ModalContent>
    </ModalOverlay>
  );
};

export default HeroDetailsModal;


{/* <ModalHeader>
          
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <HeroImage src={hero.image} alt={hero.name} />
        <h3>Films</h3>
        <FilmList>
          {hero.films.map((film, index) => (
            <FilmListItem key={index}>{film}</FilmListItem>
          ))}
        </FilmList>
        <h3>Rating</h3>
        <RatingStars>
          {[...Array(hero.rating)].map((_, index) => (
            <Star key={index}>★</Star>
          ))}
          {[...Array(5 - hero.rating)].map((_, index) => (
            <Star key={index} style={{ color: 'gray' }}>★</Star>
          ))}
        </RatingStars> */}