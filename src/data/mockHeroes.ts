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
}



const mockHeroes: Hero[] = [
  {
    id: 1,
    name: 'Spider-Man',
    description: 'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.',
    image: HomemAranha, // Replace with actual image path
  },
  {
    id: 2,
    name: 'Thanos',
    description: 'A lua Titã era governada por mentor, quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.',
    image: Thanos, // Replace with actual image path
  },
  {
    id: 3,
    name: 'Hulk',
    description: 'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego de Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.',
    image: Hulk, // Replace with actual image path
  },
  {
    id: 4,
    name: 'Wanda Maximoff',
    description: 'Wanda Maximoff foi sequestrada da Sérvia e trazida para a montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.',
    image: Wanda, // Replace with actual image path
  },
];

export default mockHeroes;
