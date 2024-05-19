// src/hooks/useMockHeroes.ts
import { useState, useEffect } from 'react';
import mockHeroes, { Hero } from '../data/mockHeroes';

const useMockHeroes = (): Hero[] => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setHeroes(mockHeroes);
  }, []);

  return heroes;
};

export default useMockHeroes;
