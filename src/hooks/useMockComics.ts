// src/hooks/useMockComics.ts
import { useState, useEffect } from 'react';
import mockComics, { Comic } from '../data/mockComics';

const useMockComics = (): Comic[] => {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    // Simulate fetching data with a delay
    const fetchComics = async () => {
      // Simulate a delay
      // await new Promise(resolve => setTimeout(resolve, 500));
      setComics(mockComics);
    };

    fetchComics();
  }, []);

  return comics;
};

export default useMockComics;
