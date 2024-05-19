import { styled } from "styled-components";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Darkened background */
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: linear-gradient(to bottom, rgba(255, 0, 0, 1), rgba(64, 14, 14, 0.5));
  border-radius: 10px;

  width: 650px;
  height: 450px;
  color: white;
  font-family: 'Kastelov - Axiforma', Arial, sans-serif;
  display: flex;
  position: relative;
`;

export const ModalContentLeft = styled.div`
  width: 40%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
` 

export const ModalContentRight = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;


`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
`;

export const ModalTitle = styled.h2`
  display: flex;
  width: 100%;
  padding: 3rem;
`;

export const CloseButton = styled.button`
display: flex;
width: 100%;
justify-content: flex-end;
padding-right: 2rem;
/* border: 1px solid #fff; */
border-radius: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const HeroImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const FilmList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FansContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 3rem;

`

export const MoviesContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 3rem;
  height: 13rem;
`

export const FilmListItem = styled.li`
  margin-bottom: 5px;
`;

export const RatingStars = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const Star = styled.span`
  color: gold;
  font-size: 20px;
  margin-right: 5px;
`;
