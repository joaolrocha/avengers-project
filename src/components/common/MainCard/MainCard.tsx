// src/components/common/MainCard/MainCard.tsx
import React from 'react';
import { ButtonDetails, Card, CardContent, CardDescription, CardImage, CardName } from './MainCard.styles';
import { Hero } from '../../../data/mockHeroes';
import { Movie } from '../../../data/mockMovies';

interface MainCardProps {
  item: Hero | Movie;
  onDetailsClick: () => void;
}

const isHero = (item: Hero | Movie): item is Hero => {
  return (item as Hero).name !== undefined;
}

const MainCard: React.FC<MainCardProps> = ({ item, onDetailsClick }) => {
  return (
    <Card>
      <CardImage src={item.image} alt={isHero(item) ? item.name : item.title} />
      <CardContent>
        <CardName>{isHero(item) ? item.name : item.title}</CardName>
        <CardDescription>{item.description}</CardDescription>
        <ButtonDetails onClick={onDetailsClick}>
          Ver detalhes
        </ButtonDetails>
      </CardContent>
    </Card>
  );
}

export default MainCard;

