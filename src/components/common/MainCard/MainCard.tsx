// src/components/common/MainCard/MainCard.tsx
import React from 'react';
import { ButtonDetails, Card, CardContent, CardDescription, CardImage, CardName } from './MainCard.styles';
import { Hero } from '../../../data/mockHeroes';

interface MainCardProps {
  hero: Hero;
  onDetailsClick: () => void;
}

const MainCard: React.FC<MainCardProps> = ({ hero, onDetailsClick }) => {
  return (
    <Card>
      <CardImage src={hero.image} alt={hero.name} />
      <CardContent>
        <CardName>{hero.name}</CardName>
        <CardDescription>{hero.description}</CardDescription>
        <ButtonDetails onClick={onDetailsClick}>
          Ver detalhes
        </ButtonDetails>
      </CardContent>
    </Card>
  );
}

export default MainCard;
