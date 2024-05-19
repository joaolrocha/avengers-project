// src/data/mockComics.ts

import ThorViking from '../assets/images/thor_viking.png';
import SilverSurferParable from '../assets/images/silver_surfer_parable.png';
import WolverineOrigins from '../assets/images/wolverine_origins.png';

export interface Comic {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  availableOn: string;
  releaseDate: string; // Format: 'YYYY-MM-DD'
  chronology: number; // Order in comic chronology
}

const mockComics: Comic[] = [
  {
    id: 1,
    title: 'Thor: Viking',
    description: 'An epic tale of Thor facing off against ancient Viking warriors.',
    image: ThorViking,
    rating: 5,
    availableOn: 'Marvel Unlimited',
    releaseDate: '2004-06-15',
    chronology: 3,
  },
  {
    id: 2,
    title: 'Silver Surfer: Parable',
    description: 'The Silver Surfer battles Galactus in a story of cosmic proportions.',
    image: SilverSurferParable,
    rating: 4,
    availableOn: 'Marvel Unlimited',
    releaseDate: '1988-12-10',
    chronology: 1,
  },
  {
    id: 3,
    title: 'Wolverine: Origins',
    description: 'Discover the untold story of Wolverines past and his journey to becoming an X-Man.',
    image: WolverineOrigins,
    rating: 4,
    availableOn: 'Marvel Unlimited',
    releaseDate: '2006-04-05',
    chronology: 2,
  },
];

export default mockComics;
