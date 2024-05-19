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
  DescriptionContainer
} from '../ModalDetails/ModalDetails.styles';

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
            <h3>Available On</h3>
            <p>{comic.availableOn}</p>
          </AvailabilityContainer>

          <FansContainer>
            <h3>Fan Ratings</h3>
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
