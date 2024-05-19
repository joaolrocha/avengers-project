// src/components/common/MovieFilter/MovieFilter.tsx
import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: 'Kastelov - Axiforma', Arial, sans-serif;
`;

interface MovieFilterProps {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const MovieFilter: React.FC<MovieFilterProps> = ({ sortBy, setSortBy }) => {
  return (
    <FilterContainer>
      <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="releaseDate">Release Date</option>
        <option value="chronology">Chronology</option>
      </Select>
    </FilterContainer>
  );
};

export default MovieFilter;
