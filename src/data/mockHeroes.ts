// src/data/mockHeroes.ts

import HomemAranha from '../assets/images/ironman.png'
import Thanos from '../assets/images/thanos.png'
import Hulk from '../assets/images/hulk.svg'
import Wanda from '../assets/images/wanda.svg'

export interface Hero {
  id: number;
  name: string;
  description: string;
  image: string;
  films: string[];
  rating: number;
}

const mockHeroes: Hero[] = [
  {
    id: 1,
    name: 'Spider-Man',
    description: 'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.',
    image: HomemAranha,
    films: ['Spider-Man: Homecoming', 'Spider-Man: Far From Home', 'Spider-Man: No Way Home'],
    rating: 5,
  },
  {
    id: 2,
    name: 'Thanos',
    description: 'A lua Titã era governada por mentor, quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.',
    image: Thanos,
    films: ['Avengers: Infinity War', 'Avengers: Endgame'],
    rating: 4,
  },
  {
    id: 3,
    name: 'Hulk',
    description: 'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego de Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.',
    image: Hulk,
    films: ['The Incredible Hulk', 'The Avengers', 'Thor: Ragnarok'],
    rating: 3,
  },
  {
    id: 4,
    name: 'Wanda Maximoff',
    description: 'Wanda Maximoff foi sequestrada da Sérvia e trazida para a montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.',
    image: Wanda,
    films: ['Avengers: Age of Ultron', 'Avengers: Infinity War', 'Doctor Strange in the Multiverse of Madness'],
    rating: 5,
  },
];

export default mockHeroes;

