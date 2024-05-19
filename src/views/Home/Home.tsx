// src/views/Home/Home.tsx
import React from 'react';
import Layout from '../../components/common/Layout/Layout';
import MainCard from '../../components/common/MainCard/MainCard';
import useMockHeroes from '../../hooks/useMockHeroes';
import { HomeContainer } from './Home.styles';

const Home: React.FC = () => {
  const heroes = useMockHeroes();

  return (
    <Layout>
      <HomeContainer>
        {heroes.map(hero => (
          <MainCard
            key={hero.id}
            id={hero.id}
            image={hero.image}
            name={hero.name}
            description={hero.description}
          />
        ))}
      </HomeContainer>
    </Layout>
  );
};
export default Home;
