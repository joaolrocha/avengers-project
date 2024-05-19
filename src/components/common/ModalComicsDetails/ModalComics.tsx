// src/components/common/ComicDetailsModal/ComicDetailsModal.tsx
import React from 'react';
import { Comic } from '../../../data/mockComics';
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
  AvailabilityContainer,
  DescriptionContainer,
  ContainerLogos
} from '../ModalDetails/ModalDetails.styles';

import americanasIcon from '../../../assets/images/americanas.svg'
import amazonIcon from '../../../assets/images/amazon.svg'

interface ComicDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  comic: Comic;
}

const ComicDetailsModal: React.FC<ComicDetailsModalProps> = ({ isOpen, onClose, comic }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <ModalContentLeft>
          <HeroImage src={comic.image} alt={comic.title} />
        </ModalContentLeft>

        <ModalContentRight>
          <ModalTitle>{comic.title}</ModalTitle>

          <DescriptionContainer>
            <p>{comic.description}</p>
          </DescriptionContainer>

          <AvailabilityContainer>
            <h3>Disponivel em</h3>
            <ContainerLogos>
            <img src={americanasIcon} style={{width: '50px'}} alt="" />
            <img src={amazonIcon} style={{width: '50px'}} alt="" />
            </ContainerLogos>
          </AvailabilityContainer>

          <FansContainer>
            <h3>Crítica</h3>
            <RatingStars>
              {[...Array(comic.rating)].map((_, index) => (
                <Star key={index}>★</Star>
              ))}
              {[...Array(5 - comic.rating)].map((_, index) => (
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

export default ComicDetailsModal;
