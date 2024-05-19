// src/hooks/useMockMovies.ts
import { useState, useEffect } from 'react';
import mockMovies, { Movie } from '../data/mockMovies';

const useMockMovies = (): Movie[] => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Simulate fetching data with a delay
    const fetchMovies = async () => {
      // Simulate a delay
  
      setMovies(mockMovies);
    };

    fetchMovies();
  }, []);

  return movies;
};

export default useMockMovies;
