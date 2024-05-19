// src/data/mockMovies.ts

import IronMan from '../assets/images/ironman1.svg';
import IronMan2 from '../assets/images/ironman2.svg';
import Thor from '../assets/images/thor.svg';
import CaptainAmerica from '../assets/images/capitaoamerica.svg'
import CaptainMarvel from '../assets/images/capitamarvel.svg';

export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  availableOn: string;
  releaseDate: string; // Format: 'YYYY-MM-DD'
  chronology: number; // Order in MCU chronology
}

const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'Iron Man',
    description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
    image: IronMan,
    rating: 5,
    availableOn: 'Disney Plus',
    releaseDate: '2008-05-02',
    chronology: 3,
  },
  {
    id: 2,
    title: 'Iron Man 2',
    description: 'With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful madman with ties to his father\'s legacy.',
    image: IronMan2,
    rating: 4,
    availableOn: 'Disney Plus',
    releaseDate: '2010-05-07',
    chronology: 4,
  },
  {
    id: 3,
    title: 'Thor',
    description: 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
    image: Thor,
    rating: 4,
    availableOn: 'Disney Plus',
    releaseDate: '2011-05-06',
    chronology: 1,
  },
  {
    id: 4,
    title: 'Captain America',
    description: 'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization.',
    image: CaptainAmerica,
    rating: 5,
    availableOn: 'Disney Plus',
    releaseDate: '2011-07-22',
    chronology: 2,
  },
  {
    id: 5,
    title: 'Captain Marvel',
    description: 'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
    image: CaptainMarvel,
    rating: 4,
    availableOn: 'Disney Plus',
    releaseDate: '2019-03-08',
    chronology: 21,
  },
];

export default mockMovies;
